import type { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

import * as config from "../config/config.json";
import * as fs from "fs";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { VFS } from "@spt/utils/VFS";
import { IQuest } from "@spt/models/eft/common/tables/IQuest";

let logger: ILogger;

type Quest = {
    Filename: string;
    FileExtension: string;
    Quest: IQuest;
    Locales: any;
}

export class Quests 
{
    public main(serverDatabaseTables: IDatabaseTables, container: DependencyContainer, jsonUtil: JsonUtil, modName: string, modPath: string)
    {
        const VFS : VFS = container.resolve("VFS")
        const locales = serverDatabaseTables.locales.global;
        const traderId = "sashahimik";
        const ImageRouter : ImageRouter = container.resolve("ImageRouter")
        const imagesFilepath = `${modPath}res/quests/`;

        logger = container.resolve<ILogger>("WinstonLogger");

        //Quest Assort
        serverDatabaseTables.traders[traderId].questassort = jsonUtil.deserialize(VFS.readFile(`${modPath}db/questassort.json`));

        //Read and parse quest files
        const questPath = `${modPath}db/quests/`;
        const files = fs.readdirSync(questPath);
        for (const file of files) 
        {
            const quest = jsonUtil.deserialize<Quest>(VFS.readFile(`${questPath}`+file));
            ImageRouter.addRoute("/files/quest/icon/"+quest?.Filename,`${imagesFilepath}${quest?.Filename}.${quest?.FileExtension}`);
            if (config.Traders.Sasha.UnlockAllQuests) 
            {
                quest.Quest.conditions.AvailableForStart = [];
            }
            serverDatabaseTables.templates.quests[quest?.Quest?._id] = quest?.Quest;
            for (const locale in locales) 
            {
                for (const mailMessage of Object.entries<string>(quest.Locales?.en?.mail)) 
                {
                    locales[locale][mailMessage[0]] = mailMessage[1];
                }
            }
        }

        if (config.Traders.Sasha.UnlockAllItemsLL1) 
        {
            const traders = serverDatabaseTables.traders;
            for (const item in traders[traderId].assort.loyal_level_items) 
            {
                traders[traderId].assort.loyal_level_items[item] = 1;
            }
        }
    }
}