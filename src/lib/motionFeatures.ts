// Pacote de recursos do Framer Motion (animações, gestos, drag e layout).
// Fica num chunk separado e é carregado em paralelo com o React (ver main.tsx),
// tirando ~metade do Framer Motion do JavaScript crítico da primeira pintura.
import { domMax } from "framer-motion";

export default domMax;
