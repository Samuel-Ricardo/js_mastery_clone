import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    );
}