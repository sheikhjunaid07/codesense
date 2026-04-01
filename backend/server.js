import { app } from "./src/app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

app.listen(8080, () => console.log("Server started at http://localhost:8080"));
