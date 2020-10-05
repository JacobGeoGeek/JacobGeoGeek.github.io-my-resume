import { IEducation } from "../../../DTO/IEducation";
import { IEvent } from "../../../DTO/IEvent";
import { IGeneralInformation } from "../../../DTO/IGeneralInformation";
import { IResume } from "../../../DTO/IResume";
import { ISkills } from "../../../DTO/ISkills";
import { IWorkingExperience } from "../../../DTO/IWorkingExperience";

export class FactoryResume {
  private createGeneralInformation(generalInformation?: any): IGeneralInformation {
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

  public initializeResume(): IResume {
    return {
      educations: [],
      generalInformation: this.createGeneralInformation(),
      events: [],
      skills: this.createSkills(),
      workingExperiences: [],
      aboutMe: [],
    };
  }

  public createResume(data: any): IResume {
    return {
      educations: data.education ? (data.education as Array<IEducation>) : [],
      generalInformation: this.createGeneralInformation(data.generalInformation),
      events: data.events ? (data.events as Array<IEvent>) : [],
      skills: this.createSkills(data.skills),
      workingExperiences: data.workingExperience ? (data.workingExperience as Array<IWorkingExperience>) : [],
      aboutMe: data.aboutMe ? (data.aboutMe as Array<string>) : [],
    };
  }
}
