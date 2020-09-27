import { Location } from "./Location";

export interface Event {
  title: string;
  location: Location;
  startDate: string;
  endDate: string;
  description: Array<string>;
}
