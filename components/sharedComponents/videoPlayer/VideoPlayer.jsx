"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import ReportButton from "@/components/sharedComponents/videoPlayer/components/ReportButton";
import ActionButtons from "@/components/sharedComponents/videoPlayer/components/ActionButtons";
import VideoControls from "@/components/sharedComponents/videoPlayer/components/VideoControls";
import styles from "./VideoPlayer.module.css"; // Import the CSS module

const VideoPlayer = ({ videoSrc }) => {
    const containerRef = useRef(null); // Reference to the video container
    const playerRef = useRef(null); // Reference to the ReactPlayer
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handlePlayPauseClick = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeChange = (value) => {
        setCurrentTime(value);
        if (playerRef.current) {
            playerRef.current.seekTo(value, "seconds");
        }
    };

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const handleFullscreenClick = () => {
        const elem = containerRef.current;
        if (!isFullscreen) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    const handleSeek = (seconds) => {
        setCurrentTime(seconds);
    };

    return (
        <div ref={containerRef} className={`${styles.videoContainer} relative aspect-video w-full mx-auto bg-overlay p-4 rounded-lg shadow-lg text-white`}>
            <div className={`${isPlaying ? styles.hidden : styles.visible} ${styles.controls}`}>
                <ReportButton />
                <ActionButtons />
                <VideoControls
                    isPlaying={isPlaying}
                    onPlayPauseClick={handlePlayPauseClick}
                    onTimeChange={handleTimeChange}
                    currentTime={currentTime}
                    duration={duration}
                    handleFullscreenClick={handleFullscreenClick}
                    isFullscreen={isFullscreen}
                />
            </div>
            <div className="flex w-full h-full items-center justify-center mt-6">
                <ReactPlayer
                    ref={playerRef}
                    url={videoSrc}
                    playing={isPlaying}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onSeek={handleSeek}
                    controls={false} // Ensure custom controls are used
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    config={{
                        youtube: {
                            playerVars: {
                                modestbranding: 1, // Remove YouTube logo
                                rel: 0, // Disable related videos at the end
                                showinfo: 0, // Remove video title and uploader info
                                controls: 0, // Remove default controls
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
