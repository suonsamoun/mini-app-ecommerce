import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface JSBridgeContextProp {
    userInfo?: string
    invoke: (method: string, params: any) => void
    bridgeResponse: (method: string, params: any) => void
}

const JSBridgeContext = createContext<JSBridgeContextProp | undefined>(undefined)

export const JsBridgeProvider: React.FC<{ children: ReactNode }> = ({ children}) => {
    const [userInfo, setUserInfo] = useState(undefined);
    

    const invoke = (method: string, params: any) => {
        if (typeof window !== 'undefined') {
            if (window.webkit && window.webkit.messageHandlers) {
                window.webkit.messageHandlers[method].postMessage(params);
            }else if (window?.tmJSBridge && typeof window.tmJSBridge[method] === 'function') {
                const result = window.tmJSBridge[method](params);
                bridgeResponse(method, result);
            }
        }   
    }
    
    const bridgeResponse = (method: string, params: any) => {
        if (method == 'getUserInfo') {
            setUserInfo(params);
        }
    }

    useEffect(() => {
        window.handleNativeResponse = bridgeResponse;
        return () => {
            delete window.handleNativeResponse;
        };
    }, [])

    return <JSBridgeContext value={{userInfo, invoke, bridgeResponse}}>
        {children}
    </JSBridgeContext>
}

export const useJsBridge = () => {
    const context = useContext(JSBridgeContext)
    if (!context)
        throw new Error('useJsBridge must be used within a JsBridgeProvider')

    return context;
}