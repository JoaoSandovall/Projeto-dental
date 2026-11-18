// Pacote enxuto de animações do Framer Motion (domAnimation em vez de domMax):
// remove ~48 KB do motor de layout projection que não é necessário,
// mantendo todas as animações, springs, variants, scroll e whileInView intactos.
import { domAnimation } from "framer-motion";

export default domAnimation;
