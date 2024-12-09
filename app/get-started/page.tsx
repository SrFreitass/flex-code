"use client";

import { Carousel } from "./components/Carousel";
import { Form } from "./components/Form";


const GetStartedPage = () => {
    return (
        <main className="max-w-6xl m-auto p-16 flex gap-8 max-[1250px]:px-8 max-sm:px-4">
            <Carousel/>
            <Form/>
        </main>
    );
}

export default GetStartedPage;
