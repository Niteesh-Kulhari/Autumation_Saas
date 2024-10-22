import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        console.log("here")
        const body = await req.json();
        const { id, email_addresses, first_name, image_url } = body?.data;

        const email = email_addresses[0]?.email_address; // Correct key and access

        console.log(body);

        await db.user.upsert({
            where: { clerkId: id },
            update: {
                email,
                name: first_name,
                profileImage: image_url,
            },
            create: {
                clerkId: id,
                email,
                name: first_name || "",
                profileImage: image_url || "",
            },
        });

        return new NextResponse("User updated in database successfully", { status: 200 });

    } catch (error) {
        console.error("Error in updating user:", error);
        return NextResponse.json({
            message: "Error in updating the user",
        }, { status: 403 });
    }
}
