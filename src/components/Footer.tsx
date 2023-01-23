import FadeIn from "react-fade-in";

type Props = {
    handleClick: () => void;
};

const Footer = ({ handleClick }: Props) => {
    return (
        <span>
            <FadeIn
                transitionDuration={500}
                delay={1200}
                className="flex justify-center"
            >
                <div className="px-8 pt-24 pb-16">
                    <div className="grid gap-8 items-start justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-yellow-100 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <button
                                // id="search-background"
                                className="relative bg-[#f8aa00] px-6 py-3 rounded-full leading-none flex items-center divide-x divide-gray-600 "
                                onClick={handleClick}
                            >
                                <span className="text-white text-lg drop-shadow-2xl background-blur-xl">
                                    Join now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <FadeIn
                transitionDuration={250}
                className="w-full text-center mt-5 pb-16"
            >
                <span className="flex flex-row space-x-4 justify-center pb-8">
                    <div
                        className="cursor-pointer"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/pittcolab/?hl=en"
                            )
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#ffdb8c] icon icon-tabler icon-tabler-brand-instagram"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="4"
                            ></rect>
                            <circle cx="12" cy="12" r="3"></circle>
                            <line
                                x1="16.5"
                                y1="7.5"
                                x2="16.5"
                                y2="7.501"
                            ></line>
                        </svg>
                    </div>

                    <div
                        className="cursor-pointer"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/company/colab-pitt/"
                            )
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#ffdb8c] icon icon-tabler icon-tabler-brand-linkedin"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="2"
                            ></rect>
                            <line x1="8" y1="11" x2="8" y2="16"></line>
                            <line x1="8" y1="8" x2="8" y2="8.01"></line>
                            <line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </div>
                </span>
                <span className="font-bold text-center text-white text-[#ffdb8c]">
                    Inspired by V1 at the University of Michigan
                </span>
            </FadeIn>
        </span>
    );
};

export default Footer;
