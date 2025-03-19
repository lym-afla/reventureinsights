import { NextRequest, NextResponse } from "next/server";

// Define a proper interface for company data
interface CompanyProfile {
  companyName: string;
  website?: string;
  foundedYear?: string;
  sector: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  fundingStage?: string;
  teamSize?: string;
}

// This would be replaced with actual database connection code
// using your preferred solution (Supabase, MongoDB, etc.)
const saveCompanyProfileToDatabase = async (companyData: CompanyProfile) => {
  // In a real implementation, this would save to a database
  console.log("Saving company profile:", companyData);
  // For now, just simulate a database save
  return { success: true, id: Date.now() };
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as CompanyProfile;
    
    // Validate required fields
    const requiredFields = ['companyName', 'sector', 'description', 'contactName', 'contactEmail'];
    
    for (const field of requiredFields) {
      if (!data[field as keyof CompanyProfile]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }
    
    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(data.contactEmail)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    
    // Save to database (simulated for now)
    const result = await saveCompanyProfileToDatabase(data);
    
    // In a production app, you'd use:
    // 1. An actual database connection (Supabase, MongoDB, etc.)
    // 2. Possibly an email service to send confirmation
    // 3. Better error handling and security measures
    // 4. File uploads for company logos, documents, etc.

    return NextResponse.json(
      { 
        message: "Company profile submitted successfully", 
        id: result.id 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing company profile form:", error);
    return NextResponse.json(
      { error: "Failed to process company profile" },
      { status: 500 }
    );
  }
} 