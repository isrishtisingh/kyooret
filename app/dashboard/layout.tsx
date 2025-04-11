import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen">
            <main className="container py-6">
                {children}
            </main>
        </div>
    )
} 