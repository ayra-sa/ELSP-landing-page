import Button from "../Button";


const Ekosistem = () => {
  return (
    <section className="bg-ekosistem hidden lg:block relative z-10">
      <div className="container">
        <div className="w-[60%] mx-auto text-center text-white py-20 space-y-6">
          <h2 className="text-3xl">eLSP Ekosistem Manajemen Sertifikasi</h2>
          <p className="text-lg text-[#D7D7D7]">
            eLSP adalah ekosistem berbasis cloud yang dirancang untuk
            meningkatkan dan menyederhanakan proses sertifikasi profesi.
          </p>

          <Button variant="primary" size="large">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ekosistem;
