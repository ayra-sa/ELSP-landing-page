import React from "react";
import NavigationButton from "../NavigationButton";
import useWindowSize from "../../lib/useWindowSize";
import ArtikelImage from "../../assets/images/artikel.png";

interface ArtikelCardProps {
  image: string;
  label: string;
  title: string;
  author: string;
  authorImage: string;
}

const ArtikelCard: React.FC<ArtikelCardProps> = ({
  author,
  authorImage,
  image,
  label,
  title,
}) => {
  return (
    <div>
      <img src={image} alt={title} className="lg:w-full" />

      <div className="flex items-center gap-x-[5px] mt-4 text-xs">
        <p>30 menit lalu</p>
        <div className="w-[3px] h-[3px] rounded-full bg-[#D9D9D9]" />
        <p>{label}</p>
      </div>

      <a href="#" className="my-4 font-bold block">
        {title}
      </a>

      <div className="flex items-center gap-x-2 text-xs">
        <img src={authorImage} alt={author} />
        <p>{author}</p>
      </div>
    </div>
  );
};

const Artikel = () => {
  const data = [
    {
      title:
        "Staf Analisis Sumber daya Manusia (SDM) dan Peningkatan Sumber hidup",
      image: "./src/assets/images/artikel-1.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
    {
      title:
        "Staf Analisis Sumber daya Manusia (SDM) dan Peningkatan Sumber hidup",
      image: "./src/assets/images/artikel-2.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
    {
      title: "Analisa Pasar global di tengah macro ekonomi indonesia",
      image: "./src/assets/images/artikel-3.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
    {
      title: "Analisa Pasar global di tengah macro ekonomi indonesia",
      image: "./src/assets/images/artikel-4.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
    {
      title: "Analisa Pasar global di tengah macro ekonomi indonesia",
      image: "./src/assets/images/artikel-1.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
    {
      title: "Analisa Pasar global di tengah macro ekonomi indonesia",
      image: "./src/assets/images/artikel-2.png",
      label: "Akuntansi dan Finance",
      author: "LSP MSDM Indonesia",
      authorImage: "./src/assets/images/author-image.png",
    },
  ];

  const [startIndex, setStartIndex] = React.useState(0);

  const nextItems = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, data.length - itemsPerPage)
    );
  };

  const previousItems = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const itemsPerPage = useWindowSize().width >= 768 ? 4 : 2;

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-lg mb-10 text-center lg:text-3xl">
          Artikel Pembelajaran
        </h2>

        <div className="flex gap-x-4">
          <div className="flex flex-col gap-8 lg:gap-4 md:grid md:grid-cols-2 lg:flex-[2_2_0%]">
            {data
              .slice(startIndex, startIndex + itemsPerPage)
              .map((item, id) => (
                <ArtikelCard
                  key={id}
                  image={item.image}
                  title={item.title}
                  label={item.label}
                  author={item.author}
                  authorImage={item.authorImage}
                />
              ))}
          </div>

          <div className="flex-1 hidden lg:block relative">
            <img src={ArtikelImage} alt="image" className="w-full h-full" />

            <div className="absolute inset-5 text-white flex flex-col justify-end">
              <div className="flex items-center gap-x-[5px] mt-4 text-xs">
                <p>30 menit lalu</p>
                <div className="w-[3px] h-[3px] rounded-full bg-[#D9D9D9]" />
                <p>Akuntansi dan Finance</p>
              </div>

              <a href="#" className="my-4 font-bold block">
                Analisa Pasar global di tengah macro ekonomi indonesia
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center mt-9">
          <NavigationButton
            direction="prev"
            onClick={previousItems}
            disabled={startIndex === 0}
          />
          <NavigationButton
            direction="next"
            onClick={nextItems}
            disabled={startIndex + 2 >= data.length}
          />
        </div>
      </div>
    </section>
  );
};

export default Artikel;
