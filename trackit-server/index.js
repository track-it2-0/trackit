import express from "express";

const app = express();

app.get("/", (req, res) => res.send(JSON.stringify("I am here!!!")));

app.get("/awuraa", (req, res) =>
  res.send(JSON.stringify("This is the url endpoint for Awuraaa!!!"))
);

app.listen("4000", () => console.log("I'm running!!!"));
