import { createAkaHa } from "./AK/AkaHa";
import { createBellanore } from "./Benelli/Bellanore";
import { createRullete } from "./Mts/Rullete";
import { createPetushok200 } from "./P90/Petushok200";
import { createPikalo } from "./PL15/Pikalo";
import { createCustomRPK } from "./RPK/CustomRPK";
import { createDedPaz } from "./Toz/DedPazz";
import { createCustomVss } from "./Vss/CustomVss";
import { createFullAutoSKS } from "./SKS/FullAutoSKS";
import { createFullAutoSaiga } from "./Saiga/FullAutoInternalSaiga";
import { createFullAutoSaigaSKS } from "./SKS/SaigaSKS";

export class CustomWeapons
{
    public createCustomVss = createCustomVss;
    public createDedPaz = createDedPaz;
    public createBellanore = createBellanore;
    public createRullete = createRullete;
    public createPetushok200 = createPetushok200;
    public createCustomRPK = createCustomRPK;
    public createAkaHa = createAkaHa;
    public createPikalo = createPikalo;
    public createFullAutoSKS = createFullAutoSKS;
    public createFullAutoSaiga = createFullAutoSaiga;
    public createFullAutoSaigaSKS = createFullAutoSaigaSKS;
}