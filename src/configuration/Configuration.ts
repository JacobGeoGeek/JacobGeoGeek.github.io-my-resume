export class Configuration {
  static API_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:3001"
      : "https://jacob-resume-backend.herokuapp.com";

  static headers = {
    method: "GET",
    redirect: "follow",
  };
}
