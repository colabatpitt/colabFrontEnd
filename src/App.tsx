import FadeIn from "react-fade-in";
import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Anchors from "./components/Anchors";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

function App() {
    const ref = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (ref.current != null) {
            ref.current.focus();
        } else {
            console.log("ref.current is null");
        }
    };

    return (
        <div
            className="bg-gray-black h-full w-full tracking-wider   "
            id="background"
        >
            <Header ref={ref} />
            <Anchors />
            <Mission />
            <Footer handleClick={handleClick} />
        </div>
    );
}

export default App;
