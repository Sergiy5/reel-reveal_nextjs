import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { mail } = await req.json();

    // console.log("mail_>>>>>>>>>>>>>>>>>>>", mail);
   
    const URL = process.env.SAVE_MAIL_USER_URL;
    try {
        if (!mail) {
            return NextResponse.json({ message: "Missing email. Email is required" }, { status: 404 });
        }
        const response = await fetch(`${URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(
            mail,
          ).toString(),
        });

        // console.log("RESPONSE_>>>>>>>>>>>>>>>>>>", response);
        
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log(error);
    }
};