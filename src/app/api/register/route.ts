import { NextResponse } from "next/server";
import { registerUser } from "@/db/services/registerUser";
import { userRolesEnum } from "@/db/roles/userRoles";
import User from "@/db/models/user";



export const POST = async (req: Request): Promise<NextResponse> => {
  if (!req.body) {
    console.log("ERROR_IN_ROUTE_REQUEST_BODY____________________", req.body);
    return new NextResponse(
      JSON.stringify({ error: "Request body is missing" })
    );
  }
  const { userData } = await req.json();

  console.log("userData_IN_ROUTE_REQUEST____________________", userData);

  const newUserData = {
    ...userData,
    role: userRolesEnum.USER,
  };
  const newUser = await User.create(newUserData);

  console.log("ROUTE_REGISTER", newUser);
  newUser.password = undefined;

  return new NextResponse(
    JSON.stringify({
      email: newUser.email,
    })
  );
  //   const {user} = await registerUser(userData);
};
