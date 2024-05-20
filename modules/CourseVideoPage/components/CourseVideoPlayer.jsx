import ReactPlayer from "react-player";
import {IoPause, IoPlay} from "react-icons/io5";
import {useEffect, useRef, useState} from "react";

const CourseVideoPlayer = () => {
    const [isClient, setIsClient] = useState(false)
    const [playing, setPlaying] = useState(true);
    const [durationSeconds, setDurationSeconds] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const playerRef = useRef();

    useEffect(() => {
        setIsClient(true)
    }, [])
    return(
        <>
            {isClient && (<>
                    {/*<ReactPlayer*/}
                    {/*    ref={playerRef}*/}
                    {/*    controls={false}*/}
                    {/*    playing={playing}*/}
                    {/*    url='https://music.youtube.com/watch?v=agsMg0SOGqM&list=RDAMVMjZT1wwBV6m8   '*/}
                    {/*    volume={1}*/}
                    {/*    muted={false}*/}
                    {/*    onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}*/}
                    {/*    onSeek={setPlayedSeconds}*/}
                    {/*    onDuration={*/}
                    {/*        (durationSeconds) => setDurationSeconds(durationSeconds)*/}
                    {/*    }*/}
                    {/*    onPause={*/}
                    {/*        ()=>{setPlaying(false)}*/}
                    {/*    }*/}
                    {/*    onPlay={()=>{setPlaying(true)}}*/}
                    {/*/>*/}
                    {/*<Controls*/}
                    {/*    playerRef={playerRef}*/}
                    {/*    playing={playing}*/}
                    {/*    setPlaying={setPlaying}*/}
                    {/*    playedSeconds={playedSeconds}*/}
                    {/*    duration={durationSeconds}*/}
                    {/*/>*/}
                </>

            )}
        </>
    )
}

const Controls = (props) => {
    const seek = (e) => {
        props.playerRef.current.seekTo(+e.target.value, "seconds");
    };

    const toggleMute = () => {
        props.playerRef.current.muted = !props.playerRef.current.muted;
    };

    const toggleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            props.playerRef.current.wrapper.requestFullscreen();
        }
    };

    return (
        <div className="video-controls">
            <button onClick={() => props.setPlaying(!props.playing)}>
                {props.playing ? <IoPause /> : <IoPlay />}
            </button>
            <input
                type="range"
                value={props.playedSeconds}
                min="0"
                max={props.duration}
                onChange={seek}
            />
            <button onClick={toggleMute}>
                {props.playerRef.current && props.playerRef.current.muted ? "Unmute" : "Mute"}
            </button>
            <input
                type="range"
                value={props.playerRef.current && props.playerRef.current.volume}
                min="0"
                max="1"
                step="0.01"
                onChange={(e) => {
                    props.playerRef.current.volume = parseFloat(e.target.value);
                }}
            />
            <button onClick={toggleFullScreen}>Fullscreen</button>
        </div>
    );
};

export default CourseVideoPlayer