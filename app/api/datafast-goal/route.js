import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, description } = await request.json();
    const datafast_visitor_id = request.cookies.get('datafast_visitor_id')?.value;

    if (!name) {
      return NextResponse.json({ error: 'Goal name is required' }, { status: 400 });
    }

    if (!datafast_visitor_id) {
      return NextResponse.json({ error: 'DataFast visitor ID not found. Make sure the visitor has at least one pageview.' }, { status: 400 });
    }

    const response = await fetch("https://datafa.st/api/v1/goals", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DATAFAST_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        datafast_visitor_id,
        name,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error(`DataFast API responded with status ${response.status}`);
    }

    const result = await response.json();
    console.log("Goal sent to DataFast:", result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error sending goal to DataFast:", error);
    return NextResponse.json(
      { error: 'Failed to track goal' },
      { status: 500 }
    );
  }
}