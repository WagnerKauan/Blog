import ErrorMessage from '@/components/ErrorMessage';

export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle="404"
      content="Erro 404 - A página que vocé procurou não foi encontrada."
    />
  );
}
