"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Upload } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Mock data - replace with actual data from your backend
const userDatasets = [
    {
        id: 1,
        name: "Facial Dataset",
        description: "Annotated face images for diverse South Asian skin tones.",
        size: "10GB",
        format: "JPG",
        count: "5000+ images",
        downloadUrl: "#"
    },
    {
        id: 2,
        name: "Age & Gender Recognition",
        description: "Labeled images and annotations for demographic classification models.",
        size: "5GB",
        format: "JPG",
        count: "5000+ images",
        downloadUrl: "#"
    }
]

const userContributions = [
    {
        id: 1,
        name: "Regional India",
        description: "Region-wise datasets capturing linguistic and visual diversity.",
        status: "Under Review",
        submittedDate: "2024-03-15",
        count: "5000+ images"
    }
]

export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        // Handle back button press
        const handleBackButton = (e: PopStateEvent) => {
            e.preventDefault()
            router.push('/dashboard')
        }

        window.addEventListener('popstate', handleBackButton)

        return () => {
            window.removeEventListener('popstate', handleBackButton)
        }
    }, [router])

    return (
        <div className="py-8 px-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Button asChild>
                    <Link href="/datasets/contribute">
                        <Upload className="mr-2 h-4 w-4" />
                        Contribute Dataset
                    </Link>
                </Button>
            </div>

            <div className="grid gap-8">
                {/* Your Datasets Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Datasets</CardTitle>
                        <CardDescription>Datasets you have access to</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {userDatasets.map((dataset) => (
                                <div key={dataset.id} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">{dataset.name}</h3>
                                        <p className="text-sm text-gray-600">{dataset.description}</p>
                                        <div className="flex gap-2 mt-2 text-sm text-gray-500">
                                            <span>{dataset.size}</span>
                                            <span>•</span>
                                            <span>{dataset.format}</span>
                                            <span>•</span>
                                            <span className="text-teal-600">{dataset.count}</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" asChild>
                                        <Link href={dataset.downloadUrl}>
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Your Contributions Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Contributions</CardTitle>
                        <CardDescription>Datasets you have submitted</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {userContributions.map((contribution) => (
                                <div key={contribution.id} className="p-4 border rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">{contribution.name}</h3>
                                            <p className="text-sm text-gray-600">{contribution.description}</p>
                                            <p className="text-sm text-teal-600 mt-1">{contribution.count}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                contribution.status === "Approved" 
                                                    ? "bg-green-100 text-green-800" 
                                                    : "bg-yellow-100 text-yellow-800"
                                            }`}>
                                                {contribution.status}
                                            </span>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Submitted on {contribution.submittedDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 