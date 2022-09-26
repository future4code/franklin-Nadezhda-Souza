import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from '../database/BaseDatabase'
import { UserDatabase, UserDatas } from '../database/UserDatabase'
import { TokenManager } from '../services/TokenManager'
import { UserConnectionDatabase } from '../database/UserConnectionDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getRecipeFeedEP = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
      
          const retriviedData = new TokenManager().retrieveDataFromToken(token)
      
          const userData = await new UserDatabase().getUserById(retriviedData.id)
      
          if (!userData) {
            throw new Error('Faça login na sua conta antes de criar outras receitas')
          }
      
          const recipesArray = await new UserDatabase().getFeed(userData.id)
      
          res.status(200).send({
            recipes: recipesArray
          })
        }
        catch (err:any) {
          res.status(400).send({ message1: err.message })
        }
        finally {
          await BaseDatabase.desconnectDB()
        }
    }

    public followUserEP = async (req: Request, res: Response) => {
        try {
          const followerToken = req.headers.authorization as string
          const followedId = req.body.userToFollowId
      
          if (!followedId || !followerToken) {
            throw new Error('Dados inválidos')
          }
      
          const followerRetriviedData = new TokenManager().retrieveDataFromToken(followerToken)
      
          const userDatabase = new UserDatabase()
          const followerData = await userDatabase.getUserById(followerRetriviedData.id)
          const followedData = await userDatabase.getUserById(followedId)
      
          if (!followerData || !followedData) {
            throw new Error('Usuário não encontrado')
          }
      
          await new UserConnectionDatabase().follow(followerData.id, followedData.id)
      
          res.status(200).send({
            message: "Followed successfully"
          })
        }
        catch (err:any) {
          res.status(400).send({ message: err.message })
        }
        finally {
          await BaseDatabase.desconnectDB()
        }
    }

    public getOwnProfileEP = async (req: Request, res: Response) => {
        try {
          const retriviedData = new TokenManager()
            .retrieveDataFromToken(req.headers.authorization as string)
      
          const userData = await new UserDatabase().getUserById(retriviedData.id)
      
          if (!userData) {
            throw new Error('Faça login na sua conta antes de procurar outros usuários')
          }
      
          res.status(200).send({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role
          })
        }
        catch (err:any) {
          res.status(400).send({ message: err.message })
        }
        finally {
          await BaseDatabase.desconnectDB()
        }
    }

    public signupEP = async (req: Request, res: Response) => {
        try {
          const data: UserDatas = {
            id: '',
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || 'normal'
          }
      
          if (!data.name || !data.email || !data.password || data.password.length < 6) {
            throw new Error("Dados de cadastro inválidos")
          }
      
          data.id = new IdGenerator().generate()
      
          data.password = await new HashManager().hash(data.password)
      
          await new UserDatabase().createUser(data)
      
          const token = new TokenManager().generateToken({
            id: data.id,
            role: data.role,
          })
      
          res.status(200).send({ token })
        }
    
        catch (err:any) {
          res.status(400).send({ message: err.message })
        }
    
        finally {
          await BaseDatabase.desconnectDB()
        }
    }

    public loginEP = async (req: Request, res: Response) => {
        try {
          const data = {
            email: req.body.email,
            password: req.body.password
          }
      
          if (!data.email || !data.password) {
            throw new Error("Dados de cadastro inválidos")
          }
      
          const userData = await new UserDatabase().getUserByEmail(data.email)
      
          const isPasswordValid = await new HashManager().compare(data.password, userData.password)
      
          if (!isPasswordValid) {
            throw new Error('Email ou senha incorreta')
          }
      
          const token = new TokenManager().generateToken({
            id: userData.id,
            role: userData.role
          })
      
          res.status(200).send({ token })
        }
        catch (err:any) {
          res.status(400).send({ message: err.message })
        }
        finally {
          await BaseDatabase.desconnectDB()
        }
    }

    public getProfileByIdEP = async (req: Request, res: Response) => {
        try {
          const seekedId = req.params.id
      
          const retriviedData = new TokenManager()
          .retrieveDataFromToken(req.headers.authorization as string)
      
          const userDatabase = new UserDatabase()
          const userData = await userDatabase.getUserById(retriviedData.id)
      
          if(!userData){
            throw new Error('Faça login na sua conta antes de procurar outros usuários')
          }
          if(!seekedId){
            throw new Error('Formato do id errado')
          }
      
          const seekedData = await userDatabase.getUserById(seekedId)
      
          res.status(200).send({
            id: seekedData.id,
            name: seekedData.name,
            email: seekedData.email,
            role:seekedData.role
          })
        }
        catch (err) {
          res.status(400).send({ message: err.message })
        }
        finally {
          await BaseDatabase.desconnectDB()
        }
    }
}









