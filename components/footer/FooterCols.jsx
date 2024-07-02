import FooterCol from "@/components/footer/FooterCol";

const FooterCols = ({ dict }) => {
    const footerCols = [
        {
            title: dict.footer.about,
            items: [
                { id: 1, name: dict.footer.aboutUs, link: "/about" },
                { id: 2, name: dict.footer.instructors, link: "/instructors" },
                { id: 3, name: dict.footer.contactUs, link: "/contact" },
                { id: 4, name: dict.footer.pricing, link: "/pricing" },
            ]
        },
        {
            title: dict.footer.learn,
            items: [
                { id: 4, name: dict.footer.courses, link: "/courses" },
                { id: 5, name: dict.footer.careerTracks, link: "/career-tracks" },
                { id: 5, name: dict.footer.careerCertificate, link: "/career-certificate" },
                { id: 5, name: dict.footer.courseCertificate, link: "/course-certificate" }
            ]
        },
        {
            title: dict.footer.resources,
            items: [
                { id: 1, name: dict.footer.courseNotes, link: "/course-notes" },
                { id: 2, name: dict.footer.templates, link: "/templates" },
                { id: 3, name: dict.footer.careerGuides, link: "/career-guides" },
                { id: 4, name: dict.footer.practiceExams, link: "/practice-exams" }
            ]
        },
        {
            title: dict.footer.platform,
            items: [
                { id: 5, name: dict.footer.successStories, link: "/success-stories" },
                { id: 6, name: dict.footer.qnaHub, link: "/qna-hub" },
                { id: 7, name: dict.footer.helpCenter, link: "/help-center" },
                { id: 8, name: dict.footer.verifyCertificate, link: "/verify-certificate" }
            ]
        },
        {
            title: dict.footer.company,
            items: [
                { id: 9, name: dict.footer.aboutUs, link: "/about-us" },
                { id: 10, name: dict.footer.contactUs, link: "/contact-us" },
                { id: 11, name: dict.footer.termsOfService, link: "/terms-of-service" },
                { id: 12, name: dict.footer.privacyPolicy, link: "/privacy-policy" }
            ]
        }
    ];

    return (
        <div className={"grid grid-cols-2 sm:grid-cols-5 col-span-12 md:col-span-8 lg:col-start-6 lg:col-span-7"}>
            {footerCols.map((col, index) => (
                <FooterCol key={index} title={col.title} items={col.items} />
            ))}
        </div>
    )
}

export default FooterCols;
