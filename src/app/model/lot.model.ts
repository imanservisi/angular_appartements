import { Residence } from "./residence.model";

export class Lot {
    id! : number;
    nomLot! : string;
    dateAchat! : Date;
    dateVente! : Date;
    residence! : Residence;
}