import { supabase } from "@/app/utils/supabase";
import { PostDataType, PostSendDataType } from "@/app/utils/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const json = await req.json();
    const { avatarUrl, caption, id, imageData, username } = json as unknown as PostSendDataType;

    console.log('file in api before upload', imageData.get('imageFile'))

    const imageFile = imageData.get('imageFile');

    if(imageFile) {
        const { data: fileData, error: fileError } = await supabase
        .storage
        .from('posts')
        .upload(`images/${id}.jpg`, imageFile, {
            contentType: 'image/jpeg',
        });

        console.log('file data', fileData, 'error', fileError);

        if(fileData) {
            const files: string[] = [];

            const { data: imagesData } = supabase.storage.from('posts').getPublicUrl(fileData.path);
            console.log('images data', imagesData);
            // imagesData?.map(file => {
            //     const { data: imageData } = supabase.storage
            //         .from('posts')
            //         .getPublicUrl(file.name)
            //     files.push(imageData.publicUrl);
            // })

            console.log('files', files);
            const imageUrl = files[0] || '';

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