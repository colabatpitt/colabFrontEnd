import FadeIn from "react-fade-in";
import React from "react";

type Props = {
    ref: React.Ref<HTMLInputElement>;
};

const Header = React.forwardRef<HTMLInputElement>((Props, ref) => {
    return (
        <FadeIn delay={0} transitionDuration={0} className="max-w-4xl mx-auto">
            <div id="content">
                <div
                    id="signuppill"
                    className="text-white flex flex-col items-center"
                >
                    <h1
                        className="font-extrabold textgradient text-3xl bg-gradient-to-br from-white to-fullyellow mt-24 text-center md:text-6xl leading-tight drop-shadow-2xl"
                        id="headertext"
                    >
                        The next generation of founders start here
                    </h1>
                    <div className="bg-gray-500 rounded-2xl flex flex-row justify-between px-2 py-2 w-2/3 my-4">
                        <input
                            type="text"
                            name="email"
                            required
                            placeholder="Your Pitt email address"
                            className="ml-4 flex items-center text-xs font-gray-200 bg-gray-500 w-full text-white"
                            ref={ref}
                        />
                        <svg
                            xmlns="http://www.w2.org/2000/svg"
                            fill="none"
                            viewBox="-1 0 24 24"
                            strokeWidth="0.5"
                            stroke="currentColor"
                            className="w-7 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <span className="text-xs" id="text-outline">
                        Sign up to learn more about Colab at Pitt
                    </span>
                </div>
            </div>
        </FadeIn>
    );
});

export default Header;
