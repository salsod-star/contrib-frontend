import { Link } from "react-router-dom";
import TypographyH4 from "./typography/TypographyH3";

function Header() {
  return (
    <header className="h-16 flex items-center">
      <nav className="flex justify-between gap-5 items-center w-full">
        <div>
          <Link to="/">
            <TypographyH4>Contrib.</TypographyH4>
          </Link>
        </div>

        <ul className="flex items-center gap-5">
          <Link to="/login">Login</Link>
          <Link to="/register">register</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
