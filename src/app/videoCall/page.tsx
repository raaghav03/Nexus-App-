"use client"
import dynamic from "next/dynamic";

const DynamicVideoUI = dynamic(() => import("./videoui"), { ssr: false })
export default function VideoCall() {
    return (<><h1>Video Call</h1><DynamicVideoUI /></>)
}

