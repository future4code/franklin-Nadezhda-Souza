import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { TokenManager } from '../services/TokenManager'
import { RecipeDatabase } from '../data/RecipeDatabase'
import * as moment from 'moment'
import { UserDatabase } from '../data/UserDatabase'

export class RecipeController {
  public createRecipeEP = async (req: Request, res: Response) => {
    try {
      const retriviedData = new TokenManager()
      .retrieveDataFromToken(req.headers.authorization as string)
  
      const userData = await new UserDatabase().getUserById(retriviedData.id)
  
      if(!userData){
        throw new Error('Faça login na sua conta antes de criar outras receitas')
      }
  
      const recipeInputs = {
        id: new IdGenerator().generate(),
        title: req.body.title,
        description: req.body.description,
        createdAt: moment.now(),
        creatorUserId: retriviedData.id
      }
  
      if (!recipeInputs.title || !recipeInputs.description){
        throw new Error('Insira um título e uma descrição para sua receita')
      }
  
      await new RecipeDatabase().createRecipe(recipeInputs)
  
      res.sendStatus(200)
    }
    catch (err:any) {
      res.status(400).send({ message: err.message })
    }
    finally {
      await BaseDatabase.desconnectDB()
    }
  }

  public getRecipeEP = async (req: Request, res: Response) => {
    try {
      const retriviedData = new TokenManager()
        .retrieveDataFromToken(req.headers.authorization as string)
  
      const userData = await new UserDatabase().getUserById(retriviedData.id)
  
      if (!userData) {
        throw new Error('Faça login na sua conta antes de criar outras receitas')
      }
  
      const recipeId = req.params.id
      if (!recipeId) {
        throw new Error('Insira o id da receita buscada')
      }
  
      const recipe = await new RecipeDatabase().getRecipesById(recipeId)
  
      res.status(200).send({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: moment.unix(recipe.created_at / 1000).format("DD/MM/YYYY"),
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