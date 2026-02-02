'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    // console.error(error)
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Por favor, tente novamente mais tarde."
    />
  );
}
