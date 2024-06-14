import { FaPlay, FaPause } from "react-icons/fa6";
import { Slider } from "@nextui-org/slider";

const VideoControls = ({ isPlaying, onPlayPauseClick, onTimeChange, currentTime, duration }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="absolute bottom-0 left-0 w-full px-6 flex items-center justify-center my-6 z-10">
            <button
                className="bg-blue-500 p-2 rounded-full"
                onClick={onPlayPauseClick}
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <Slider
                value={currentTime}
                max={duration}
                step={1}
                onValueChange={onTimeChange}
                aria-label="Time Slider"
                size="lg"
                color="success"
                className="mx-4 flex-grow"
            />
            <span className="text-sm">{formatTime(currentTime)}</span>
        </div>
    );
};

export default VideoControls;
