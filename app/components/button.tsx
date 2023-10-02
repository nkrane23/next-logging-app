"use client"

import React from "react";
import {useRouter} from "next/navigation";

export default function ButtonLoader() {
    const router = useRouter()

    const handleClick = () => {
        router.refresh()
    }

    return (
        <div className="list-btn">
            <button onClick={handleClick}>New List Please!</button>
        </div>
    )
}
