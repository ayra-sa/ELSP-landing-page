import React from "react";
import Hand from "/assets/images/hand-phone.png";

interface SertifikasiCardProps {
  variant?: "primary" | "secondary";
  icon: string;
  title: string;
  description: string;
}

const SertifikasiCard: React.FC<SertifikasiCardProps> = ({
  description,
  icon,
  title,
  variant,
}) => {
  return (
    <div
      className={`flex bg-white ${
        variant === "primary"
          ? "border border-[#C5C5C5] px-6 py-8 flex-col items-start rounded-2xl gap-y-8"
          : "even:border-y even:border-y-[#E1E1E1] even:py-6 items-start gap-x-8 py-6"
      }`}
    >
      <img src={icon} alt={`icon ${title}`} />
      <div className="space-y-4">
        <h3>{title}</h3>
        <p className="text-[#4B4B4B]">{description}</p>
      </div>
    </div>
  );
};

const Sertifikasi = () => {
  const data1 = [
    {
      title: "Platform Berbasis Cloud",
      description:
        "Akses eLSP kapan saja, di mana saja, dan di perangkat apa pun dengan platform berbasis cloud kami.",
      icon: "/assets/icons/upload.svg",
    },
    {
      title: "Sertifikasi Aman & Terpercaya",
      description:
        "eLSP menggunakan langkah-langkah keamanan yang handal untuk melindungi data Anda dan memastikan kerahasiaan.",
      icon: "/assets/icons/certification.svg",
    },
    {
      title: "Mengikuti Pedoman BNSP",
      description:
        "eLSP dikembangkan mengikuti pedoman yang ditetapkan oleh Badan Nasional Sertifikasi Profesi (BNSP).",
      icon: "/assets/icons/folder.svg",
    },
  ];

  const data2 = [
    {
      title: "Terintegrasi dan Ramah Pengguna",
      description:
        "Mudah dan ramah bagi semua; LSP, Asesor dan Asesi. Semua proses uji terintegrasi dalam dalam satu ekosistem; dari pendaftaran, penjadwalan hingga pelaporan hasil uji",
      icon: "/assets/icons/profile.svg",
    },
    {
      title: "Materi Uji Up to Date",
      description:
        "LSP memiliki fleksibilitas untuk membuat dan menyesuaikan proses sertifikasi sesuai dengan kebutuhan dan tetap mematuhi standar BNSP.",
      icon: "/assets/icons/energy.svg",
    },
    {
      title: "Efisien dan Hemat Waktu",
      description:
        "Menjalankan proses sertifikasi dengan mudah, efisiensi waktu dan sumber daya yang diperlukan mulai dari pendaftaran, penyiapan materi uji, pelaksanaan uji hingga kegiatan admistrasi LSP.",
      icon: "/assets/icons/back-in-time.svg",
    },
  ];
  return (
    <section className="py-10 lg:pb-[10%]">
      <div className="container">
        <div className="lg:w-[80%] lg:mx-auto">
          <h2 className="text-center lg:text-3xl">
            Perbaharui Proses Sertifikasi LSP Anda
          </h2>

          <p className="mt-4 text-[#727272] text-center text-sm lg:text-lg">
            eLSP adalah ekosistem berbasis cloud yang dirancang untuk
            meningkatkan dan menyederhanakan proses sertifikasi profesi.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {data1.map((item, id) => (
            <SertifikasiCard
              key={id}
              variant="primary"
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 lg:flex lg:items-center lg:relative">
        <div className="lg:container">
          <img src={Hand} alt="hand image" className="lg:absolute lg:left-0 lg:top-0 lg:bottom-0" />

          <div className="bg-white flex flex-col relative -mt-[20%] border border-[#D6D6D6] rounded-2xl px-6 mx-5 lg:mx-0 lg:w-[60%] lg:ml-auto lg:mt-[20%]">
            {data2.map((item, id) => (
              <SertifikasiCard
                key={id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertifikasi;
