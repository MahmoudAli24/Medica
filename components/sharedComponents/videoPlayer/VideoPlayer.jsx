"use client";
import { useRef, useState } from "react";
import ReportButton from "@/components/sharedComponents/videoPlayer/components/ReportButton";
import ActionButtons from "@/components/sharedComponents/videoPlayer/components/ActionButtons";
import VideoControls from "@/components/sharedComponents/videoPlayer/components/VideoControls";

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlayPauseClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeChange = (newTime) => {
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    return (
        <div className="relative aspect-video w-full mx-auto bg-overlay p-4 rounded-lg shadow-lg text-white">
            <ReportButton />
            <ActionButtons />
            <VideoControls
                isPlaying={isPlaying}
                onPlayPauseClick={handlePlayPauseClick}
                onTimeChange={handleTimeChange}
                currentTime={currentTime}
                duration={duration}
            />
            <div className="flex items-center justify-center mt-6">
                <video
                    ref={videoRef}
                    className="w-full rounded-lg"
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    controls={false} // Ensure custom controls are used
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoPlayer;
