import FadeIn from "react-fade-in";

const Mission = () => {
    return (
        <FadeIn
            transitionDuration={750}
            delay={1400}
            className="max-w-sm mx-4 sm:mx-auto md:max-w-4xl flex justify-center"
        >
            <div className="text-white mt-12  text-center rounded-2xl py-3 border border-fullyellow">
                <h2 className="font-bold text-2xl textgradient bg-gradient-to-br pb-2 from-white to-fullyellow border-b border-fullyellow w-full">
                    Our Mission
                </h2>
                <div className="px-8 py-6 md:px-28">
                    <p className="font-thin mt-4">
                        Optimism. Frontiers. Innovation. We are building a
                        community of the next generation of founders, engineers,
                        designers at University of Pittsburgh.
                    </p>
                    <p className="font-thin mt-4">
                        We run high-impact events that accelerate student
                        potential and ambition.
                    </p>
                    <p className="font-thin mt-4">
                        We believe spontaneity creates ideas so we are
                        connecting the best minds on campus to work on the next
                        generation of technology.
                    </p>
                </div>
            </div>
        </FadeIn>
    );
};

export default Mission;
