const config = require("config");
const app = require("./src/app");
const db = require("./src/models");

async function bootstrap() {
  console.log("Please wait for the server and db to run .......");
  const PORT = process.env.PORT || 8000;

  try {
    await db.sequelize.sync({ force: config.get("db.forceSync") });
    app.listen(PORT, () => {
      console.clear();
      console.log(`Db is connected & App is listening on the port ${PORT} ...`);
    });
  } catch (err) {
    console.clear();
    console.log("Some error while bootstrap the app ....", err);
  }
}
bootstrap();
