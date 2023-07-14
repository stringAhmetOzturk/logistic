import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import branchRoute from "./routes/branches.js"
import customerRoute from "./routes/customers.js"
import driverRoute from "./routes/drivers.js"
import shippingRoute from "./routes/shippings.js"
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import vehiclesRoute from "./routes/vehicles.js"
import cors from "cors"

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

//env
env.config();

//port
const port = process.env.PORT || 3000;

//routes
app.use("/branches", branchRoute);
app.use("/customers", customerRoute);
app.use("/drivers", driverRoute);
app.use("/shippings", shippingRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/vehicles", vehiclesRoute);

//listen server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});