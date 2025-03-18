import { NextRequest, NextResponse } from "next/server";

// This would be replaced with actual database connection code
// using your preferred solution (Supabase, MongoDB, etc.)
const saveContactToDatabase = async (email: string) => {
  // In a real implementation, this would save to a database
  console.log(`Saving contact email: ${email}`);
  // For now, just simulate a database save
  return { success: true, id: Date.now() };
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate email
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    
    // Save to database (simulated for now)
    const result = await saveContactToDatabase(data.email);
    
    // In a production app, you'd use:
    // 1. An actual database connection (Supabase, MongoDB, etc.)
    // 2. Possibly an email service to send confirmation
    // 3. Better error handling and security measures

    return NextResponse.json(
      { 
        message: "Contact submitted successfully", 
        id: result.id 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
} 