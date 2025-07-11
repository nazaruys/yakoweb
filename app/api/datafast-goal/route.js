import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse request body
    let name, description;
    try {
      ({ name, description } = await req.json());
    } catch (e) {
      console.error("Failed to parse request body:", e);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Get visitor ID
    const datafast_visitor_id = req.cookies.get('datafast_visitor_id')?.value;

    if (!name) {
      return NextResponse.json({ error: 'Goal name is required' }, { status: 400 });
    }

    if (!datafast_visitor_id) {
      return NextResponse.json({ error: 'DataFast visitor ID not found. Make sure the visitor has at least one pageview.' }, { status: 400 });
    }

    // Make request to DataFast
    const response = await fetch("https://datafa.st/api/v1/goals", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DATAFAST_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        datafast_visitor_id: datafast_visitor_id,
        name: name,
        description: description,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("DataFast API error response:", result);
      return NextResponse.json(
        { error: result.error || `DataFast API responded with status ${response.status}` },
        { status: response.status }
      );
    }

    console.log("Goal sent to DataFast:", result);
    return NextResponse.json(result);
    
  } catch (error) {
    console.error("Error sending goal to DataFast:", error);
    return NextResponse.json(
      { error: 'Failed to track goal' },
      { status: 500 }
    );
  }
}