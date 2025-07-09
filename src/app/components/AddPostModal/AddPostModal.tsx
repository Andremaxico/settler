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
            className={`${!isVisible ? 'hidden' : ''} flex flex-col sticky top-1/2 mx-auto p-2 max-w-12 sm:max-w-3xs h-xl bg-white rounded-md z-20 shadow-md`}
            isOpen={isVisible}
        >
            <div className="flex justify-self-end">
                <CloseBtn />
            </div>
            <AddPostForm />
        </Modal> 
    )
}
