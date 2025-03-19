import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate email format
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would:
    // 1. Add this to a database or mailing list
    // 2. Send a notification email
    // 3. Maybe integrate with a CRM like HubSpot, Mailchimp, etc.
    
    console.log("Access request received:", data.email);
    
    // Simulate a successful submission
    return NextResponse.json(
      { message: "Thank you for your interest! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
} 