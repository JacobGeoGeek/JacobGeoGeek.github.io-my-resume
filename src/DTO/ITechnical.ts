import { IComputerScience } from "./IComputerScience";
import { IGeomatics } from "./IGeomatics";

export interface ITechnical {
  office: Array<string>;
  geomatics: IGeomatics;
  computerScience: IComputerScience;
}
