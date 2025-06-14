import { SignIn } from '@/app/components/SignIn/SignIn'
import { authOptions } from '@/app/lib/nextAuth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export default async function SignInPage() {

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<SignIn />
		</div>
	)
}
