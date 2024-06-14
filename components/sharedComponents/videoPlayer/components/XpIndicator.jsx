
const XpIndicator = ({ xp }) => {
    const progress = (xp / 100) * 100; // Assuming 100 XP is the max for simplicity

    return (
        <div className="relative flex items-center justify-center w-16 h-16">
            <div className="absolute flex items-center justify-center w-14 h-14 bg-gray-900 rounded-full">
                <div className="flex flex-col items-center">
                    <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2a1 1 0 01.894.553l2.765 5.592 6.167.894a1 1 0 01.554 1.707l-4.462 4.35 1.054 6.142a1 1 0 01-1.451 1.054L12 19.348l-5.521 2.904a1 1 0 01-1.451-1.054l1.054-6.142-4.462-4.35a1 1 0 01.554-1.707l6.167-.894L11.106 2.553A1 1 0 0112 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-white mt-1 text-sm">{xp} XP</p>
                </div>
            </div>
            <svg className="absolute w-16 h-16">
                <circle
                    className="text-gray-700"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="50%"
                    cy="50%"
                />
                <circle
                    className="text-blue-500"
                    strokeWidth="3"
                    strokeDasharray="188"
                    strokeDashoffset={188 - (188 * progress) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="50%"
                    cy="50%"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
            </svg>
        </div>
    );
};

export default XpIndicator;
