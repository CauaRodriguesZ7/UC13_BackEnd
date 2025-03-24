import  "dotenv/config";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource(
{
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "my_r",
    synchronize: true,
    logging: true,
    entities: [
      "src/models/*.ts"]
  }
)
