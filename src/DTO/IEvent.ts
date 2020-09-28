import { ILocation } from "./ILocation";

export interface IEvent {
  title: string;
  location: ILocation;
  startDate: string;
  endDate: string;
  description: Array<string>;
}
