import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, brand } = await request.json();

    // TODO: Add your email service integration here
    // Example: Send to a mailing list service like Mailchimp, Sendgrid, etc.
    console.log('Subscription request:', { email, brand });

    // For now, we'll just simulate a successful subscription
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
