import { PostSendDataType } from "@/app/components/AddPostModal/AddPostForm";
import { supabase } from "@/app/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = (await req.json()) as unknown as PostSendDataType;

    console.log('file inout', data.imageUrl);

    const { data: fileData, error: fileError } = await supabase.storage.from('posts').upload(data.id, data.imageUrl);
    
    console.log('file data', fileData);

    if(fileData) {
        return NextResponse.json({message: 'all is good'}, {status: 201})
    } else {
        return NextResponse.json({message: 'some error'}, {status: 500})
    }
    // const { data: postData, error: postError } = await supabase
    //     .from('posts')
    //     .insert([
    //         { some_column: 'someValue', other_column: 'otherValue' },
    //     ])
    //     .select()
    
    // console.log('data');
}   