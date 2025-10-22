"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Page() {
    return (
        <div
            style={{ display: "grid" }}
            className="grid min-h-screen grid-rows-[auto_1fr_auto] gap-8"
        >
            <header className="sticky top-0 z-50 bg-navbar/90 backdrop-blur">
                <NavBar />
            </header>

            {/* Row 1 — Card LEFT, Image RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mx-4 md:mx-10">
                <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-sm rounded-lg border border-foreground/10 bg-background/80 shadow-[#313aaa] shadow-sm p-6">
                    <h1 className="font-bold mb-3">What is ExplorerEyes?</h1>
                    <p>
                        The Explorer glasses are smart glasses designed for consumers who
                        value their data privacy, want to travel without having a fear of
                        being lost abroad, or having their phone stolen while trying to
                        translate something. Using on board sensors and a camera, our
                        product will display valuable data to the user so they are able to
                        make the most informed decisions. Our on-board camera acts as your
                        personal translator, instantly displaying the foreign text and
                        providing audible translation. Beyond language, the glasses use a
                        suite of sensors to keep you informed. They’ll tell you your
                        direction of travel and keep you updated on the local UV Index,
                        relative humidity, and temperature. ExplorerEyes empowers you to
                        travel confidently, make informed decisions, and fully immerse
                        yourself in your destination.
                    </p>
                </div>
                <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-end aspect-[4/3] md:aspect-square p-2 bg-background/80 rounded-lg">
                    <Image
                        src="/pictures/about.jpg"
                        alt="EE 1"
                        fill
                        className="rounded-lg object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                    />
                </div>
            </div>

            {/* Row 2 — Image LEFT, Card RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mx-4 md:mx-10">
                <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1 p-2 bg-background/80 rounded-lg">
                    <Image
                        src="/pictures/travel-stats.jpg"
                        alt="EE 2"
                        fill
                        className="rounded-lg object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
                <div className="justify-self-center md:justify-self-end w-full max-w-[680px] md:max-w-[760px] font-mono text-sm rounded-lg border border-foreground/10 bg-background/80 shadow-[#313aaa] shadow-sm p-6 md:order-2">
                    <h1 className="font-bold mb-3">
                        What problem does this project seek to solve?
                    </h1>
                    <p>
                        Our project aims to improve travel by centralizing important
                        information (stored locally) someone may need to access. By
                        projecting data collected by on-board sensors onto smart glasses,
                        travelers will reduce the amount of time they will have to take out
                        their mobile devices, which will reduce the risk of theft.
                        Additionally, features like real-time translation and navigation
                        data will help calm nerves about getting lost, allowing people to
                        feel more comfortable and enjoy their surroundings. By providing
                        this information hands-free, we can make the travel experience more
                        secure, convenient, and immersive.
                    </p>
                </div>
            </div>

            {/* Row 3 — Card LEFT, Image RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mx-4 md:mx-10">
                <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-sm rounded-lg border border-foreground/10 bg-background/80 shadow-[#313aaa] shadow-sm p-6">
                    <h1 className="font-bold mb-3">
                        What are some solutions found in the current market?
                    </h1>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="ml-10">
                            Meta’s smart glasses which offer translation and AR features but
                            are tied to social media which raises privacy concerns for some
                            users.
                        </li>
                        <li className="ml-10">
                            Even Realities' Even G1, which provides AR navigation and
                            translation features but requires a subscription for full
                            functionality.
                        </li>
                        <li className="ml-10">
                            Bose Frames which focus on audio experiences but lack
                            comprehensive AR features and real-time data integration.
                        </li>
                    </ul>
                    <p className="mt-3">
                        ExplorerEyes uses a web app alongside on-device translation,
                        navigation, and environmental sensing giving users flexibility while
                        keeping their data private. This approach provides a more
                        comprehensive and secure travel tool compared to existing smart
                        glasses.
                    </p>
                </div>
                <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-end aspect-[4/3] md:aspect-square p-2 bg-background/80 rounded-lg">
                    <Image
                        src="/pictures/even-g1.jpg"
                        alt="EE 3"
                        fill
                        className="rounded-lg object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
