import { NextResponse } from "next/server";
import { registerUser } from "@/db/services/registerUser";
import { userRolesEnum } from "@/db/roles/userRoles";
import User from "@/db/models/user";



export const POST = async (req: Request): Promise<NextResponse> => {
  
  if (!req.body) {
    return new NextResponse(
      JSON.stringify({ error: "Request body is missing" })
    );
  }
  const { userData } = await req.json();

  const newUserData = {
    ...userData,
    role: userRolesEnum.USER,
  };
  const newUser = await User.create(newUserData);

  newUser.password = undefined;

  return new NextResponse(
    JSON.stringify({
      user: newUser,
    })
  );
    // const {user} = await registerUser(userData);
};
