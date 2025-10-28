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
          src="/pictures/Misc/MainDiagram.jpg"
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

      {/* Camera Text Detection with Audio I/O */}
      {/* Module 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mx-2 md:mx-5 bg-navbar">
        <div>
          <header className="mt-3 justify-center text-center text-xl font-bold">
            Camera Text Detection with Audio I/O Module
          </header>
        </div>
        <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-md rounded-lg border border-foreground/10 bg-background/80 p-6">
          <p>
            The RPi is powered by a 5V at 2.5A supply through its dedicated micro-USB port. The camera
            and USB hub with the audio output are powered by the RPi itself through its respective ports.
            The camera was able to provide a clear, focused picture without adjustments in the SSH command
            from about a maximum of 3 feet from the sign, assuming a minimum font size of 32pt.
          </p>
          <p>
            Lighting plays an important role in Tesseract’s accuracy, where natural sunlight gave the best
            results, even without applying preprocessing. At night, with a lamp light source overhead, Tesseract
            was still able to give somewhat accurate results, with a few letters being off. The angle at which
            the picture is taken also affects the accuracy, where there is about a 15° leeway before the readings
            start to fall apart. The best results were when the camera was pointed straight at the sign, as shown
            in the photos below.
          </p>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/TextDetectionDiagram.jpg"
            alt="Text Detection Diagram"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div>
          <header className="justify-center text-left text-xl font-bold ml-3">
            The RPi can successfully take a picture, apply preprocessing effects to it as needed, 
            use Google’s Tesseract OCR to scan and extract the text from the image, have that text 
            sent to the translation module, then, at the end, have it read out to the user via
            text-to-speech. The audio module will be combined with the camera module until we can
            implement audio input through a microphone, and have the user be able to switch between
            using the microphone or camera, which at that point will be its module.
          </header>
        </div>

        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/Text7.jpg"
            alt="Text Detection"
            fill
            className="rounded-lg object-contain justify-center "
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 7: Camera pointed head-on, reading a German sign.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/Text8.jpg"
            alt="Text Detection"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 8: Camera looking at the sign at a slight vertical angle, reading a Spanish sign.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/Text9.jpg"
            alt="Text Detection"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 9: Camera looking at a German sign with underlined text, image has gone through preprocessing, 99% accuracy with the underlined ‘T’ being read wrong.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/Text10.jpg"
            alt="Text Detection"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 10: Camera reading an English sign at a ~25° angle, accuracy starts to drop.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-bottom md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Camera/Text11.jpg"
            alt="Text Detection"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 11: Camera module with RPi itself, and a connected audio sound card with headphones and a microphone.
          </header>
        </div>
      </div>

      <div>
        <header className="mb-10 justify-center text-center text-md font-bold">
          ------------------------------------------
        </header>
      </div>

      {/* Translation */}
      {/* Module 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mx-2 md:mx-5 bg-background">
        <div>
          <header className="mt-3 justify-center text-center text-xl font-bold">
            Translation Module
          </header>
        </div>
        <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-md rounded-lg border border-foreground/10 bg-background/80 shadow-[#313aaa] shadow-sm p-6">
          <p>
            The system captures images containing textual information, performs optical
            character recognition (OCR) to extract the digital text, and subsequently
            translates this text into target language using OpenAI API. The process is
            fully automated and begins with image acquisition via a Python script using
            the camera module. The image is then processed using OCR, and the extracted
            text is passed to a language translation model via secure API calls. The final
            output is a translated text string which can be printed to the terminal as of
            now or saved locally. The system is powered via 5V USB supply to the Raspberry
            Pi Zero W. The Pi Camera Module 2 performs optimally when capturing text under
            consistent lighting conditions. The Python 3 software utilizes libraries like
            picamera2 for image capture and openai, supporting over 90 languages. Results
            demonstrated OCR and translation accuracy between 90% and 95% across more than
            50 trials involving multiple languages and varied text formats. While minor
            performance degradation was observed under poor lighting or with low contrast
            text, the system maintained overall functionality and reliability. Future
            enhancements may include real-time adjustment of camera settings based on
            environmental conditions and adding a graphical user interface to enhance the
            usability and accessibility for users.
          </p>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Translation/TranslationDiagram.jpg"
            alt="Translation Diagram"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 9: Camera looking at a German sign with underlined text, image has gone through preprocessing, 99% accuracy with the underlined ‘T’ being read wrong.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Translation/Translation12.jpg"
            alt="Translation12"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 12: English to French translation from an image.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Translation/Translation13.jpg"
            alt="Translation13"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 13: French to English translation from an image
          </header>
        </div>
      </div>

      <div>
        <header className="mb-10 justify-center text-center text-md font-bold">
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
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS/GPSDiagram.jpg"
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

        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS/GPS1.jpg"
            alt="GPS1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 1: Location inference (Suwon, South Korea) with Point of Interest detection, nearby landmarks, and texts/signs translation.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/GPS/GPS2.jpg"
            alt="GPS2"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
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
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Sensor/Sensor1.jpg"
            alt="Sensor1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 4: Arduino Nano BLE 33 Rev2 with BMI 270 (Accelerometer/Gyroscope), BMM 150 (Magnetometer), HS3001 (Temperature/Humidity) 
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Sensor/Sensor2.jpg"
            alt="Sensor2"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 3: Adafruit 1918 Breakout Board with GUVA S12D (white block) to collect UV light.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/Sensor/Sensor4.jpg"
            alt="Sensor4"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 6: Minidisplay to demonstrate the sensor information in real time.
          </header>
        </div>
      </div>

      <div>
        <header className="mb-10 justify-center text-center text-md font-bold">
          ------------------------------------------
        </header>
      </div>

      {/* Web App*/}
      {/* Module 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mx-2 md:mx-5 bg-navbar">
        <div>
          <header className="mt-3 justify-center text-center text-xl font-bold">
            Web Application Module
          </header>
        </div>
        <div className="justify-self-center md:justify-self-start w-full max-w-[680px] md:max-w-[760px] font-mono text-md rounded-lg border border-foreground/10 bg-background/80 p-6">
          <p>
            The goal of the web application is to create a seamless pipeline that delivers real-time 
            information such as weather updates, language translations, and simplified navigation 
            directly to the glasses, both visually through a display and audibly through text-to-speech. 
            The web application will serve as the control hub, allowing users to interact with services 
            and feed instructions to the device. Communication between the web app and the Raspberry Pi 
            will be maintained through a secure WebSocket connection, enabling the exchange of JSON messages 
            that carry information, commands, and audio streams.
          </p>
          <p>
            Server side, the Next.js application will expose API routes from bigger data collectors, including 
            weather providers for live environmental updates and translation APIs for text and speech translation 
            from AI hosts such as OpenAI. These routes will normalize the data and forward it in a format optimized 
            for wearable output. Device authentication will rely on token-based pairing, with the web app generating 
            short-lived tokens that the Raspberry Pi presents on connection, but this might not be possible to do in 
            time. Once paired, the Raspberry Pi client will handle rendering captions on the glasses, playing audio 
            files through text-to-speech, streaming microphone input for speech translation, and relaying data from 
            the Arduino sensors.
          </p>
          <p>
            The plan is to have user experience built around clarity and low distraction. Captions will be reformatted 
            into concise text limited to short phrases, while spoken prompts will provide an auditory backup for 
            hands-free use. The system hopes to remain resilient in real-world conditions, with reconnection logic, 
            caching of frequently used phrases, and offline fallbacks to minimize disruption. If development goes well, 
            in a real world product privacy and safety are central considerations, and all data exchanges will be encrypted, 
            raw audio will not be stored by default, and users will have explicit control over whether logs are retained.
          </p>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/WebApp/WebAppDiagram.jpg"
            alt="Web Application Diagram"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div>
          <header className="justify-center text-center text-xl font-bold">
            Repository to the Web Application: ‎ 
            <Link href="https://github.com/Falmenca/ExplorerEyes" className="text-blue-500 underline">
              https://github.com/Falmenca/ExplorerEyes
            </Link>
          </header>
        </div>

        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/WebApp/WebApp1.jpg"
            alt="WebApp1"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 1: Location inference (Suwon, South Korea) with Point of Interest detection, nearby landmarks, and texts/signs translation.
          </header>
        </div>
        <div className="relative w-full max-w-[680px] md:max-w-[760px] justify-self-center md:justify-self-start aspect-[3/3] md:aspect-square md:order-1">
          <Image
            src="/pictures/WebApp/WebApp2.jpg"
            alt="WebApp2"
            fill
            className="rounded-lg object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <header className="absolute bottom-3 w-full text-center text-xs italic">
            Figure 2: Location inference (Kyoto, Japan) with Point of Interest detection, nearby landmarks, and texts/signs translation.
          </header>
        </div>
      </div>

      <Footer />
    </div>
  );
}
