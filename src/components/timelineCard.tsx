import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  timeline?: string;
  link: string;
  children: React.ReactNode;
}

export function TimelineCard({
  icon,
  link,
  title,
  subtitle,
  children,
  timeline,
}: Props) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-md border border-base-300 hover:border-success">
      <div className="flex items-center space-x-4 p-2 pl-5 bg-base-300">
        {icon}
        <div className="text-start">
          <p className="text-lg font-medium leading-6 md:text-xl">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full rounded-md before:absolute before:inset-0 before:content-[''] focus:no-underline hover:no-underline active:no-underline"
            >
              {title}
            </Link>
          </p>
          <p className="text-sm text-gray-500 md:text-base">{subtitle}</p>
        </div>
      </div>
      <div className="m-6 subpixel-antialiased md:text-base text-start">
        {!!timeline && (
          <>
            <p>
              <b>{timeline}</b>
            </p>
            <br />
          </>
        )}
        {children}
      </div>
    </div>
  );
}
