"use client";
import { FaPlay, FaPause, FaCompress } from "react-icons/fa6";
import { Slider } from "@nextui-org/slider";
import { FaExpand } from "react-icons/fa";

const VideoControls = ({ isPlaying, onPlayPauseClick, onTimeChange, currentTime, duration, handleFullscreenClick, isFullscreen }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="absolute bottom-0 left-0 w-full px-6 flex items-center justify-center gap-3 my-6 z-10">
            <button
                className="bg-blue-500 p-2 rounded-full"
                onClick={onPlayPauseClick}
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <Slider
                size="sm"
                step={0.01}
                maxValue={duration}
                minValue={0}
                value={currentTime}
                onChange={onTimeChange}
                aria-label="Video Progress"
                defaultValue={0.2}
                className="mx-2"
                classNames={{
                    filler: "bg-[#31C7FE] rounded-full",
                    track: "bg-[#D7DCEA] !border-l-0",
                    thumb: "bg-transparent after:w-[13px] after:h-[13px]"
                }}
            />
            <span className="text-sm">{formatTime(currentTime)}</span>
            <button
                className="bg-blue-500 p-2 rounded-full"
                onClick={handleFullscreenClick}
            >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
        </div>
    );
};

export default VideoControls;
