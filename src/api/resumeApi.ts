import { Configuration } from "../configuration/Configuration";

export const getResume = (language: string): any => {
  return fetch(`${Configuration.API_URL}/${language}`, { method: "GET", headers: Configuration.headers })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
};
