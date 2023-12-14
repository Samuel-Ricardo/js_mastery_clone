'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import {} from '@sanity/util'

export const SearchForm = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [search, setSearch] =useState("");

    useEffect(() => {
        
        const delayDebounceFn = setTimeout(() => {
            
            let newUrl = '';

            if (search) {
                newUrl = formUrlQuery
            }

        }, 300)

    })

    return (
        <form>

        </form>
    )
}