import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { UserController } from './controller/UserController'
import { RecipeController } from './controller/RecipeController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const userController = new UserController()
const recipeController = new RecipeController()

app.post("/users/signup", userController.signupEP)
app.post("/users/login", userController.loginEP)
app.post('/recipe', recipeController.createRecipeEP)
app.get('/recipes', recipeController.getAllRecipesEP)
app.get('/user/profile', userController.getOwnProfileEP)
app.get('/user/:id', userController.getProfileByIdEP)
app.get('/recipe/:id', recipeController.getRecipeEP)