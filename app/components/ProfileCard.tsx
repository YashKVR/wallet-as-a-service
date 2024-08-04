"use client";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PrimaryButton } from './Button';


export const ProfileCard = ({ publicKey }: { publicKey: string }) => {
    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") {
        //ToDo: replace with a loading skeleton
        return <div>
            Loading...
        </div>
    }

    if (!session.data?.user) {
        router.push("/")
        return null;
    }

    return (
        <div className='pt-8 flex justify-center'>
            <div className='max-w-4xl bg-white rounded shadow w-full p-12'>
                <Greeting image={session.data?.user?.image ?? ""} name={session.data?.user?.name ?? ""} />
                <Assets publicKey={publicKey} />
            </div>
        </div>
    )
}

function Assets({ publicKey }: { publicKey: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {

        if (copied) {
            let timeout = setTimeout(() => {
                setCopied(false)
            }, 3000)
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [copied])
    return <div className='text-slate-500 mt-4'>
        Account Assets
        <br />
        <div className='flex justify-between'>
            <div>

            </div>
            <div>
                <PrimaryButton onClick={() => {
                    console.log("Public key => ", publicKey);
                    navigator.clipboard.writeText(publicKey);
                    setCopied(true);
                }}>{copied ? "Copied" : "Your Wallet Address"}</PrimaryButton>
            </div>

        </div>
    </div>
}

function Greeting({ image, name }: { image: string, name: string }) {
    return <div className='flex'>
        <img src={image} alt={name} className='rounded-full w-16 h-16 mr-4' />
        <div className='text-xl font-semibold flex flex-col justify-center'>
            Welcome Back, {name}
        </div>
    </div>
}