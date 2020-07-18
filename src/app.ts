import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";

import modelingRoutes from "./routes/modeling";
import { handleErrorRequest } from "./middleware/handle-error-request";

// Creates a new HTTP server
const app = express();

// Adds express middleware
app
  // Console logging
  .use(morgan("tiny"))

  // JSON request body parser
  .use(bodyParser.json())

  .use((req, res, next) => {
    /* Add a new header
    This header specifies the domains that should be able to access the server, it allows specific origins
    '*' grants access to every domain
    */
    // res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io');  // works when using https://codepen.io
    res.setHeader("Access-Control-Allow-Origin", "*");
    /* List of allowed methods for the allowed origins */
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    /* Additional headers allowed besides the default ones */
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );
    next();
  })

  // Routes
  .use("/modeling", modelingRoutes)

  // Error handler
  .use(handleErrorRequest);


mongoose.connect(
  "mongodb://localhost:27017/powernet?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
  .then(() => {
    console.log("Starting PowerNet server");
    app.listen(6910);
  })
  .catch((err) => console.log(err));

