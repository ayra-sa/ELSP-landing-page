import React from "react";

interface MitraCardProps {
  mitra: string;
  mitraImage: string;
}

const MitraCard: React.FC<MitraCardProps> = ({ mitra, mitraImage }) => {
  return (
    <div className="border border-[#E3E3E3] rounded-lg px-6 h-[6.5rem] lg:h-44 flex items-center justify-center">
      <img src={mitraImage} alt={mitra} />
    </div>
  );
};

const Mitra = () => {
  const mitraLSP = [
    {
      mitra: "LSP MSDM",
      mitraImage: "/assets/images/lsp-msdm.png",
    },
    {
      mitra: "cammy",
      mitraImage: "/assets/images/camy.png",
    },
    {
      mitra: "LSP MSDM",
      mitraImage: "/assets/images/mekari.png",
    },
    {
      mitra: "cammy",
      mitraImage: "/assets/images/google.png",
    },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-lg lg:text-3xl text-center">Mitra LSP yang telah bergabung</h2>

        <div className="grid grid-cols-2 gap-2 mt-8">
          {mitraLSP.map((item, id) => (
            <MitraCard
              key={id}
              mitra={item.mitra}
              mitraImage={item.mitraImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mitra;
