import { NextResponse } from 'next/server'
import { createUser } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const { name, email, mobile } = await request.json()

        if (!name || !email || !mobile) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            )
        }

        const result = await createUser({ name, email, mobile })

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: result.message },
                { status: 400 }
            )
        }

        return NextResponse.json(result)
    } catch (error) {
        console.error('Error in create-user route:', error)
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        )
    }
} 