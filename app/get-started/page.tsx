"use client";

import { Carousel } from "./components/Carousel";
import { Form } from "./components/Form";


const GetStartedPage = () => {
    return (
        <main className="max-w-[1440px] m-auto p-8 px-16 gap-10 flex max-[1250px]:px-8 max-sm:px-4">
            <Carousel/>
            <Form/>
        </main>
    );
}

export default GetStartedPage;
