import { NextRequest } from "next/server";
import { handlePost } from "./handlers/post";
import { handleGet } from "./handlers/get";
import { handleDelete } from "./handlers/delete";

export async function POST(req: NextRequest) {
  return handlePost(req);
}

export async function GET(req: NextRequest) {
  return handleGet(req);
}

export async function DELETE(req: NextRequest) {
  return handleDelete(req);
}
