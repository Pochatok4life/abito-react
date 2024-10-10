import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({id, img, title, price, address, date}) => {    
    return (
        <Link className="card" to={`/product/${id}`}>
            <div className="card--img">
                <img src={img} alt="" />
            </div>
            <h5 className="card--title">
                {title}
            </h5>
            <strong className="card--price">
                {price}
            </strong>
            <span className="card--desc">
                {address}
            </span>
            <span className="card--desc">
                {date}
            </span>
        </Link>
    )
}

