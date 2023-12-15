"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { formUrlQuery } from "../../sanity/utils";

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

  return <div>Filters</div>;
};
