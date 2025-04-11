import { Nav } from "@/components/ui/nav"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            <Nav />
            <main>{children}</main>
        </div>
    )
} 