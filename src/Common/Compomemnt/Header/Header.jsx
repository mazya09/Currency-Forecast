import logo from "../../Assets/logo.jpg"
import "./Header.css";

export default function Header() {
  return (
    <header>
      <a className="Logo" href="">
        <img src={logo} alt="step.kicks.kg" />
      </a>
      <a href="#">Доставка</a>
      <a href="#">Как заказать</a>
      <a href="#">Отзывы</a>
    </header>
  );
}
