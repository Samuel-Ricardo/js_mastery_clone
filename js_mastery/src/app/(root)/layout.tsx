import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import Loading from "./(home)/loading";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            <Suspense fallback={<Loading/>}/>
            {children}
            <Footer/>
        </>
    );
}