import "./navbar.scss";
import { Link } from "react-router-dom";
import { MenuItem } from "./menu-item/menu-item";

export function NavBar() {
  return (
    <>
      <nav className="side-nav">
        <ul>
          <li>
            <Link>
              <MenuItem label="Tasks" icon="dataset"/>
            </Link>
          </li>
          <li>
            <Link>
              <MenuItem label="Calendar" icon="calendar_month"/>
            </Link>
          </li>
          <li>
            <Link>
              <MenuItem label="Goals" icon="check_small"/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
