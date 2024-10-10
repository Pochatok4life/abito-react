import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <Link to={'/'} className="header-logo">
                        <img src="/images/logo.svg" alt="" />
                        <span>Abito</span>
                    </Link>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и реистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className="header-burger">
                        <img src="/images/burger_menu.svg" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}