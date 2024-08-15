const bcrypt = require("bcrypt");
import User, { IUser } from "@/db/models/user";
import { signToken } from "@/db/utils/signToken";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<IUser | NextResponse> => {
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new Error("Something went wrong");

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }

    user.token = signToken(user.id);

    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    console.log(" Error in signin", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
