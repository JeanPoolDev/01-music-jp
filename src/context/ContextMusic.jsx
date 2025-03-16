import { createContext, useRef, useState } from "react";
import { songs } from "../data";


export const MusicContext = createContext();

export function MusicProvider({ children }) {

  const audioRef = useRef();

  const [track, setTrack] = useState(songs[0]);
  const [status, setStatus] = useState(false);
  const [volumen, setVolumen] = useState(8);

  const handlePlay = () => {
    audioRef.current.play();
    setStatus(true);
  }

  const handlePause = () => {
    audioRef.current.pause();
    setStatus(false);
  }

  const handleVolumeChange = (e) => {
    const newVol = e.target.value / 10;

    setVolumen(e.target.value);

    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  }

  const handlePlayTrackById = (id) => {

    const selectedTrack = songs.find(song => song.id === id);

    if (!selectedTrack) {
      console.log('the ${id} not found')
      return;
    }

    setTrack(selectedTrack);

    if (!audioRef.current) return;

    setTimeout(() => {
      audioRef.current.play()
        .then(() => {
          setStatus(true);
        })
        .catch(error => {
          console.log(error.message)
          setStatus(false);
        });
    }, 10);
  }


  const handleNextTrack = () => {

    const currentIndex = songs.findIndex(song => song.id === track.id);

    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % songs.length;

    setTrack(songs[nextIndex]);

    setTimeout(() => {
      audioRef.current.play()
        .then(() => {
          setStatus(true);
        })
        .catch(error => {
          console.error(error.message)
          setStatus(false);
        })
    }, 10);

  }

  const handlePreviousTrack = () => {

    const currentIndex = songs.findIndex(song => song.id === track.id);

    if (currentIndex === -1) return;

    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;

    setTrack(songs[prevIndex]);

    setTimeout(() => {
      audioRef.current.play()
        .then(() => {
          setStatus(true);
        })
        .catch(error => {
          console.error(error.message)
          setStatus(false);
        })
    }, 10);

  }


  return (
    <MusicContext.Provider value={{
      audioRef,
      track,
      status,
      handlePause,
      handlePlay,
      handleVolumeChange,
      volumen,
      handlePlayTrackById,
      handleNextTrack,
      handlePreviousTrack
    }}>
      {children}
    </MusicContext.Provider>
  )
}