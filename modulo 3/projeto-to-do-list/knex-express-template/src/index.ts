import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post('/user', (req: Request, res: Response) => {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email;

    if(name === '' || nickname === '' || email === '' ){
        res.send('Deu ruim')  
    } else {
        const createUser = async (
            name: string,
            nickname: string,
            email: string,
        ): Promise<void> => {
            try {
                await connection.insert({
                    name: name,
                    nickname: nickname,
                    email: email
                }).into("User");
                res.send({
                    name: name,
                    nickname: nickname,
                    email: email
                })
    
            } catch(err:any) {
                res.status(400).send({
                    message: err.sqlMessage,
                });
            }
            
        };
    
        createUser(name, nickname, email);
    }

   
})

app.get('/user/:id'), async(req: Request, res: Response) => {
    //função que pega o usuario pelo id
    const getUserById = async (id: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT * FROM User WHERE id = '${id}'
        `)
          return result[0][0]
    }
    
    try{
        const id = req.params.id
        const user = await getUserById(id);
        console.log(user)
        res.status(200).send(user)
    } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
    }
    res.send({
        id: "001",
        nickname: "astrodev"
    })

    //**Observações**:
    //- O endpoint deve retornar um erro se não encontrar o usuário
}

app.put('/user/edit/:id'), (req: Request, res: Response) => {
    //função que edita o usuario
    const name = req.body.name;
    const nickname = req.body.nickname;

    const updateUser = async (id: string, salary: number): Promise<any> => {
        await connection("Actor")
          .update({
            name: name,
            nickname: nickname,
          })
          .where("id", id);
    };

    res.send({
        name: "Astro Dev",
        nickname: "astrodev"
    })
    //**Observações**:
    //- O seu código só deve alterar o que for enviado
    //- Se algum valor enviado for vazio, deve retornar um erro
}


app.post('/task', (req: Request, res: Response) => {
    //criar tarefa
    const title = req.body.title;
    const description = req.body.description;
    const limitDate = req.body.limitDate;
    const status = req.body.status;

    if(title === '' || description === '' || limitDate === '' ){
        res.send('Deu ruim')  
    } else {
        const createTask = async (
            title: string,
            description: string,
            limitDate: string,
            status: string
        ): Promise<void> => {
            try {
                await connection.insert({
                    title: title,
                    description: description,
                    limitDate: limitDate,
                    status: status,
                }).into("Task");

                res.send({
                    title: title,
                    description: description,
                    limitDate: limitDate,
                    status: status,
                })

            } catch(err:any) {
                res.status(400).send({
                    message: err.sqlMessage,
                });
            }
        };

        createTask(title, description, limitDate, status);
    }
    //**Observações**:
    //- O seu código deve gerar o id da tarefa,
})

app.get('/task/:id'), (req: Request, res: Response) => {
    //pegar a tarefa pelo id
    const getTaskById = async (id: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT * FROM Task WHERE id = '${id}'
        `)
          return result[0][0]
    }
    
    try{
        const id = req.params.id
        console.log(getTaskById(id))
        res.end()
    } catch (error:any) {
            console.log(error.message)
            res.status(500).send("Unexpected error")
    }

    res.send({
        taskId: "001",
        title: "Criar banco dos alunos",
        description: "Devemos criar o banco dos alunos para o módulo do backend",
        limitDate: "04/05/2020",
        status: "to_do",
        creatorUserId: "001",
        creatorUserNickname: "astrodev"
    })
    //**Observações**:
    //- O endpoint deve retornar um erro se não encontrar a task
    //- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    //- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

}
export default app