import './FooterLink.css';
import { Link } from "react-router-dom";

export const FooterLink = ({id, link, href}) => {
    return (
        <>
            <Link className="content-side__footer--item" to={href} key={id}>
                {link}
            </Link>
        </>
    )
}