'use client'

import { useJsBridge } from "@/context/JSBridgeContext";

export default function Home() {
  const {userInfo} = useJsBridge()
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Welcome to Mini App</h1>
      <div className="flex flex-col items-center mt-6">
        <div>
          <div>Your info : {userInfo}</div>
          <button type="button" className="border p-2 rounded">Checkout</button>
          <button type="button" className="border p-2 rounded ml-2">Payment Status</button>
        </div>
      </div>
    </div>
  );
}
