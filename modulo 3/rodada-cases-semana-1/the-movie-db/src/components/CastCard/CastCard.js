import './CastCard.css'

export const CastCard = ({id, image, name, character}) => {
    return (
        <li className='castCard' key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`}/>
            <p className='cast__title'>{name}</p>
            <p className='cast__date'>{character}</p>
        </li>
    )
}