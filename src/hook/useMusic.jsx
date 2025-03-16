import { useContext } from "react"
import { MusicContext } from "../context/ContextMusic"

export function useMusic() {

  const music = useContext(MusicContext)

  if (!music) throw new Error('No se establecio conección')

  return music
};