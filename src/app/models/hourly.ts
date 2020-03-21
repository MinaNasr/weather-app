import {DataPointObjectHourly} from './DataPointObjectHourly';
export interface Hourly {
    summary:string,
    icon:string,
    data: DataPointObjectHourly[]
}