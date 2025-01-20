'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SignInButton = () => {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = React.useState(false);

  const onSignIn = async () => {
    setIsLoading(true);

    await signIn('credentials', {
      callbackUrl: searchParams?.get('from') ?? '/',
    });

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <button onClick={onSignIn} disabled={isLoading} className="bg-[#ff9f29] text-white font-medium px-4 py-2 rounded">
        Sign In Now {isLoading && '...'}
      </button>
    </div>
  );
};

export default SignInButton;
