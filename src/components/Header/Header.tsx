import Logo from "../../assets/img/image 3.png";

//react-router
import { Link } from "react-router-dom";

//styles
import "./styles.scss";

type Props = {
  src: string;
  className: string;
};

function Header({ src, className }: Props) {
  return (
    <header className="header">
      <div className="container">
        <div className="headerRow">
          <Link to={"/"}>
            <img src={Logo} alt="SpaceX" style={{ cursor: "pointer" }} />
          </Link>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Help</li>
              <li>Trips</li>
            </ul>
          </nav>
          <div className="headerAction">
            <button className={`headerFavBtn ${className}`}>
              <Link to={"/favorites"}>
                <img
                  src={src}
                  alt="fav"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
            </button>
            <button className="headerSignBtn">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
