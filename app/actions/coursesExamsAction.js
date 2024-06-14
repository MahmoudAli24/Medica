"use server"

const examsData = [
    {
        id: 1,
        examTitle: "Medical Coding and Transcription",
        sections: [
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
        ],
    },
    {
        id: 2,
        examTitle: "Detection and Diagnosis of Breast Diseases",
        sections: [
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-1",
                title: "Section I",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            // Add more sections as needed
            {
                id: "section-2",
                title: "Section II",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
            {
                id: "section-3",
                title: "Section III",
                items: [
                    "Difference between Medical Transcription & Medical Coding",
                    "What are medical billing and coding?",
                    "What is medical transcription?",
                    "Practice Process in medical transcription",
                    "Medical Records Conversion Skills, For Medical Transcriptionists",
                    "Practice Skills for Medical Coders",
                    "Practice process to avoid Coding and billing error",
                ],
            },
        ],
    },

    // Add more exams as needed
];

const courseExams = [
    {
        id: 1,
        "title": "Medical Coding and Transcription",
        "overview": {
            "deadline": "01 July 2023",
            "time": "23:59 Mecca time",
            "taskPercentage": "95%"
        },
        "sections": [
            {
                "sectionTitle": "SECTION I",
                "questions": [
                    {
                        "questionNumber": 1,
                        "questionText": "Difference between Medical Transcription & Medical Coding",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    },
                    {
                        "questionNumber": 2,
                        "questionText": "What are medical billing and coding?",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    },
                    {
                        "questionNumber": 3,
                        "questionText": "What is medical transcription?",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        "title": "Medical Coding and Transcription",
        "overview": {
            "deadline": "01 July 2023",
            "time": "23:59 Mecca time",
            "taskPercentage": "95%"
        },
        "sections": [
            {
                "sectionTitle": "SECTION I",
                "questions": [
                    {
                        "questionNumber": 1,
                        "questionText": "Difference between Medical Transcription & Medical Coding",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    },
                    {
                        "questionNumber": 2,
                        "questionText": "What are medical billing and coding?",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    },
                    {
                        "questionNumber": 3,
                        "questionText": "What is medical transcription?",
                        "answers": [
                            "Answer 1",
                            "Answer 2",
                            "Answer 3",
                            "Answer 4",
                            "Answer 5"
                        ],
                    }
                ]
            }
        ]
    }
]

export const fetchCoursesExams = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(examsData);
        }, 2000);
    });
};

export const fetchCourseExam = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const courseExam = courseExams.find(course => course.id === id);
            resolve(courseExam);
        }, 1000); // Adding delay to simulate network request
    });
};

export const submitExamResult = (data) => {
    console.log("submitExamResult", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success or failure
            const success = Math.random() > 0.1; // 90% chance of success
            if (success) {
                resolve("Success");
            } else {
                reject(new Error("Simulated network error"));
            }
        }, 2000); // 2-second delay to simulate network request
    });
};
