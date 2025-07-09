import { CameraIcon } from '@heroicons/react/solid';
import React from 'react';


type PropsType = {};

export const AddPostForm: React.FC<PropsType> = () => {
    return (
        <form>
            <input
                type='image'
                id='postImage'
                className='hidden' 
            />
            <label 
                htmlFor='postImage'
                className='w-12 h-12 rounded-full ип-'
            >
                <CameraIcon className='size-5' />
            </label>
            <input 
                placeholder='Введіть ваш опис тут'
                className='p-2 border-b-1 border-b-black hover:pb-1 active:border-b-blue-600'
            />
        </form>
    )
}
