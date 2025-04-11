import { NextResponse } from 'next/server'
import { verifyOTP } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const { mobile, otp } = await request.json()

        if (!mobile || !otp) {
            return NextResponse.json(
                { success: false, message: 'Mobile number and OTP are required' },
                { status: 400 }
            )
        }

        const result = await verifyOTP(mobile, otp)

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: result.message },
                { status: 400 }
            )
        }

        return NextResponse.json(result)
    } catch (error) {
        console.error('Error in verify-otp route:', error)
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        )
    }
} 