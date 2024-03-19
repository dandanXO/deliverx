export function imgUrl(name: string) {
  return new URL(`./images/${name}`, import.meta.url).href
}
