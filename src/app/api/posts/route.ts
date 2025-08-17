import { supabase } from "@/app/utils/supabase";
import { PostDataType, PostSendDataType } from "@/app/utils/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    // const { avatarUrl, caption, id, imageData, username } = json as unknown as PostSendDataType;

    const avatarUrl = formData.get('avatarUrl') as string
    const imageFile = formData.get('imageFile')
    const id = formData.get('id') as string
    const caption = formData.get('caption') as string
    const username = formData.get('username') as string

    if(imageFile) {
        const { data: fileData, error: fileError } = await supabase
        .storage
        .from('posts')
        .upload(`images/${id}.jpg`, imageFile, {
            contentType: 'image/jpeg',
        });

        console.log('file data', fileData, 'error', fileError);

        if(fileData) {
            const { data: imageData } = supabase.storage.from('posts').getPublicUrl(fileData.path);

            const imageUrl = `${imageData.publicUrl}?token=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;

            console.log('image url', imageUrl);

            const finalData: PostDataType = {
                avatarUrl,
                caption,
                id,
                imageUrl,
                username,
                created_at: (new Date()).toISOString()
            }

            const { data: postData, error: postError } = await supabase
                .from('posts')
                .insert([finalData])
                .select()

            console.log('data', postData, 'error', postError);
            if(postData) {
                return NextResponse.json({data: postData}, {status: 201})
            } else if (postError) {
                return NextResponse.json({message: postError.message}, {status: 500})
            } else {
                //@ts-expect-error
                return NextResponse.json({error: fileError.error, message: fileError.message}, {status: fileError.statusCode})
            }
        }
    }   
}   