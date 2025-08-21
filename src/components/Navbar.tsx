import { motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    const targetHash = `#${id}`;

    // ana sayfada değilse
    if (location.pathname !== "/") {
      navigate(`/${targetHash}`);
      return;
    }

    // ana sayfada kaydırma için , HashScroller çalışır
    if (location.hash !== targetHash) {
      navigate(targetHash);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="fixed left-0 top-0 right-0 p-5 z-50"
    >
      <div className="max-w-xl mx-auto backdrop-blur-sm dark:bg-zinc-800/50 bg-zinc-200/50 shadow-lg rounded-full py-3 lg:px-8 px-3 flex justify-center items-center gap-8">
        <button
          onClick={() => handleScroll("anasayfa")}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Anasayfa
        </button>
        <button
          onClick={() => handleScroll("yetenekler")}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Yetenekler
        </button>
        <button
          onClick={() => handleScroll("projeler")}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Projeler
        </button>
        <button
          onClick={() => handleScroll("iletisim")}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          İletişim
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
