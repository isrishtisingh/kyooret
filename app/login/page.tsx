"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [mobile, setMobile] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const formatMobileNumber = (number: string): string => {
    // Remove all non-digit characters
    const digits = number.replace(/\D/g, '')
    console.log('Digits after removing non-digits:', digits)
    
    // Add country code if not present (assuming India +91)
    if (!digits.startsWith('91') && digits.length === 10) {
      const formatted = `+91${digits}`
      console.log('Adding country code:', formatted)
      return formatted
    }
    
    // If number already has country code, add + if missing
    if (digits.length > 10 && !number.startsWith('+')) {
      const formatted = `+${digits}`
      console.log('Adding + prefix:', formatted)
      return formatted
    }
    
    console.log('Returning original number:', number)
    return number
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const formattedMobile = formatMobileNumber(mobile)
      console.log('Final formatted mobile number:', formattedMobile)

      const requestBody = { mobile: formattedMobile }
      console.log('Request body:', requestBody)

      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)

      if (result.success) {
        router.push(`/login/verify?mobile=${encodeURIComponent(formattedMobile)}`)
      } else {
        setError(result.message || "Failed to send OTP")
      }
    } catch (err) {
      console.error('Error in login:', err)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link href="/signup" className="font-medium text-teal-600 hover:text-teal-500">
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="mobile" className="sr-only">
                Mobile Number
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="relative block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                placeholder="Mobile Number (e.g., 9876543210)"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-md bg-teal-600 px-3 py-3 text-sm font-semibold text-white hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 