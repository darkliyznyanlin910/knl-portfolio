import Link from "next/link";

interface Props {
  image: React.ReactNode;
  title: string;
  link: string;
  children: React.ReactNode;
}

export function ProjectCard({ image, link, title, children }: Props) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-md border border-base-300 hover:border-success">
      <div className="flex items-center space-x-4 p-2 pl-5 bg-base-300">
        <p className="text-lg font-medium leading-6 text-t3-purple-200 md:text-xl">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full rounded-md before:absolute before:inset-0 before:content-[''] focus:no-underline hover:no-underline active:no-underline"
          >
            {title}
          </Link>
        </p>
      </div>
      <div className="m-6 text-sm text-t3-purple-100 subpixel-antialiased md:text-base">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">{image}</div>
          <div className="col-span-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
