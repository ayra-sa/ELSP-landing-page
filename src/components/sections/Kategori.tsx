import React from "react";
import NavigationButton from "../NavigationButton";
import useWindowSize from "../../lib/useWindowSize";
import Decoration from "/assets/images/decoration.svg"

interface KategoriCardProps {
  icon: string;
  title: string;
}

const KategoriCard: React.FC<KategoriCardProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-x-5 px-5 py-4 border border-[#E3E3E3] rounded-2xl">
      <img src={icon} alt={title} />
      <p className="text-[#454A55]">{title}</p>
    </div>
  );
};

const Kategori = () => {
  const listKategori = [
    {
      title: "Perindustrian",
      icon: "/assets/icons/perindustrian.svg",
    },
    {
      title: "Utility dan Limbah",
      icon: "/assets/icons/utility.svg",
    },
    {
      title: "Informasi dan Teknologi",
      icon: "/assets/icons/it.svg",
    },
    {
      title: "Perdangangan",
      icon: "/assets/icons/perdagangan.svg",
    },
    {
      title: "Ekonomi dan Bisnis",
      icon: "/assets/icons/ekonomi.svg",
    },
    {
      title: "Utility dan Limbah",
      icon: "/assets/icons/utility.svg",
    },
    {
      title: "Perindustrian",
      icon: "/assets/icons/perindustrian.svg",
    },
    {
      title: "Kesehatan dan Sosial",
      icon: "/assets/icons/kesehatan.svg",
    },
    {
      title: "Kontruksi dan Real Estate",
      icon: "/assets/icons/it.svg",
    },
    {
      title: "Pemerintah dan International",
      icon: "/assets/icons/pemerintah.svg",
    },
    {
      title: "Perhotelan dan Makanan",
      icon: "/assets/icons/it.svg",
    },
    {
      title: "Utility dan Limbah",
      icon: "/assets/icons/utility.svg",
    },
  ];

  const [startIndex, setStartIndex] = React.useState(0);

  const nextItems = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, listKategori.length - itemsPerPage)
    );
  };

  const previousItems = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const itemsPerPage = useWindowSize().width >= 1000 ? 12 : 6;

  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:items-center">
          <div className="lg:flex-1 text-center lg:text-left">
            <h2 className="text-lg lg:text-3xl">Kategori uji kompetensi</h2>
            <p className="text-[#727272] mt-6 lg:text-lg">
              Banyak kategori yang di sajikan membuat lebih banyak peluang dan
              temukan uji kompetensi berdasarkan kategori terpopuler
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#EBEBEB] my-6 lg:hidden" />

          <div className="flex items-center text-sm gap-x-6 mb-8 justify-center lg:hidden">
            <p className="flex items-center gap-x-2 text-[#727272]">
              <span className="text-[#9747FF]">32+</span>
              Kategori
            </p>
            <p className="flex items-center gap-x-2 text-[#727272]">
              <span className="text-[#9747FF]">12+</span>
              Partner Kompetensi
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:flex-1 lg:grid lg:grid-cols-2 lg:first:mt-[10%]">
            {listKategori.slice(startIndex, startIndex + itemsPerPage).map((item, id) => (
              <KategoriCard key={id} icon={item.icon} title={item.title} />
            ))}
          </div>

          <div className="flex gap-x-4 justify-center mt-9 lg:hidden">
            <NavigationButton direction="prev" onClick={previousItems} />
            <NavigationButton direction="next" onClick={nextItems} />
          </div>
        </div>
      </div>

      <img src={Decoration} alt="decoration" className="absolute right-0 top-0 bottom-0 -z-10" />
    </section>
  );
};

export default Kategori;
