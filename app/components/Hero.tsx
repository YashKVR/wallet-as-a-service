"use client";

import React from 'react'
import { SecondaryButton } from './Button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Hero = () => {
    const session = useSession();
    const router = useRouter();

    return (<div>
        <div className='text-6xl  font-medium'>
            <span>
                The Indian Cryptocurrency
            </span>
            {" "}
            <span className='text-blue-500'>
                Revolution
            </span>
        </div>
        <p className='flex justify-center pt-4 text-2xl text-slate-500'>
            Create a frictionless wallet from India with just a Google Account.
        </p>
        <p className='flex justify-center pt-2 text-2xl text-slate-500'>
            Convert your INR into cryptocurrency.
        </p>

        <div className='pt-8 flex justify-center'>
            {session.data?.user ? <SecondaryButton
                onClick={() => {
                    router.push("/dashboard");
                }}
            >
                Go To Dashboard
            </SecondaryButton> :
                <SecondaryButton
                    onClick={() => { signIn("google") }}
                >
                    Login With Google
                </SecondaryButton>
            }

        </div>
    </div>
    )
}

export default Hero