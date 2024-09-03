import { NextResponse } from "next/server";
// export { GET, POST } from '@/auth';

export async function GET() {

    return NextResponse.json({ ok: true });
}