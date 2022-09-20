import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import connection from './connection';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/user/signup', (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if(name === '' || password === '' || email === '' ){
      res.send('Deu ruim')  
  } else {
      const createUser = async (
          name: string,
          password: string,
          email: string,
      ): Promise<void> => {
          try {
              await connection.insert({
                  name: name,
                  password: password,
                  email: email
              }).into("User");
              res.send({
                  token: ///////////////,
              })

          } catch(err:any) {
              res.status(400).send({
                  message: err.sqlMessage,
              });
          }

      };

      createUser(name, password, email);
  }


})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});