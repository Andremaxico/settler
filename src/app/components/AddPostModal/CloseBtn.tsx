'use client'


import { useAddPostModalStore } from '@/app/zustand/addPostModalStore';
import React from 'react';

type PropsType = {};

export const CloseBtn: React.FC<PropsType> = () => {
    const { hide } = useAddPostModalStore();

    const handleClick = () => {
        hide();
    }

    return (
        <button onClick={handleClick}>
            x
        </button>
    )
}
