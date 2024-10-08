const bcrypt = require("bcrypt");
import User from "@/db/models/user";
import { signToken } from "@/db/utils/signToken";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new Error(`User ${email} not found`);

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {

      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }

    user.token = signToken(user.id);
    
    await user.save();
    
    const response = NextResponse.json({ message: `User ${user.name} logged in successfully`, response: "OK" });
    response.cookies.set("token", user.token, {
      maxAge: 3600,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error) {

    console.log(" Error in signin", error);

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
};
