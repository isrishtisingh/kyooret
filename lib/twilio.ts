import twilio from 'twilio'
import { config } from './config'

// Initialize Twilio client
const { accountSid, authToken, phoneNumber } = config.twilio

if (!accountSid || !authToken || !phoneNumber) {
    throw new Error('Twilio credentials are not properly configured')
}

const client = twilio(accountSid, authToken)

export async function sendSMS(to: string, message: string): Promise<{ success: boolean; message: string }> {
    try {
        await client.messages.create({
            body: message,
            from: phoneNumber,
            to: to
        })

        return {
            success: true,
            message: 'SMS sent successfully'
        }
    } catch (error) {
        console.error('Error sending SMS:', error)
        return {
            success: false,
            message: 'Failed to send SMS'
        }
    }
} 