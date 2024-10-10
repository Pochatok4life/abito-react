import './ContentOfPolitic.css';

export const ContentOfPolitic = ({link, id, href}) => {
    return(
        <li className="content-of-politic__content-item" key={id}>
            <a href = {href} className="content-of-politic__content-link">
                {link}
            </a>
        </li>
    )
}