export const Footer = () => {
    return (
        <footer className="font-inter bg-[#D9D9D9]">
            <div className="max-w-[1440px] m-auto py-7 px-20 flex justify-between max-[850px]:flex-col max-[850px]:gap-2 max-[850px]:px-0">
                <span className="text-center">
                Copyright © 2024 Flex Code Inc. All rights reserved.
                </span>
                <nav className="flex gap-8 max-[850px]:justify-center  max-[430px]:gap-2 max-[430px]:items-center">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </nav>
            </div>
        </footer>
    )
}