import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({children , params:{lang}}) {
    return <main className={"container grid grid-cols-12 gap-5"} dir={lang === "ar" ? "rtl" : "ltr"}>
        <Sidebar/>
        {children}
    </main>
}