"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProPlayers } from "@/components/ProPlayers";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ProPlayers />
            <Features />
            <Community />
        </>
    );
}
