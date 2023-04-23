"use client";

import type Butter from "buttercms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  tags: Butter.Tag<string>[];
}

export function TagsMenu({ tags }: Props) {
  const currentPath = usePathname();
  const directory = currentPath.split("/").filter(Boolean);
  const router = useRouter();
  return (
    <div className="col-span-1 lg:col-span-2">
      <ul className="menu bg-base-100 p-2 rounded-box shadow-lg hidden lg:block">
        <li className="menu-title">
          <span>Tags</span>
        </li>
        {tags.map((tag, index) => (
          <li
            key={index}
            className={
              tag.slug === directory.at(directory.length - 1) ? "bordered" : ""
            }
          >
            <Link href={`/blogs/tags/${tag.slug}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
      <div className="block lg:hidden">
        <label className="label">
          <span className="label-text">Tags</span>
        </label>
        <select
          className="select select-bordered"
          defaultValue={directory.at(directory.length - 1)}
          onChange={(e) => {
            router.push(`/blogs/tags/${e.target.value}`);
          }}
        >
          {tags.map((tag, index) => (
            <option key={index} value={tag.slug}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
