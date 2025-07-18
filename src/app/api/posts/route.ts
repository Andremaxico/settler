import { PostSendDataType } from "@/app/components/AddPostModal/AddPostForm";
import { NextRequest } from "next/server";

export const POST = (req: NextRequest) => {
    const body = req.body as unknown as PostSendDataType;

    
}   