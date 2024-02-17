import React from "react";
import Button from "../Button";
import Logo from "/assets/images/logo.svg";
import Bars from "/assets/icons/u_bars.svg";
import Close from "/assets/icons/close.svg";

const Header = () => {
  const navbarMenu = [
    {
      menu: "Beranda",
      link: "/",
    },
    {
      menu: "Uji Kompetensi",
      link: "/",
    },
    {
      menu: "Partners",
      link: "/",
    },
    {
      menu: "Artikel",
      link: "/",
    },
  ];

  const [expandMenu, setExpandMenu] = React.useState(false);
  return (
    <header>
      <nav>
        <div className="container">
          <div className="flex justify-between py-5">
            <div className="flex gap-x-11 items-center">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>

              <ul
                className={`fixed z-10 bg-white h-screen w-full inset-0 py-10 px-5 flex flex-col text-3xl gap-5 transition duration-300 lg:static lg:bg-transparent lg:h-auto lg:p-0 lg:flex-row lg:text-sm lg:gap-8 lg:transform-none ${
                  expandMenu ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {navbarMenu.map((item, id) => (
                  <li key={id}>
                    <a href={item.link} className="text-[#434856] font-bold">{item.menu}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center gap-x-4">
              <div className="flex gap-x-2">
                <Button variant="secondary">Registrasi</Button>
                <Button>Masuk</Button>
              </div>

              <div
                className="lg:hidden relative z-20"
                onClick={() => setExpandMenu(!expandMenu)}
              >
                {expandMenu ? (
                  <img src={Close} alt="close icon" />
                ) : (
                  <img src={Bars} alt="bars icon" />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
