// Versões responsivas (srcset) das imagens que têm uma variante menor gerada.
// Celulares baixam a versão "-sm"; telas grandes/retina continuam recebendo a imagem completa.
const responsiveVariants: Record<string, string> = {
  "/imagens/dr.webp": "/imagens/dr-sm.webp 664w, /imagens/dr.webp 1196w",
  "/imagens/clinica2.webp": "/imagens/clinica2-sm.webp 720w, /imagens/clinica2.webp 1280w",
};

export function srcSetFor(src: string): string | undefined {
  return responsiveVariants[src];
}
