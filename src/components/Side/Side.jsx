import './Side.css';

export const Side = ({img, title, text, id}) => {
    return (
        <li className="content-side__list-item" key={id}>
            <img className="content-side__list-item--img" src={img} alt="" />
            <h5 className="content-side__list-item--title">
                {title}
            </h5>
            <p className="content-side__list-item--text">
                {text}
            </p>
        </li>
    )
}