//Arquivo que concentra as funções de navegação

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToApplication = (navigate) => {
    navigate("/application")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToAdmin = (navigate) => {
    navigate("/admin")
}

export const goToCreate = (navigate) => {
    navigate("/create")
}

export const goToLastPage = (navigate) => {
    navigate(-1)
 }