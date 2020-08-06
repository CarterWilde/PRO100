import dotenv from "dotenv";
const parsed = dotenv.config();
if(parsed instanceof Error) {
    console.error("Error Parsing .env");
}
export const MONGOURL = process.env.REACT_APP_MONGOURL