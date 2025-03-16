import { createContext, useEffect, useRef, useState } from "react";
import { songs } from "../data";

export const MusicContext = createContext();

export function MusicProvider({ children }) {

  const audioRef = useRef();
  const bgRef = useRef();
  const barRef = useRef();

  const [track, setTrack] = useState(songs[0]);
  const [status, setStatus] = useState(false);
  const [volumen, setVolumen] = useState(8);
  const [time, setTime] = useState({
    currentTime: {
      minute: 0,
      second: 0,
    },
    totalTime: {
      minute: 0,
      second: 0,
    }
  })

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
      console.log(`the ${id} not found`)
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


  useEffect(() => {

    const audio = audioRef.current;

    const handleTimeUp = () => {
      barRef.current.style.width = (Math.floor(audio.currentTime / audio.duration * 100)) + '%';

      setTime({
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60),
        },
        totalTime: {
          minute: Math.floor(audio.duration / 60),
          second: Math.floor(audio.duration % 60),
        }
      })
    }

    audio.addEventListener('timeupdate', handleTimeUp);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUp);
    }

  }, [track])

  const handleSeekSong = (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / bgRef.current.offsetWidth) * audioRef.current.duration)
  }


  return (
    <MusicContext.Provider value={{
      audioRef, track, status,
      volumen, time, bgRef, barRef,
      handlePause,
      handlePlay,
      handleVolumeChange,
      handlePlayTrackById,
      handleNextTrack,
      handlePreviousTrack,
      handleSeekSong
    }}>
      {children}
    </MusicContext.Provider>
  )
}