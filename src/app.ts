import * as express from "express";
import * as graphqHTTP from "express-graphql";
import schema from "./graphql/schema";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(
      "/graphql",
      graphqHTTP({
        schema: schema,
        graphiql: process.env.NODE_ENV.trim() === "development"
      })
    );
  }
}

export default new App().express;
