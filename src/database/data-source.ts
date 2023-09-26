import { DataSource } from "typeorm"
import { User } from "../entiteis/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2020",
    database: "api-softex",
    entities: [ User],
    synchronize: true,
});