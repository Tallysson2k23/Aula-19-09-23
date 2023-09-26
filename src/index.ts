import "reflect-metadata"
import { AppDataSource } from "./database/data-source";
import app from "./app";

const main = async () => {
    try {
        //Conectando banco de dados
        await AppDataSource.initialize();
        console.log("Banco de dados conectado com sucesso!");

//inicializando express

app.listen(3000,  () => {
    console.log("Aplicação ouvindo requisiçao http na porta 3000");
})

    } catch (error) {
        console.log(error);
    }
};

main();