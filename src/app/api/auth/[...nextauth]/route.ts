import { NextRequest, NextResponse } from 'next/server';
import { handlers } from '@/auth';

// Statically export the handlers
export const GET = async (req: NextRequest) => {
  // Dynamically determine what to do for a GET request
  return handlers.GET ? handlers.GET(req) : NextResponse.json({ error: 'GET handler not implemented' });
};

export const POST = async (req: NextRequest) => {
  // Dynamically determine what to do for a POST request
  return handlers.POST ? handlers.POST(req) : NextResponse.json({ error: 'POST handler not implemented' });
};
