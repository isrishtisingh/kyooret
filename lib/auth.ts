import { createHash } from 'crypto'

// In-memory storage for user info
const users: Record<string, { name: string; email: string; mobile: string }> = {}

// Send OTP via Twilio Verify
export async function sendOTP(mobile: string): Promise<{ success: boolean; message: string }> {
    try {
        console.log('Starting OTP generation for:', mobile)

        // In development, just return success
        if (process.env.NODE_ENV === 'development') {
            console.log(`[DEV] OTP would be sent to ${mobile}`)
            return { success: true, message: 'OTP sent successfully' }
        }

        // In production, use Twilio Verify
        const accountSid = process.env.TWILIO_ACCOUNT_SID
        const authToken = process.env.TWILIO_AUTH_TOKEN
        const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID

        if (!accountSid || !authToken || !verifyServiceSid) {
            console.error('Missing Twilio credentials:', {
                hasAccountSid: !!accountSid,
                hasAuthToken: !!authToken,
                hasVerifyServiceSid: !!verifyServiceSid
            })
            return { success: false, message: 'SMS service not configured' }
        }

        console.log('Sending verification via Twilio to:', mobile)
        const client = require('twilio')(accountSid, authToken)
        const verification = await client.verify.v2
            .services(verifyServiceSid)
            .verifications
            .create({ to: mobile, channel: 'sms' })

        console.log('Twilio verification sent:', verification.sid)
        return { success: true, message: 'OTP sent successfully' }
    } catch (error) {
        console.error('Error in sendOTP:', error)
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Failed to send OTP'
        }
    }
}

// Verify OTP using Twilio Verify
export async function verifyOTP(mobile: string, otp: string): Promise<{ success: boolean; message: string; token?: string }> {
    try {
        // In development, accept any 6-digit code
        if (process.env.NODE_ENV === 'development') {
            if (/^\d{6}$/.test(otp)) {
                // Generate a simple token for development
                const token = createHash('sha256').update(`${mobile}:${Date.now()}`).digest('hex')
                return { success: true, message: 'OTP verified successfully', token }
            }
            return { success: false, message: 'Invalid OTP' }
        }

        // In production, verify with Twilio
        const accountSid = process.env.TWILIO_ACCOUNT_SID
        const authToken = process.env.TWILIO_AUTH_TOKEN
        const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID

        if (!accountSid || !authToken || !verifyServiceSid) {
            return { success: false, message: 'Verification service not configured' }
        }

        const client = require('twilio')(accountSid, authToken)
        const verificationCheck = await client.verify.v2
            .services(verifyServiceSid)
            .verificationChecks
            .create({ to: mobile, code: otp })

        if (verificationCheck.status === 'approved') {
            // Generate a token for production
            const token = createHash('sha256').update(`${mobile}:${Date.now()}`).digest('hex')
            return { success: true, message: 'OTP verified successfully', token }
        }

        return { success: false, message: 'Invalid OTP' }
    } catch (error) {
        console.error('Error verifying OTP:', error)
        return { success: false, message: 'Failed to verify OTP' }
    }
}

// Create a new user
export async function createUser(userData: { name: string; email: string; mobile: string }): Promise<{ success: boolean; message: string }> {
    try {
        if (users[userData.mobile]) {
            return { success: false, message: 'User already exists' }
        }

        users[userData.mobile] = userData
        return { success: true, message: 'User created successfully' }
    } catch (error) {
        console.error('Error creating user:', error)
        return { success: false, message: 'Failed to create user' }
    }
}

// Get user by mobile number
export function getUserByMobile(mobile: string) {
    return users[mobile]
}

export async function login(mobile: string): Promise<{ success: boolean; message: string }> {
    try {
        if (!users[mobile]) {
            return {
                success: false,
                message: 'User not found'
            }
        }

        return {
            success: true,
            message: 'Login successful'
        }
    } catch (error) {
        console.error('Error logging in:', error)
        return {
            success: false,
            message: 'Failed to login'
        }
    }
} 