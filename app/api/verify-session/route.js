import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if session was already used
    if (session.metadata?.was_used === 'true') {
      return NextResponse.json(
        { success: false, error: 'This session has already been used' },
        { status: 400 }
      );
    }

    if (session.payment_status === 'paid') {
      // Mark the session as used
      await stripe.checkout.sessions.update(sessionId, {
        metadata: { was_used: 'true', used_at: new Date().toISOString() }
      });
      
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Payment not completed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying Stripe session:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify session' },
      { status: 500 }
    );
  }
} 