import { Header } from "../components/Header/Header";
import { componentContentOfPolitic } from "../constants";
import { ContentOfPolitic } from "../components/ContentOfPolitic/ContentOfPolitic";


export const Politic = () => {
    return (
        <>
            <Header />
            <main>
                <section className="content-of-politic">
                    <div className="container">
                        <h1 className="content-of-politic__heading">
                            Политика конфиденциальности
                        </h1>
                        <div className="content-of-politic__content">
                            <h4>Содержание</h4>
                            <ol className="content-of-politic__content-list">
                                {
                                    componentContentOfPolitic.map((textOfContent) => {
                                        return <ContentOfPolitic
                                            key = {textOfContent.id}
                                            link = {textOfContent.link}
                                            href = {textOfContent.href}
                                        />
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="politic-main">
                    <div className="container">
                        <div className="politic-main__description">
                            <div className="politic-main__wrapper">
                                <h3 id="first" className="politic-main__heading">
                                    1. Введение
                                </h3>
                                <p className="politic-main__text">
                                    Компания Abito (далее - "Мы" или "Наш сайт") уважает право пользователей на частную жизнь <br />
                                    и обеспечивает безопасность и конфиденциальность информации, которую пользователи <br />
                                    предоставляют нам. Настоящая политика конфиденциальности описывает, как мы собираем, <br />
                                    используем и защищаем информацию, которую пользователи предоставляют нам на нашем <br />
                                    сайте.
                                </p>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="second" className="politic-main__heading">
                                    2. Сбор информации
                                </h3>
                                <p className="politic-main__text">
                                    Мы собираем информацию о пользователях в следующих случаях:
                                </p>
                                <ul className="politic-main__list">
                                    <li className="politic-main__list-item">
                                        при регистрации на нашем сайте;
                                    </li>
                                    <li className="politic-main__list-item">
                                        при размещении объявлений или покупке товаров на нашем сайте;
                                    </li>
                                    <li className="politic-main__list-item">
                                        при взаимодействии с нашим сайтом, включая использование функций и инструментов,
                                        предоставляемых на нашем сайте.
                                    </li>
                                </ul>
                                <p className="politic-main__text">
                                    Мы собираем следующие типы информации:
                                </p>
                                <ul className="politic-main__list">
                                    <li className="politic-main__list-item">
                                        личную информацию, такую как имя, фамилия, адрес электронной почты, телефонный номер и
                                        другие контактные данные;
                                    </li>
                                    <li className="politic-main__list-item">
                                        информацию о местоположении;
                                    </li>
                                    <li className="politic-main__list-item">
                                        информацию о браузере и устройстве, используемых для доступа к нашему сайту;
                                    </li>
                                    <li className="politic-main__list-item">
                                        информацию о действиях на нашем сайте, включая историю просмотра и поиска.
                                    </li>
                                </ul>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="third" className="politic-main__heading">
                                    3. Использование информации
                                </h3>
                                <p className="politic-main__text">
                                    Мы используем информацию, которую пользователи предоставляют нам, для следующих целей:
                                </p>
                                <ul className="politic-main__list">
                                    <li className="politic-main__list-item">
                                        для регистрации и аутентификации пользователей на нашем сайте;
                                    </li>
                                    <li className="politic-main__list-item">
                                        для обеспечения безопасности и защиты нашего сайта от мошенничества и злоупотреблений;
                                    </li>
                                    <li className="politic-main__list-item">
                                        для предоставления услуг и функций, связанных с размещением объявлений и покупкой товаров на
                                        нашем сайте;
                                    </li>
                                    <li className="politic-main__list-item">
                                        для отправки уведомлений и информации о новых функциях и услугах на нашем сайте;
                                    </li>
                                    <li className="politic-main__list-item">
                                        для анализа и улучшения нашего сайта и услуг, предоставляемых на нем.
                                    </li>
                                </ul>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="fourth" className="politic-main__heading">
                                    4. Защита информации
                                </h3>
                                <p className="politic-main__text">
                                    Мы принимаем все необходимые меры для защиты информации, которую пользователи предоставляют нам,
                                    от несанкционированного доступа, изменения, раскрытия или уничтожения. Мы используем следующие
                                    меры безопасности:
                                </p>
                                <ul className="politic-main__list">
                                    <li className="politic-main__list-item">
                                        шифрование данных при передаче через интернет;
                                    </li>
                                    <li className="politic-main__list-item">
                                        хранение информации на защищенных серверах;
                                    </li>
                                    <li className="politic-main__list-item">
                                        ограничение доступа к информации только для авторизованных лиц;
                                    </li>
                                    <li className="politic-main__list-item">
                                        регулярное обновление и тестирование наших систем безопасности.
                                    </li>
                                </ul>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="fifth" className="politic-main__heading">
                                    5. Раскрытие информации
                                </h3>
                                <p className="politic-main__text">
                                    Мы не передаем информацию, которую пользователи предоставляют нам, третьим лицам, за исключением
                                    следующих случаев:
                                </p>
                                <ul className="politic-main__list">
                                    <li className="politic-main__list-item">
                                        когда это необходимо для выполнения наших обязательств перед пользователями;
                                    </li>
                                    <li className="politic-main__list-item">
                                        когда это требуется по закону или в соответствии с судебным решением;
                                    </li>
                                    <li className="politic-main__list-item">
                                        когда это необходимо для защиты наших прав и интересов или прав и интересов третьих лиц.
                                    </li>
                                </ul>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="sixth" className="politic-main__heading">
                                    6. Управление информацией
                                </h3>
                                <p className="politic-main__text">
                                    Пользователи имеют право на доступ, изменение и удаление информации, которую они предоставили
                                    нам. Пользователи могут управлять своей информацией, используя настройки аккаунта на нашем
                                    сайте.
                                </p>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="seventh" className="politic-main__heading">
                                    7. Изменения политики конфиденциальности
                                </h3>
                                <p className="politic-main__text">
                                    Мы можем изменять настоящую политику конфиденциальности время от времени. Мы будем уведомлять пользователей о любых изменениях в политике конфиденциальности на нашем сайте.
                                </p>
                            </div>
                            <div className="politic-main__wrapper">
                                <h3 id="eighth" className="politic-main__heading">
                                    8. Контактная информация
                                </h3>
                                <p className="politic-main__text">
                                    Если у вас есть вопросы или жалобы относительно настоящей политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу <a href="mailto:info@abito.com">info@abito.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
