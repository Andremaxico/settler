'usee client'

import { CameraIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';


type PropsType = {};

export const AddPostForm: React.FC<PropsType> = () => {
    const handleFileInputClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        
    }

    return (
        <form className='flex flex-col items-center outline-0'>
            <input
                type='file'
                id='postImage'
                className='hidden' 
            />
            <label 
                htmlFor='postImage'
                onClick={handleFileInputClick}
                className='group w-12 h-12 md:w-16 md:h-16 mb-2 flex items-center justify-center bg-orange-100 rounded-full cursor-pointer'
            >
                <CameraIcon className='group-hover:translate-y-1 size-5 md:size-7 text-orange-300 duration-100' />
            </label>
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
