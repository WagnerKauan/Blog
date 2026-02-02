import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-sm text-slate-600 font-bold"
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
