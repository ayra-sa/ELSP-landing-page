import Button from "../Button";
import FriendListMobile from '../../assets/images/friend-list-mobile.png'
import FriendList from '../../assets/images/friend-list.png'

const Hero = () => {
  return (
    <section className="bg-hero bg-center bg-cover">
      <div className="container">
        <div className="text-white text-center pt-11 pb-20 md:w-[80%] md:mx-auto lg:w-[60%]">
          <h1 className="text-lg lg:text-3xl font-semibold mb-4">
            eLSP: Masa Depan Sertifikasi Profesi
          </h1>
          <p className="text-sm lg:text-xl">
            Solusi Digital Terbaik bagi Lembaga Sertifikasi Profesi (LSP) dalam
            Pelaksanaan Sertifikasi Secara Mudah dan Terpercaya
          </p>

          <div className="flex items-center gap-x-4 bg-white px-5 py-3 rounded-full my-8 md:w-[70%] lg:w-[60%] md:mx-auto">
            <img src={FriendListMobile} alt="friend list" className="md:hidden" />
            <img src={FriendList} alt="friend list" className="hidden md:block" />

            <div className="text-black text-left text-sm">
                <b className="lg:text-base">5000+ orang telah bergabung</b>
                <p className="text-xs lg:text-sm text-[#797979]">Jauh lebih dekat dengan mereka</p>
            </div>
          </div>

          <Button size="large">Gabung Sekarang</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
