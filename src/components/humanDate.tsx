import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export default function HumanDate({ dateString }: Props) {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), "HH:mm, MMM	d, yyyy")}
    </time>
  );
}
