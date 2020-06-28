import * as dotenv from "dotenv";
dotenv.config();
let path = `${__dirname}/../../.env`

dotenv.config({ path: path });


export const BRAND = process.env.BRAND;
export const ENVIRONMENT = process.env.ENVIRONMENT;
export const TAGS = process.env.TAGS;
export const SCREEN_SIZE = process.env.SCREEN_SIZE;
