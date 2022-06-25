import React from "react"

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}

export const goToAddRecipes = (navigate) => {
    navigate("adicionar-receita")
}

export const goToRecipeDetail = (navigate) => {
    navigate("/detalhe")
}