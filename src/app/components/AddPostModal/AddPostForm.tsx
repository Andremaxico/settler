'use client'

import { CameraIcon, TrashIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { v4 } from 'uuid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { axiosInstance } from '@/app/utils/axios/axiosInstance';
import { useAddPostModalStore } from '@/app/utils/zustand/addPostModalStore';
import { PostDataType, PostSendDataType } from '@/app/utils/types';

type PropsType = {};

export const AddPostForm: React.FC<PropsType> = () => {
    //TODO: add validation

    const { hide } = useAddPostModalStore();
    const { data: session } = useSession();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
    const [caption, setCaption] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    console.log(session?.user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currFiles = e.currentTarget.files;

        if(currFiles && currFiles[0]) {
            // const reader = new FileReader();
            // reader.readAsDataURL(currFiles[0]);

            // reader.onload = (e: ProgressEvent<FileReader>) => {
            //     if(e.target && e.target.result) {
            //         (e.target.result.toString())
            //     }
            // }
            console.log('selected file in form', currFiles[0]);
            setSelectedFilePath(URL.createObjectURL(currFiles[0]));
            setSelectedFile(currFiles[0]);
        }
    }

    const deleteFile = () => {
        setSelectedFile(null);
    }

    const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaption(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('selected file', selectedFile, 'user name', session?.user?.name, 'base url', process.env.NEXT_PUBLIC_BASE_URL)
        e.preventDefault();

        if(selectedFile && session?.user?.name) {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('imageFile', selectedFile, selectedFile.name);

            const sendData: PostSendDataType = {
                avatarUrl: session?.user?.image || null,
                caption,
                id: v4(),
                imageData: formData,
                username: session.user.name,
            }

            const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, JSON.stringify(sendData));

            if(res.status === 201) {
                //TODO: show success message
            } else {
                //TODO: show error message
            }

            hide();
            setIsLoading(false);
        }
    }

    return (
        <form className='flex flex-col items-center outline-0' onSubmit={handleSubmit}>
            <input
                type='file'
                id='postImage'
                className='hidden' 
                onChange={handleChange}
                required
            />
            {selectedFilePath ? 
                <div className="relative flex flex-col justify-end mb-2 group">
                    <Image 
                        width={500}
                        height={500}
                        src={selectedFilePath}
                        alt='post image'
                        className='max-w-full max-h-100 object-cover'
                    />
                    <button 
                        className='
                            absolute right-1 bottom-1 w-8 h-8 
                            flex items-center justify-center p-2 
                            bg-gray-200 rounded-md hover:shadow-md duration-75 cursor-pointer 
                            md:hidden md:opacity-0 group-hover:flex group-hover:opacity-100
                        '
                        onClick={deleteFile}
                    >
                        <TrashIcon className='text-gray-500 size-5' />
                    </button>
                </div>
            :
                <label 
                    htmlFor='postImage'
                    className='group w-12 h-12 md:w-16 md:h-16 mb-2 flex items-center justify-center bg-orange-100 rounded-full cursor-pointer'
                >
                    <CameraIcon className='group-hover:translate-y-1 size-5 md:size-7 text-orange-300 duration-100' />
                </label>   
            }
            <input 
                type='text'
                placeholder='Введіть ваш опис тут'
                value={caption}
                onChange={handleCaptionChange}
                className='
                    p-2 text-sm md:text-md mb-4
                    outline-0 cursor-pointer duration-100
                    after:content-[""] after:opacity-0 after:w-full after:absolute after:bottom-[-4px] after:left-0
                    after:bg-black after:duration-75 hover:after:opacity-100 
                '
            />
            {isLoading ?
                // TODO: add loader
                <p>loading...</p>
            :
                <button
                    className='
                        px-2 py-1 
                        text-white text-sm bg-orange-400 
                        disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed
                        hover:shadow-md rounded-sm duration-100
                    '
                    disabled={selectedFile === null}
                >
                    Опублікувати
                </button>   
            }
        </form>
    )
}
