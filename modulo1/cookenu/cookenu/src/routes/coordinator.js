const goToLogin = (navigate) => {
    navigate("/login")
}

const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

const goToRecipesList = (navigate) => {
    navigate("/")
}

const goToAddRecipes = (navigate) => {
    navigate("adicionar-receita")
}

const goToRecipeDetail = (navigate) => {
    navigate(`/detalhe/${id}`)
}