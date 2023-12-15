"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { formUrlQuery } from "../../sanity/utils";

const links = ["all", "Next 13", "frontend", "backend", "fullstack"];

export const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = useCallback(
    (link: string) => {
      let newUrl = "";

      if (active === link) {
        setActive("");

        newUrl = formUrlQuery({
          params: searchParams?.toString() || "",
          keysToRemove: ["category"],
        });
      } else {
        setActive(link);

        newUrl = formUrlQuery({
          params: searchParams?.toString() || "",
          key: "category",
          value: link.toLowerCase(),
        });
      }

      router.push(newUrl, { scroll: false });
    },
    [active, searchParams, router]
  );

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <li key={link}>
          <button
            onClick={() => handleFilter(link)}
            className={`${
              active === link ?? "gradient_blue-purple"
            } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          >
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
};
