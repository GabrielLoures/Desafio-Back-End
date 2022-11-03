require('express-async-errors');

const express = require('express');

const cors = require('cors');

const uploadConfig = require("./configs/upload")

const migrationRun = require('./database/sqlite/migrations')

const AppError = require("./utils/AppError");

const routes = require("./routes");

const app = express();

migrationRun();

app.use(express.json());

app.use(routes);

app.use(cors());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error, req, res, next) => { 
  if(error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});