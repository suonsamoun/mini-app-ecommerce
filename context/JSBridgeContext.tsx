import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface JSBridgeContextProp {
    userinfo: any
    invoke: (method: string, params: any) => void
    bridgeResponse: (method: string, params: any) => void
}

const JSBridgeContext = createContext<JSBridgeContextProp | undefined>(undefined)

export const JsBridgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userinfo, setUserInfo] = useState<any>(undefined);

    const invoke = (method: string, params: string) => {
        if (typeof window !== "undefined") {
            // @ts-ignore
            if (window.webkit && window.webkit.messageHandlers) {
                // @ts-ignore
                window.webkit.messageHandlers[method].postMessage(params);
            }
            // @ts-ignore
            else if (window?.tmJSBridge && typeof window.tmJSBridge[method] === 'function') {
                // @ts-ignore
                const result = window.tmJSBridge[method](params);
                setUserInfo(result);
            }
        }
        return null;
    }
    const bridgeResponse = (method: string, params: string) => {
        console.log('work');
        setUserInfo(params);
    }
    useEffect(() => {
        // @ts-ignore
        window.handleNativeResponse = bridgeResponse;
        
        return () => {
            // @ts-ignore
            delete window.handleNativeResponse;
        };
    }, []);

    return (<JSBridgeContext value={{ invoke, bridgeResponse, userinfo }}>
        {children}
    </JSBridgeContext>)
}

export const useJsBridge = () => {
    const context = useContext(JSBridgeContext)
    if (!context)
        throw new Error('useJsBridge must be used within a JsBridgeProvider')

    return context;
}