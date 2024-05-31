import express from "express";

export const createApp = (() => {
  const app = express();

  app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
  });

  app.get("/error", (req, res) => {
    console.log("Error!");
    throw new Error("Error!")
    res.send("Error!");
  });

  app.get("/exit", (req, res) => {
    console.log("Exit!");
    process.exit(1)
  });

  return app
})

export const startServer = (() => {
  const app = createApp()
  const port = 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
})

startServer()