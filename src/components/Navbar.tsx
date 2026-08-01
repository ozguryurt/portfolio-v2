import { motion } from "framer-motion"
import { Link } from "react-router";
import languageStore from "../stores/languageStore";
import { ui, routeMap, type Lang } from "../utils/translations";

const Navbar = () => {
  const { lang } = languageStore()
  const currentLang: Lang = lang
  const t = ui[currentLang]
  const routes = routeMap[currentLang]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="fixed left-0 top-0 right-0 p-5 z-50"
    >
      <div className="max-w-xl mx-auto backdrop-blur-sm dark:bg-zinc-800/50 bg-zinc-200/50 shadow-lg rounded-full py-3 lg:px-8 px-3 flex justify-center items-center gap-8">
        <Link
          to={`/${currentLang}${routes.home}`}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          {t.navbar.home}
        </Link>
        <Link
          to={`/${currentLang}${routes.skills}`}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          {t.navbar.skills}
        </Link>
        <Link
          to={`/${currentLang}${routes.projects}`}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          {t.navbar.projects}
        </Link>
        <Link
          to={`/${currentLang}${routes.contact}`}
          className="font-medium text-sm lg:text-lg text-center drop-shadow-lg dark:text-white text-zinc-800 cursor-pointer"
        >
          {t.navbar.contact}
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;