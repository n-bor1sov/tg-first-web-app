const SERVER_URL = "https://sport.innopolis.university";
import { fetch, CookieJar } from "node-fetch-cookies";
import { parse } from "node-html-parser";

async function login(email: string, password: string) {
  const formResponse = await fetch(null, `${SERVER_URL}/oauth2/login`, {
    method: "GET",
  });
  if (formResponse.status != 200)
    throw new Error("Could not get a form response");

  const formPage = parse(await formResponse.text());
  const loginUrl = formPage.getElementById("options").attributes["action"];

  const jar = new CookieJar();
  const loginResponse = await fetch(jar, loginUrl, {
    method: "POST",
    body: JSON.stringify({
      UserName: email,
      Password: password,
      AuthMethod: "FormsAuthentication",
    }),
  });
  if (!loginResponse.ok)
    console.log("[ERR] Something went wrong during login in SSO!");

  const loginResponsePage = parse(await loginResponse.text());
  const student_id = loginResponsePage
    .querySelector("div.card-body")
    ?.querySelector("script")
    ?.text.split("\n")[1]
    .split('"')[1];
  jar.cookies["student_id"] = student_id;

  return jar;
}

async function getStatistics(cookies: CookieJar) {
  return {
    final_hours: (
      await (
        await fetch(
          cookies,
          `${SERVER_URL}/api/attendance/${cookies.cookies["student_id"]}/negative_hours`,
        )
      ).json()
    )["final_hours"],
    better_than: await (
      await fetch(
        cookies,
        `${SERVER_URL}/api/attendance/${cookies.cookies["student_id"]}/better_than`,
      )
    ).json(),
    partial_hours: await (
      await fetch(cookies, `${SERVER_URL}/api/profile/history_with_self/21`)
    ).json(),
  };
}
