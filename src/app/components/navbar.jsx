import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const linkItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ children }) {
  return (
    <>
      <div className="navbar bg-slate-800 fixed">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl">
            OODK
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {linkItems.map((doc) => (
              <li key={doc.name}>
                <Link href={doc.href}>{doc.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu size={"2em"} />
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkItems.map((doc) => (
                <li key={doc.name}>
                  <Link href={doc.href}>{doc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>{children}</div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by OODK</p>
        </aside>
      </footer>
    </>
  );
}
