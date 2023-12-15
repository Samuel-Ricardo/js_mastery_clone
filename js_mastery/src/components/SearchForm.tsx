"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery } from "../../sanity/utils";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams?.toString() || "",
          key: "query ",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams?.toString() || "",
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5"></form>
  );
};
