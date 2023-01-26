import FadeIn from "react-fade-in";
import React, { useRef, useState, useEffect } from "react";
import "./Header.css";

type Props = {
  ref: React.Ref<HTMLInputElement>;
};

const Header = React.forwardRef<HTMLInputElement>((Props, ref) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const formRef = useRef(null);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailSubmit, setEmailSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const errorDelay: number = 4000;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (emailError) {
      timeoutId = setTimeout(() => {
        setEmailError(false);
      }, errorDelay);
    }
    if (emailSubmit) {
      timeoutId = setTimeout(() => {
        setEmailSubmit(false);
      }, errorDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [emailError, emailSubmit]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    if (!userEmail.toLowerCase().includes("pitt.edu")) {
      console.log("Not a pitt email!");
      setLoading(false);
      setEmailError(true);
      return;
    }

    if (formRef.current == null) {
      console.log("formRef.current" == null);
    } else {
      fetch(
        "https://script.google.com/macros/s/AKfycbzKIkMn4vfqHE2uQ_msve9vqYkzj88AX3s80JW9LKUJKaP2UHEZIKHaWRLiOrGPCMPt/exec",
        { method: "POST", body: new FormData(formRef.current) }
      )
        .then((res) => {
          setLoading(false);
          setEmailSubmit(true);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value);
  };
  return (
    <FadeIn delay={0} transitionDuration={0} className="max-w-4xl mx-auto">
      <div id="content" className="mb-8">
        <div id="signuppill" className="text-white flex flex-col items-center">
          <h1
            className="font-extrabold textgradient text-3xl bg-gradient-to-br from-white to-fullyellow mt-24 text-center md:text-6xl leading-tight drop-shadow-2xl"
            id="headertext"
          >
            The next generation of founders start here
          </h1>

          <div className="flex flex-row items-center justify-center mt-8">
            <div
              className={`ml-10 bg-gray-200 bg-opacity-25 rounded-2xl px-2 py-2 w-full border border-opacity-10 border-fullyellow ${
                emailError ? "border-red-500 border-opacity-100" : ""
              } ${emailSubmit ? "border-green-500 border-opacity-100" : ""} 
            ${loading ? "border-slate-400 border-opacity-100 " : ""}`}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-between icon-container"
                ref={formRef}
                name="google-sheet"
              >
                <input
                  name="email"
                  required
                  placeholder="Your Pitt email address"
                  className={`ml-4 flex items-center text-md font-gray-200 w-full text-white placeholder-gray-300 bg-transparent outline-none border-slate-500 transition-all focus:opacity-100 -pr-4`}
                  ref={ref}
                  value={userEmail}
                  onChange={handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-9 h-9 text-red-500 cursor-pointer transition duration-700 ${
                    emailError ? "opacity-100 translate-x-full" : "opacity-0"
                  }`}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-9 h-9 text-fullyellow cursor-pointer transition duration-200 transition ${
                    emailError || emailSubmit || loading
                      ? " opacity-0 translate-x-full"
                      : "opacity-100"
                  }`}
                  onClick={handleSubmit}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-9 h-9 text-green-400 transition-all duration-700 ${
                    emailSubmit ? "opacity-100 " : "opacity-0 hidden"
                  }`}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </form>
            </div>
            <div
              className={`lds-ring transition-all duration-700 ml-2 relative ${
                loading ? "opacity-100" : "opacity-0"
              }`}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <p
            className={`text-red-500 transition ${
              emailError ? "opacity-100" : "opacity-0"
            }`}
          >
            Please enter a Pitt email 🥴
          </p>
          <p
            className={`text-green-400 transition ${
              emailSubmit ? "opacity-100" : "opacity-0"
            }`}
          >
            Recieved. We'll be in touch!
          </p>
          <span className="text-xs" id="text-outline">
            Enter your Pitt email address to join. We’ll send you more info soon.
          </span>
        </div>
      </div>
    </FadeIn>
  );
});

export default Header;
