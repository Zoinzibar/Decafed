import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import * as fs from "fs/promises";
import * as path from "path";
import { Pes7Lib } from "src/Pes7Lib";

export interface FileStructure 
{
    [key: string]: FileStructure | null;
}  

export class DependencyChecker 
{
    constructor(private sourceDir: string, private targetDir: string, private pes7Lib?: Pes7Lib) 
    {}

    // Method to recursively list all files and folders in a directory
    private async listFilesAndFolders(dir: string): Promise<string[]> 
    {
        const items = await fs.readdir(dir, { withFileTypes: true });
        const paths = await Promise.all(
            items.map(async (item) => 
            {
                const res = path.resolve(dir, item.name);
                return item.isDirectory() ? this.listFilesAndFolders(res) : res;
            })
        );
        return Array.prototype.concat(...paths);
    }

    // Method to check if files and folders exist in another directory
    public async checkDependencies(): Promise<void> 
    {
        const sourceItems = await this.listFilesAndFolders(this.sourceDir);

        for (const item of sourceItems) 
        {
            const relativePath = path.relative(this.sourceDir, item);
            const targetPath = path.join(this.targetDir, relativePath);

            try 
            {
                await fs.access(targetPath);
            }
            catch (error) 
            {
                this.pes7Lib.error("Not all dependencies installed properly! Please have a look on mod page and install dependencies: https://hub.sp-tarkov.com/files/file/1948-sasha-himik");
            }
        }

        this.pes7Lib.log("All dependencies installed properly!", LogTextColor.GREEN);
    }

    public async generateJsonStructure(): Promise<FileStructure> 
    {
        const generateStructure = async (dir: string): Promise<FileStructure> => 
        {
            const items = await fs.readdir(dir, { withFileTypes: true });
            const structure: FileStructure = {};
    
            for (const item of items) 
            {
                const res = path.resolve(dir, item.name);
                if (item.isDirectory()) 
                {
                    structure[item.name] = await generateStructure(res);
                }
                else 
                {
                    structure[item.name] = null;
                }
            }
    
            return structure;
        };
    
        return generateStructure(this.sourceDir);
    }

    public async saveJsonStructure(filePath: string): Promise<void> 
    {
        const structure = await this.generateJsonStructure();
        const jsonContent = JSON.stringify(structure, null, 2);
        await fs.writeFile(filePath, jsonContent, "utf-8");
    }

    public async checkJsonStructure(structure: FileStructure, dir: string = this.targetDir): Promise<boolean> 
    {
        const checkStructure = async (structure: FileStructure, currentDir: string): Promise<boolean> => 
        {
            for (const [name, subStructure] of Object.entries(structure)) 
            {
                const res = path.resolve(currentDir, name);
                try 
                {
                    await fs.access(res);
                    if (subStructure !== null) 
                    {
                        const exists = await checkStructure(subStructure, res);
                        if (!exists) return false;
                    }
                }
                catch 
                {
                    return false;
                }
            }
            return true;
        };
    
        return checkStructure(structure, dir);
    }
}