import type { AppProps } from 'next/app'
import "@/styles/top.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
