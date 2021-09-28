import { useRouter } from "next/router";
import { Nav } from "./Nav";

export const siteTitle = "Rhyme Generator";

export default function Container({ children, main }) {
    const router = useRouter();

    return (
        <>
            <Nav />
            {children}
        </>
    );
}