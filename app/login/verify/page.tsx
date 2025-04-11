"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function VerifyPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const mobile = searchParams.get("mobile")

  useEffect(() => {
    if (!mobile) {
      router.push("/login")
      return
    }

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true)
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [mobile, router])

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResendOtp = async () => {
    if (!mobile) return

    setError("")
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      })

      const result = await response.json()
      if (!result.success) {
        setError(result.message)
      } else {
        setTimer(30)
        setCanResend(false)
        setOtp(Array(6).fill(""))
        inputRefs.current[0]?.focus()
      }
    } catch (err) {
      setError("Failed to resend OTP")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify = async () => {
    if (!mobile) return

    setError("")
    setIsLoading(true)
    try {
      const otpString = otp.join("")
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp: otpString }),
      })

      const result = await response.json()
      if (!result.success) {
        setError(result.message)
      } else {
        // Store the token in localStorage
        localStorage.setItem('token', result.token)
        // Redirect to dashboard
        router.push('/dashboard')
      }
    } catch (err) {
      setError("Failed to verify OTP")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mobile) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Verify your number
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter the 6-digit code sent to {mobile}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <Input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el
                  }}
                  type="text"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="h-12 w-12 rounded-md border-0 text-center text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  placeholder="0"
                />
              ))}
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">
                Change number
              </Link>
            </div>
            <div className="text-sm">
              {canResend ? (
                <button
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="font-medium text-teal-600 hover:text-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Resend OTP
                </button>
              ) : (
                <span className="text-gray-500">
                  Resend in {timer}s
                </span>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              onClick={handleVerify}
              disabled={isLoading || otp.some((digit) => !digit)}
              className="group relative flex w-full justify-center rounded-md bg-teal-600 px-3 py-3 text-sm font-semibold text-white hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 