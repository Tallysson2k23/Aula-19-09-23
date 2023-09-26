import { Request, Response } from "express";
import { User } from "../entiteis/user";
import { AppDataSource } from "../database/data-source";


export const cadastrarUsuario = async (req: Request, res: Response) =>{




    try {

        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.cpf = req.body.cpf;

        await AppDataSource.getRepository(User).save(user);

        return res.status(201).json({ ok: true});

    } catch (error){
        console.log(error,"Erro ao cadastrar usuario");
        return res.status(500).json({ ok: false, message: "Erro ao cadastrar usuario"});
    }
    return res.status(200).json({ ok: true});
};

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        const users = await AppDataSource.getRepository(User).find();

            return res.status(200).json({ ok: true, users: users});

    } catch (error){
        console.log(error, 'Erro ao lista usuario');
        return res.status(500).json({ ok: false, message: "Erro ao cadastrar usuario"});
    }
};

export const atulizarUsuarios = async (req: Request, res: Response) => {
    const id = req.params.user_id;

    try {
        const user = await AppDataSource.getRepository(User).findOne({where: {id: parseInt(id) }});

        if (!user){
            return res.status(404).json({ ok: false, message: "Não existe usuario com esse ID"})
        }

        if (req.body.name){
            user.name = req.body.name;
        }

        if (req.body.email){
            user.email = req.body.email;
        }

        if(req.body.password){
            user.password = req.body.password;
        }

        if (req.body.cpf){
            user.cpf = req.body.cpf;
        }

        await AppDataSource.getRepository(User).save(user);
        return res.status(200).json({ ok: true});


    } catch (error) {
        console.log(error, 'Erro ao atualizar usuario');
        return res.status(500).json({ ok: false, message: "Erro ao cadastrar usuario"});
    }
};


export const deletarUsuario = async (req: Request, res: Response) => {
    const id = req.params.user_id;

    try {
        const user = await AppDataSource.getRepository(User).findOne({
            where: { id: parseInt(id)},
        });

        if(!user){
            return res.status(404).json({ ok: false, message: "nao existe usuario com esse ID"});

        }

    await AppDataSource.getRepository(User).delete(user);

    return res.status(200).json({ ok: true});
    }catch (error) {
        console.log(error, "Erro ao deletar usuaario");
        return res.status(500).json({ ok: false, message: "Erro ao cadastrar usuario"})
    }
}