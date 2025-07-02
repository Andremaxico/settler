'use client'

import React from 'react'
import { RecoilRoot } from 'recoil';

type PropsType = {
    children: React.ReactNode,
};

export const RecoilProvider: React.FC<PropsType> = ({children}) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}
