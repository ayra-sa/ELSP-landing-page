import LogoFooter from "../../assets/images/logo-footer.png";
import Whatsapp from "../../assets/icons/wa.svg";
import Mail from "../../assets/icons/mail.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import Kominfo from "../../assets/images/kominfo.png";

const Footer = () => {
  const footerMenu = [
    {
      menu: "Uji Kompetensi",
      link: "#",
    },
    {
      menu: "Partner Kami",
      link: "#",
    },
    {
      menu: "Artikel Pembelajaran",
      link: "#",
    },
    {
      menu: "Hubungi Kami",
      link: "#",
    },
  ];
  return (
    <footer className="bg-footer-mobile lg:bg-footer bg-cover text-white py-6 lg:py-16">
      <div className="container">
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3">
          <div>
            <a href="/" className="mb-7 block">
              <img src={LogoFooter} alt="logo footer" />
            </a>

            <p className="text-[#B7B7B7]">
              Professional Certification Ecosystem
            </p>

            <div className="space-y-4 mt-5 text-[#B7B7B7]">
              <a href="#" className="flex items-center gap-x-2 text-sm">
                <img src={Whatsapp} alt="icon whatsapp" />
                <span>+628118-8805-194</span>
              </a>
              <a href="#" className="flex items-center gap-x-2 text-sm">
                <img src={Mail} alt="icon mail" />
                <span>info@elsp.id</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3">PT. Hasanah Raya Cipta</h2>
            <p className="text-[#B7B7B7]">
              Graha Mampang Lt.3 Suite 305, Jl. Mampang Prapatan Kav.100,
              Jakarta Selatan 12760
            </p>
          </div>

          <div>
            <b className="text-xs mb-6 block">Menu</b>
            <ul>
              {footerMenu.map((item, id) => (
                <li key={id} className="text-[#B7B7B7] mb-6">
                  <a href={item.link}>{item.menu}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse mt-9 gap-9 lg:grid lg:grid-cols-3 lg:items-end">
          <p className="text-xs">© 2020 e-LSP. All Rights Reserved.</p>

          <div>
            <p className="text-[#C6C5C3] mb-5">Terdaftar di</p>
            <img src={Kominfo} alt="icon kominfo" />
          </div>

          <div className="flex items-center gap-x-4">
            <a href="#" className="w-12 h-12 rounded-full bg-[#1E3B59] flex justify-center items-center">
              <img src={Facebook} alt="icon facebook" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#1E3B59] flex justify-center items-center">
              <img src={Google} alt="icon google" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
