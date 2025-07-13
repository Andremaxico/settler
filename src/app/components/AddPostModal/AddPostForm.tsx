'usee client'

import { CameraIcon, TrashIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';


type PropsType = {};

export const AddPostForm: React.FC<PropsType> = () => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currFiles = e.currentTarget.files;

        if(currFiles && currFiles[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(currFiles[0]);

            reader.onload = (e: ProgressEvent<FileReader>) => {
                if(e.target && e.target.result) {
                    setSelectedFile(e.target.result.toString())
                }
            }
        }
    }

    const deleteFile = () => {
        setSelectedFile(null);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
    }

    return (
        <form className='flex flex-col items-center outline-0' onSubmit={handleSubmit}>
            <input
                type='file'
                id='postImage'
                className='hidden' 
                onChange={handleChange}
            />
            {selectedFile ? 
                <div className="relative flex flex-col justify-end mb-2 group">
                    <Image 
                        width={500}
                        height={500}
                        src={selectedFile}
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
                className='
                    p-2 text-sm md:text-md mb-4
                    outline-0 cursor-pointer duration-100
                    after:content-[""] after:opacity-0 after:w-full after:absolute after:bottom-[-4px] after:left-0
                    after:bg-black after:duration-75 hover:after:opacity-100 
                '
            />
            <button className='px-2 py-1 text-white text-sm bg-orange-400 disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed hover:shadow-md rounded-sm duration-100'>
                Опублікувати
            </button>
        </form>
    )
}
