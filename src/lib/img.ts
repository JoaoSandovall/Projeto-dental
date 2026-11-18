// Versões responsivas (srcset) das imagens que têm uma variante menor gerada.
// Celulares baixam a versão "-sm"; telas grandes/retina continuam recebendo a imagem completa.
const responsiveVariants: Record<string, string> = {
  "/imagens/dr.webp": "/imagens/dr-sm.webp 664w, /imagens/dr.webp 1196w",
  "/imagens/clinica2.webp": "/imagens/clinica2-sm.webp 720w, /imagens/clinica2.webp 1280w",
};

export function srcSetFor(src: string): string | undefined {
  return responsiveVariants[src];
}

// Pré-carrega e já decodifica uma imagem na GPU antes de uma transição de página.
// Assim, quando a página entra em cena (fade-in), a foto aparece no primeiro frame sem engasgar.
const decodedCache = new Map<string, Promise<void>>();

export function preloadImage(src: string, srcSet?: string, sizes?: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const key = `${src}|${srcSet ?? ""}`;
  const cached = decodedCache.get(key);
  if (cached) return cached;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.decoding = "async";
    if (sizes) img.sizes = sizes;
    if (srcSet) img.srcset = srcSet;
    img.src = src;

    const done = () => resolve();
    if (typeof img.decode === "function") {
      img.decode().then(done, done);
    } else {
      img.onload = done;
      img.onerror = done;
    }
  });

  decodedCache.set(key, promise);
  return promise;
}
