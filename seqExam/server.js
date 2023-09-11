const express = require("express");

const { sequelize } = require("./models");
const crudRouter = require("./routes/crud");

const app = express();
app.set("port", process.env.PORT || 3001);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", crudRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "node start!");
});
