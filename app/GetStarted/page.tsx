"use client";

import { Carousel } from "./components/Carousel";
import { Form } from "./components/Form";

const GetStartedPage = () => {
    return (
        <main className="max-w-6xl m-auto h-screen w-full flex gap-8 mt-10">
            <Carousel/>
            <Form/>
        </main>
    );
}

export default GetStartedPage;