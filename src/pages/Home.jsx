import { Card } from "../components/Card/Card";
import { Side } from "../components/Side/Side";
import { sideItems } from "../constants";
import { useOutletContext } from "react-router-dom";
import { FooterLinks } from "../constants";
import { FooterLink } from "../components/FooterLink/FooterLink";

export const Home = () => {
    const {products} = useOutletContext();
    
    return (
        <>
            <main>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">
                                    Рекомендации для вас
                                </h2>
                                <div className="content-main__list">
                                    {
                                        products.map((card) => {
                                            return <Card
                                                img = {card.img}
                                                key = {card.id}
                                                id = {card.id}
                                                title = {card.title}
                                                price = {card.price}
                                                address = {card.address}
                                                date = {card.date}
                                            />
                                        })
                                    }
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
                                    {
                                        FooterLinks.map((FooterEl) => {
                                            return <FooterLink
                                                key = {FooterEl.id}
                                                link = {FooterEl.link}
                                                href = {FooterEl.href}
                                            />
                                        })
                                    }
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}