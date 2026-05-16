import { CustomerModel } from "./customer-model";
import { ProcedureModel } from "./procedure-model";
import { SpecialistModel } from "./specialist-model";

export interface BookingModel{
    specialist: SpecialistModel;
    procedures: ProcedureModel[];
    date: Date;
    time: string;
    client: CustomerModel;
}