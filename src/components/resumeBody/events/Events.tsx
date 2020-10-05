import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { IEvent } from "../../../DTO/IEvent";
import { Event } from "./Event";
export const Events: FunctionComponent<{ events: Array<IEvent> }> = (props) => {
  const { t } = useTranslation();

  const listEvents = props.events.map((item, index) => (
    <Event
      key={index}
      title={item.title}
      description={item.description}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
    />
  ));

  return (
    <section className="resume-section reference-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{t("events")}</h2>
      <div className="resume-section-content">
        <div className="position-relative">{listEvents}</div>
      </div>
    </section>
  );
};
