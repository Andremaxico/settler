'use client';

import { useAddPostModalStore } from '@/app/zustand/addPostModalStore';
import React from 'react'
import { useRecoilState } from 'recoil';

type PropsType = {};

export const AddPostModal: React.FC<PropsType> = () => {
    const { isVisible } = useAddPostModalStore();

    console.log('is visible', isVisible);

    return (
        <div className={`${!isVisible ? 'hidden' : ''} flex sticky top-1/2 left-1/2 bg-amber-700 w-xl h-xl z-20`}>
            add post modal
        </div>
    )
}
