export default function cloudflareLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
} 