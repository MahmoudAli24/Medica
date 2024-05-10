import FooterCol from "@/components/footer/FooterCol";

const FooterCols = ()=>{
    const footerCols = [
        {
            title: "About",
            items: [
                { id: 1, name: "About Us", link: "/about" },
                { id: 2, name: "Instructors", link: "/instructors" },
                { id: 3, name: "Contact Us", link: "/contact" },
                {id:4 ,name: "Pricing", link: "/pricing" },
            ]
        },
        {
            title: "Learn",
            items: [
                { id: 4, name: "Courses", link: "/courses" },
                { id: 5, name: "Career tracks", link: "/career-tracks" },
                { id: 5, name: "Career Certificate", link: "/career-certificate" },
                { id: 5, name: "Course Certificate", link: "/career-certificate" }
            ]
        },
        {
            title: "Resources",
            items: [
                { id: 1, name: "Course Notes", link: "/course-notes" },
                { id: 2, name: "Templates", link: "/templates" },
                { id: 3, name: "Career Guides", link: "/career-guides" },
                { id: 4, name: "Practice Exams", link: "/practice-exams" }
            ]
        },
        {
            title: "Platform",
            items: [
                { id: 5, name: "Success Stories", link: "/success-stories" },
                { id: 6, name: "Q&A Hub", link: "/qna-hub" },
                { id: 7, name: "Help Center", link: "/help-center" },
                { id: 8, name: "Verify Certificate", link: "/verify-certificate" }
            ]
        },
        {
            title: "Company",
            items: [
                { id: 9, name: "About Us", link: "/about-us" },
                { id: 10, name: "Contact Us", link: "/contact-us" },
                { id: 11, name: "Terms of Service", link: "/terms-of-service" },
                { id: 12, name: "Privacy Policy", link: "/privacy-policy" }
            ]
        }
    ];

    return(
        <div className={"grid grid-cols-2 sm:grid-cols-5 col-span-12 md:col-span-8 lg:col-start-6 lg:col-span-7"}>
            {footerCols.map((col, index) => (
                <FooterCol key={index} title={col.title} items={col.items} />
            ))}
        </div>
    )
}

export default FooterCols;