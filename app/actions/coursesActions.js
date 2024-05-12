"use server"

import doctor from "@/public/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png";

const coursesData = [
    {
        id: 1,
        title: "Course Title 1",
        lecturesCount: 12,
        time: "12 Hr",
        isCertificate: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Mahmoud",
        docTitle: "Professor of Medicine",
        courseRate: 3,
        image: doctor,
        price:700,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    },
    {
        id: 2,
        title: "Course Title 2",
        lecturesCount: 8,
        time: "8 Hr",
        isCertificate: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Ahmed",
        docTitle: "Professor of Engineering",
        courseRate: 4,
        image: doctor,
        price:800,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    },
    {
        id: 3,
        title: "Course Title 3",
        lecturesCount: 10,
        time: "10 Hr",
        isCertificate: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Fatima",
        docTitle: "Professor of Physics",
        courseRate: 5,
        image: doctor,
        price:700,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    },
    {
        id: 4,
        title: "Course Title 4",
        lecturesCount: 15,
        time: "15 Hr",
        isCertificate: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Khaled",
        docTitle: "Professor of Chemistry",
        courseRate: 4.5,
        image: doctor,
        price:700,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    },
    {
        id: 5,
        title: "Course Title 5",
        lecturesCount: 20,
        time: "20 Hr",
        isCertificate: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Sara",
        docTitle: "Professor of Biology",
        courseRate: 3.8,
        image: doctor,
        price:700,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    },
    {
        id: 6,
        title: "Course Title 6",
        lecturesCount: 18,
        time: "18 Hr",
        isCertificate: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
        docName: "Ali",
        docTitle: "Professor of Mathematics",
        courseRate: 4.2,
        image: doctor,
        price:700,
        lastUpdate:"Last updated: 2023-04-05 15:39:18"
    }
];
export const fetchCourses = (searchParams) => {
    const checkRatingRange = (ratings, courseRate) => {
        const [minRating, maxRating] = ratings.split(",").map(parseFloat);
        return minRating <= courseRate && courseRate <= maxRating;
    };
    let filteredCourses = coursesData;
    if (searchParams) {
        filteredCourses = coursesData.filter(course => {
            return (
                (!searchParams.duration || searchParams.duration === course.time) &&
                (!searchParams.searchKey || searchParams.searchKey === course.title) &&
                (!searchParams.averagePrice || searchParams.averagePrice === course.isCertificate.toString()) &&
                (!searchParams.ratings || checkRatingRange(searchParams.ratings, course.courseRate))
            );
        });
    }

    return filteredCourses
}

export const fetchCourseByName =(name)=> {
    console.log("name=>",name)
    if (name){
        return coursesData.find((course) => course.title === name);
    }else {
        return undefined
    }
}