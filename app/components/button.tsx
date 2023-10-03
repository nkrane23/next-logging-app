"use client"

import React from "react";
import {useRouter} from "next/navigation";

type ButtonLoaderProps = {
    children: React.ReactNode
}

export default function ButtonLoader({children}: ButtonLoaderProps) {
    const router = useRouter()

    return (
        <div className="list-btn">
            {children}
            <button onClick={() => router.refresh()}>New List Please!</button>
        </div>
    )
}
