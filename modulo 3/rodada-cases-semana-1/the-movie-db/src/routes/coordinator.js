export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToMovieDetailsPage = (navigate, id) => {
    navigate(`/movie/${id}`)
}