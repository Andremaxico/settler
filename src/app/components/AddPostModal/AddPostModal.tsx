'use client';

import { useAddPostModalStore } from '@/app/zustand/addPostModalStore';
import React from 'react'
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';

type PropsType = {};

export const AddPostModal: React.FC<PropsType> = () => {
    const { isVisible } = useAddPostModalStore();

    console.log('is visible', isVisible);

    return (
        <Modal
            className={`${!isVisible ? 'hidden' : ''} flex sticky top-1/2 left-1/2 translate-x-[-50%] container md:max-w-xl h-xl bg-white rounded-md z-20`}
            isOpen={isVisible}
        >
            add post modal
        </Modal> 
    )
}
