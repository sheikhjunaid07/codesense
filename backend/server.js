import dotenv from "dotenv";
dotenv.config({ path: "./data.env" });

import { app } from "./src/app.js";

app.listen(8080, () => console.log("Server started at http://localhost:8080"));
