import "dotenv/config";
import connectDb from "./src/config/connect.js";
import fastify from "fastify";
import { PORT } from "./src/config/config.js";

const app = fastify({
  logger: true,
});

app.get("/", async (req, reply) => {
  return { message: "hello world" };
});

const start = async () => {
  await connectDb();

  //server listen or up and running
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Grocery App Server running on port http://localhost:${addr}`
      );
    }
  });
};

start();
