import { useParams, useOutletContext } from "react-router-dom";
import { Side } from "../components/Side/Side";
import { sideItems } from "../constants";

export const Product = () => {
    const { products } = useOutletContext();
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)
    return ( 
        <>
            <main>
                <section className="content">
                    <div className="container">
                        {
                            findProduct ?
                                <div className="content-box">
                                <div className="content-product">
                                    <div className="content-product__description">
                                        <h2 className="content-product__title">
                                            {findProduct.title}
                                        </h2>
                                        <img className="content-product__img" src={findProduct.img} alt="" />
                                        <p className="content-product__text">
                                            {findProduct.descriprion}
                                        </p>
                                    </div>
                                    <div className="content-product__info">
                                        <h2 className="content-product__price">
                                            {findProduct.price}
                                        </h2>
                                        <button className="btn btn-primary btn-product">Показать телефон</button>
                                    </div>
                                </div>
                                <div className="content-side">
                                    <h3 className="content-side__title">
                                        Сервисы и услуги
                                    </h3>
                                    <div className="content-side__box">
                                        <ul className="content-side__list">
                                            {
                                                sideItems.map((sideElement) => {
                                                    return <Side
                                                        img = {sideElement.img}
                                                        key = {sideElement.id}
                                                        title = {sideElement.title}
                                                        text = {sideElement.text}
                                                    />
                                                })              
                                            }
                                        </ul>
                                    </div>
                                    <footer className="content-side__footer">
                                        <p className="content-side__footer--item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a className="content-side__footer--item" href="#!">
                                            Политика конфиденциальности
                                        </a>
                                        <a className="content-side__footer--item" href="#!">
                                            Обработка данных
                                        </a>
                                    </footer>
                                </div>
                            </div>
                            :
                            <h2>Такого товара не существует!!!</h2>
                        }
                    </div>
                </section>
            </main>
        </>
    )
}