import { useRouteError } from "react-router-dom";
import '../index.css';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/"><button className="btn btn-primary go-home__btn">Перейти на главную страницу</button></a>
    </div>
  );
}