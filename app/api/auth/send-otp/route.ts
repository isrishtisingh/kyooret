import { NextResponse } from 'next/server'
import { sendOTP } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log('Received request body:', body)

        const { mobile } = body

        if (!mobile) {
            console.error('Mobile number is missing in request')
            return NextResponse.json(
                { success: false, message: 'Mobile number is required' },
                { status: 400 }
            )
        }

        // Validate mobile number format
        const mobileRegex = /^\+?[1-9]\d{1,14}$/ // E.164 format
        if (!mobileRegex.test(mobile)) {
            console.error('Invalid mobile number format:', mobile)
            return NextResponse.json(
                { success: false, message: 'Invalid mobile number format. Please use E.164 format (e.g., +1234567890)' },
                { status: 400 }
            )
        }

        console.log('Sending OTP to:', mobile)
        const result = await sendOTP(mobile)
        console.log('OTP send result:', result)

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: result.message },
                { status: 400 }
            )
        }

        return NextResponse.json(result)
    } catch (error) {
        console.error('Error in send-otp route:', error)
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        )
    }
} 