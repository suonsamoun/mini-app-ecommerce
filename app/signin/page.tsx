import SignInButton from '@/components/SignInButton';
import { Suspense } from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Unauthorized</h1>
        <p className="text-gray-600 mb-6">
          You must sign in to access this page. Please click the button below to continue.
        </p>
        <Suspense fallback={<div className="animate-pulse text-gray-400">Loading...</div>}>
          <SignInButton />
        </Suspense>
      </div>
    </div>
  );
};

export default SignIn;
