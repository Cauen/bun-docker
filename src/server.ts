import express from "express";

const log = (message: string) => {
  console.log(`${new Date().toISOString()} - ${message}`);
}

export const createApp = (() => {
  const app = express();

  app.get("/", (req, res) => {
    log("Hello World!");
    res.send("Hello World!");
  });

  app.get("/error", (req, res) => {
    log("Error!");
    throw new Error("Error!")
    res.send("Error!");
  });

  app.get("/exit", (req, res) => {
    log("Exit!");
    process.exit(1)
  });

  return app
})

export const startServer = (port = 3000) => {
  const app = createApp()

  const url = `http://localhost:${port}`;
  app.listen(port, () => {
    log(`Listening on port ${url}...`);
  });

  return {
    app,
    port,
    url,
  }
}
