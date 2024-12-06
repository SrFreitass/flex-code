"use client";

import { Carousel } from "./components/Carousel";
import { Form } from "./components/Form";

const GetStartedPage = () => {
    return (
        <main className="max-w-6xl m-auto w-full flex gap-8 my-10 max-[1200px]:px-4 max-lg:justify-center">
            <Carousel/>
            <Form/>
        </main>
    );
}

export default GetStartedPage;
