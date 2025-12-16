'use client'
import Banner from "@/components/PromoBanner";
import Navbar from "@/components/MainHeader";
import Footer from "@/components/AppFooter";

export default function PublicLayout({ children }) {

    return (
        <>
            <Banner />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
