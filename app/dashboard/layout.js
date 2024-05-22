import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({children}) {
    return <main className={"container grid grid-cols-12 gap-5"}>
        <Sidebar/>
        {children}
    </main>
}