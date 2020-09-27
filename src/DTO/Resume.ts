import { Education } from "./Education";
import { GeneralInformation } from "./GeneralInformation";
import { Skills } from "./Skills";
import { WorkingExperience } from "./WorkingExperience";
import { Event } from "./Event";

export interface Resume {
  generalInformation: GeneralInformation;
  educations: Array<Education>;
  aboutMe: Array<string>;
  skills: Skills;
  workingExperiences: Array<WorkingExperience>;
  events: Array<Event>;
}
