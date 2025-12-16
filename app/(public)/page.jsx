'use client'
import BestSelling from "@/components/BestSellersSelection";
import Hero from "@/components/HeroSection";
import Newsletter from "@/components/NewsletterSignup";
import OurSpecs from "@/components/PlatformHighlights";
import LatestProducts from "@/components/NewArrivalsSection";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestProducts />
            <BestSelling />
            <OurSpecs />
            <Newsletter />
        </div>
    );
}
