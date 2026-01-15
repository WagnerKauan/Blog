import clsx from 'clsx';

type SpinLoaderProps = {
  containerClassName?: string;
};

export function SpinLoader({ containerClassName = '' }: SpinLoaderProps) {
  return (
    <div
      className={clsx('flex items-center justify-center', containerClassName)}
    >
      <div
        className={clsx(
          'h-10 w-10',
          'border-5 border-t-transparent border-slate-900 rounded-full animate-spin'
        )}
      ></div>
    </div>
  );
}
