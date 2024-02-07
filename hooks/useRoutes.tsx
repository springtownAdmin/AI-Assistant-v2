"use client";

import { useRouter } from 'next/navigation';

const useRoutes = () => {
  
    const router = useRouter();

    const goBack = () => router.back();

    const goTo = (path = '/') => router.push(path);

    return { goBack, goTo };

}

export default useRoutes