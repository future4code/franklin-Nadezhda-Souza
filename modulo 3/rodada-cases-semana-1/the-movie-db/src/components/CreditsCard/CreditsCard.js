import './CreditsCard.css'

export const CreditsCard = ({name, job}) => {
    return (
        <li className="credits-card">
            <h5>{name}</h5>
            <p>{job}</p>
        </li>
    )
}