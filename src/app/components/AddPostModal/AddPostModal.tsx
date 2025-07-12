'use client';

import { useAddPostModalStore } from '@/app/zustand/addPostModalStore';
import React from 'react'
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';
import { CloseBtn } from './CloseBtn';
import { AddPostForm } from './AddPostForm';

type PropsType = {};

export const AddPostModal: React.FC<PropsType> = () => {
    const { isVisible } = useAddPostModalStore();

    console.log('is visible', isVisible);

    return (
        <Modal
            className={
                `${!isVisible ? 'hidden' : ''} 
                flex flex-col sticky top-1/2 
                w-full mx-auto pt-2 px-3 pb-4 max-w-3xs md:max-w-xl
                sm:max-w-3xs h-xl bg-white rounded-md z-20 shadow-md outline-0`
            }
            isOpen={isVisible}
        >
            <div className="flex justify-end">
                <CloseBtn />
            </div>
            <AddPostForm />
        </Modal> 
    )
}
