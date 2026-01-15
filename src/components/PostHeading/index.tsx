import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {

  const headingClassMap = {
    h1: 'text-2xl/tight sm:text-4xl',
    h2: 'text-2xl/tight text-red-400 sm:text-4xl',
  };

  const communClass = 'font-extrabold'

  return (
    <Tag className={clsx(headingClassMap[Tag], communClass)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
