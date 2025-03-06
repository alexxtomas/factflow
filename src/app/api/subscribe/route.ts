import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email(),
});

// Initialize Mailjet with your API credentials
// You'll need to add these to your environment variables
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || '',
});

// The ID of your Mailjet contact list
const CONTACT_LIST_ID = process.env.MAILJET_LIST_ID || '';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email } = await request.json();

    const validation = emailSchema.safeParse({
      email,
    });

    if (!validation.success) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Add the contact to Mailjet list
    const response = await mailjet
      .post('contactslist', { version: 'v3' })
      .id(CONTACT_LIST_ID)
      .action('managecontact')
      .request({
        Properties: {
          // You can add additional properties if needed
        },
        Action: 'addnoforce', // Add the contact without forcing if it already exists
        Email: email,
      });

    console.log(response);

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to the waitlist' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error subscribing to waitlist:', error);

    // Check if it's a Mailjet error with error code
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const mailjetError = error as any;

      // Handle duplicate subscription more gracefully
      if (mailjetError.statusCode === 400 && mailjetError.message?.includes('already exists')) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our waitlist' },
          { status: 400 },
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 },
    );
  }
}
