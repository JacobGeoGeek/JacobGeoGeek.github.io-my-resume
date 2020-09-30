import { IEducation } from "../../../DTO/IEducation";
import { IEvent } from "../../../DTO/IEvent";
import { IGeneralInformation } from "../../../DTO/IGeneralInformation";
import { IResume } from "../../../DTO/IResume";
import { ISkills } from "../../../DTO/ISkills";
import { IWorkingExperience } from "../../../DTO/IWorkingExperience";

export class FactoryResume {
  private createGeneralInformation(
    generalInformation?: any
  ): IGeneralInformation {
    if (generalInformation) {
      return generalInformation as IGeneralInformation;
    }
    return {
      address: "",
      city: "",
      email: "",
      firstName: "",
      githubURL: "",
      homePhone: "",
      lastName: "",
      mobilePhone: "",
      postalCode: "",
      province: "",
    };
  }

  private createSkills(skills?: any): ISkills {
    if (skills) {
      return skills as ISkills;
    }
    return {
      languages: [],
      technical: {
        office: [],
        computerScience: {
          frameworks: [],
          programmingLanguages: [],
          tools: [],
        },
        geomatics: { CAD: [], GIS: [], other: [] },
      },
    };
  }

  public createEmptyResume(
    aboutMe?: any,
    educations?: any,
    generalInformation?: any,
    events?: any,
    skills?: any,
    workingExperiences?: any
  ): IResume {
    return {
      aboutMe: aboutMe ? (aboutMe as Array<string>) : [],
      educations: educations ? (educations as Array<IEducation>) : [],
      generalInformation: this.createGeneralInformation(generalInformation),
      events: events ? (events as Array<IEvent>) : [],
      skills: this.createSkills(skills),
      workingExperiences: workingExperiences
        ? (workingExperiences as Array<IWorkingExperience>)
        : [],
    };
  }
}
