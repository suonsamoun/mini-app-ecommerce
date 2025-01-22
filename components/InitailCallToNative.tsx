'use client'

import { useJsBridge } from '../context/JSBridgeContext'
import React, { useEffect, useState } from 'react'


const InitailCallToNative = ({ token, children }: { token: string, children: React.ReactNode }) => {
    const {invoke, userInfo} = useJsBridge();
    useEffect(() => {
        invoke('setTitle', 'Mini App')
        invoke('getUserInfo', JSON.stringify({'mini-app-access-token': token}))
    }, [])
    return <>
        <div>Test</div>
        {children}
        <div>
            {userInfo}
        </div>
    </>
}

export default InitailCallToNative