'use client'

import { JsBridgeProvider, useJsBridge } from '@/context/JSBridgeContext'
import React, { useEffect } from 'react'

const JsBridgeLayout: React.FC<{ children: React.ReactNode, token: string }> = ({ children, token }) => {
    return (
        <div>
            <JsBridgeProvider>
                <InitailCallNativeApp token={token}>
                    {children}
                </InitailCallNativeApp>
            </JsBridgeProvider>
        </div>
    )
}


const InitailCallNativeApp: React.FC<{ children: React.ReactNode, token: string }> = ({ children, token }) => {
    const { invoke } = useJsBridge();
    useEffect(() => {
        invoke('setTitle', 'Mini APP');
        invoke('getUserInfo', JSON.stringify({'mini-app-access-token': token}))
    }, []);
    return <>{children}</>
}

export default JsBridgeLayout