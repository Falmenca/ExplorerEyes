"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{ display: "grid" }}
      className="grid min-h-screen grid-rows-[auto_1fr_auto] gap-8"
    >
      <header className="sticky top-0 z-50 bg-navbar/90 backdrop-blur">
        <NavBar />
      </header>

      <div className="relative justify-self-center">
        <Image
          src="/pictures/MainDiagram.jpg"
          alt="EE 1"
          width={700}
          height={700}
          className="object-contain"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
      <header className="mb-10 justify-center text-center text-md font-bold">
        Current updated system diagram
      </header>

      <div>
        <header className="mb-5 justify-center text-center text-md font-bold">
          ------------------------------------------
        </header>
      </div>

      {/* GPS Info */}
      {/* Module 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mx-2 md:mx-5 bg-navbar">
        <div>
          <header className="mt-3 justify-center text-center text-xl font-bold">
            Image/GPS Module
          </header>
        </div>
        <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-md rounded-lg border border-foreground/10 bg-background/80 p-6">
          <p>
            The system captures images of recognizable landmarks, buildings, and
            signs, then automatically processes those visual features against online
            map data and GPS coordinates to pinpoint your location. Additionally,
            the system also identifies Points of Interest (POIs) and nearby landmarks
            enhancing situational awareness for the user. When texts or signs are present,
            Optical Character Recognition (OCR) is applied to extract and translate sign
            information into the target language via the OpenAI API. The entire process
            is automated from image acquisition through the Pi Camera Module 2 and a Python
            script, followed by object recognition, GPS data matching and text translation.
          </p>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPSDiagram.jpg"
            alt="GPS1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div>
          <header className="justify-center text-center text-xl font-bold">
            Object/Place of Interest (POI) Detection and Description
          </header>
        </div>

        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS1.jpg"
            alt="GPS1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="justify-center text-center text-xs italic">
            Figure 1: Location inference (Suwon, South Korea) with Point of Interest detection, nearby landmarks, and texts/signs translation.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS2.jpg"
            alt="GPS2"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="justify-center text-center text-xs italic">
            Figure 2: Location inference (Kyoto, Japan) with Point of Interest detection, nearby landmarks, and texts/signs translation.
          </header>
        </div>
      </div>

      <div>
        <header className="mb-10 justify-center text-center text-md font-bold">
          ------------------------------------------
        </header>
      </div>

      {/* Sensor Data */}
      {/* Module 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mx-2 md:mx-5 bg-background">
        <div>
          <header className="mt-3 justify-center text-center text-xl font-bold">
            Sensor Data
          </header>
          <header className="mb-6 justify-center text-center text-xl font-bold">
            UV, Motion, etc.
          </header>
        </div>
        <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-md rounded-lg border border-foreground/10 bg-background/80 shadow-[#313aaa] shadow-sm p-6">
          <p>
            The sensor’s module is using the Arduino (magnetometer, thermometer, gyroscope)
            and Adafruit (Figure 5)  to convert environmental information and output
            recommendations to the user on recommended sunscreen that should be applied.
            The Arduino 33 BLE Rev2 that is in use operates on a 5V source, but has a buck
            converter that can handle inputs of up to 22V/1A. Additionally, the Adafruit UV
            sensor is powered by the GPIO PinA0 on the Arduino that has an output voltage of
            3.3V. As seen in the above flow chart, the sensors are to send that information
            elsewhere to get processed. Data from Arduino and Adafruit sensors will be demonstrated
            on the minidisplay in realtime. A video demonstration can be found ‎

            <Link href="https://www.youtube.com/watch?v=5DX9hcn0gJo" className="text-blue-500 underline">
              here
            </Link>

            ‎ of the sensor
            module sending real time data to the minidisplay. The display is the module that will
            be used in the projection system which is what the user will see on their lenses.
          </p>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS1.jpg"
            alt="GPS1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[4/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS2.jpg"
            alt="GPS2"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>

      <div>
        <header className="mb-10 justify-center text-center text-md font-bold">
          ------------------------------------------
        </header>
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
