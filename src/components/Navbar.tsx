import { motion } from "framer-motion"
import { Link } from "react-router";

const Navbar = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="fixed left-0 top-0 right-0 p-5 z-50"
    >
      <div className="max-w-xl mx-auto backdrop-blur-sm dark:bg-zinc-800/50 bg-zinc-200/50 shadow-lg rounded-full py-3 lg:px-8 px-3 flex justify-center items-center gap-8">
        <Link
          to={{ pathname: "/" }}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Anasayfa
        </Link>
        <Link
          to={{ pathname: "/yetenekler" }}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Yetenekler
        </Link>
        <Link
          to={{ pathname: "/projeler" }}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          Projeler
        </Link>
        <Link
          to={{ pathname: "/iletisim" }}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          İletişim
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
