"use client";

// We are adding AnimatePresence to be able to properly
// render an element that is being removed from the React render tree
import { motion, AnimatePresence } from "framer-motion";

// useState is in order to keep track of the state of the button and form
// useEffect is used in this example because we are keeping track of keyboard shortcuts,
// which are based on a specific DOM element
import { useState, useEffect, useRef } from "react";

import confetti from "canvas-confetti";

export default function FeedbackPopUp() {
  // Set state if the button has been opened for feedback form
  const [open, setOpen] = useState(false);

  // Initializing state of form data sent
  const [form, setForm] = useState("idle");

  const [feedback, setFeedback] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // We are creating a function to handle a simulated form submission
  function submit() {
    // Set the form to loading state
    setForm("loading");

    // Simulate a server request
    setTimeout(() => {
      setForm("success");

      if (canvasRef.current) {
        const myConfetti = confetti.create(canvasRef.current, {
          resize: true,
          useWorker: true,
        });
        myConfetti({
          particleCount: 100,
          spread: 50,
          origin: { y: 0.8 },
        });
      }
    }, 1500);

    // Show the success window for 3.5s
    setTimeout(() => {
      setOpen(false);
    }, 3500);
  }

  useEffect(() => {
    // We are adding keyboard shortcuts to submit the feedback form. So, we need useEffect because we need a global window listener
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        form === "idle"
      ) {
        submit();
      }
    };

    // We add a listener when any key stroke is pressed
    window.addEventListener("keydown", handleKeyDown);

    // We need to add a cleanup function so that we don't have memory leaks and remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, form]);

  return (
    // We are defining a parent element to store the button and feedback form in
    <div className="wrapper h-[300px] flex justify-center items-center w-[400px]">
      <motion.button
        layout
        layoutId="wrapper"
        onClick={() => {
          setOpen(true);
          setForm("idle");
          setFeedback("");
        }}
        className="intial-button relative flex h-[36px] items-center rounded-lg px-3 bg-white border-[#e9e9e7] border outline-none font-medium"
      >
        <motion.span layoutId="title" className="block text-[14px]">
          Feedback
        </motion.span>
      </motion.button>

      <canvas
        ref={canvasRef}
        className="absolute z-[-1] top-10 left-50 w-1/5 h-2/5 pointer-events-none"
      />

      <AnimatePresence mode="popLayout">
        {open && (
          <motion.div
            layout
            layoutId="wrapper"
            className="feedback-popup absolute h-[192px] w-[364px] rounded-[12px] overflow-hidden bg-[#f5f6f7] p-[4px] outline-none shadow-overlay-shadow"
          >
            <motion.span
              layout
              layoutId="title"
              aria-hidden
              className="placeholder data-[feedback=true]:opacity-0 absolute text-[14px] text-[#63635d] left-[10px] right-[17px]"
              data-feedback={feedback ? "true" : "false"}
            >
              Feedback
            </motion.span>
            {form === "success" ? (
              <motion.div
                initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="success-wrapper flex h-full flex-col items-center justify-center"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 214 213"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_24_2100"
                    maskUnits="userSpaceOnUse"
                    x="27"
                    y="35"
                    width="160"
                    height="142"
                  >
                    <path
                      d="M169.902 52.2487C166.025 48.3865 161.423 45.3238 156.359 43.2345C151.294 41.1453 145.867 40.0702 140.387 40.0702C134.906 40.0702 129.479 41.1453 124.415 43.2345C119.35 45.3238 114.748 48.3865 110.871 52.2487L106.807 56.2945L102.743 52.2479C94.9121 44.4508 84.2948 40.0738 73.2282 40.0738C62.1615 40.0738 51.5443 44.4508 43.7131 52.2479C35.8813 60.0458 31.4779 70.626 31.4779 81.6621C31.4779 92.6982 35.8813 103.278 43.7131 111.076L50.9038 118.236L103.681 170.784C105.41 172.505 108.205 172.505 109.934 170.784L162.711 118.236L169.901 111.077C173.78 107.217 176.858 102.632 178.959 97.5847C181.059 92.5374 182.14 87.1267 182.14 81.6621C182.14 76.1975 181.059 70.7868 178.959 65.7395C176.858 60.6928 173.781 56.1088 169.902 52.2487Z"
                      fill="#D9D9D9"
                      stroke="#348E2B"
                      stroke-width="8.8625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_24_2100)">
                    <mask
                      id="path-2-outside-1_24_2100"
                      maskUnits="userSpaceOnUse"
                      x="79.6538"
                      y="70.519"
                      width="50"
                      height="65"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="79.6538"
                        y="70.519"
                        width="50"
                        height="65"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M104.595 130.713C116.332 126.068 124.535 115.46 124.535 103.116C124.535 90.7725 116.332 80.1642 104.595 75.519C92.8567 80.1642 84.6538 90.7725 84.6538 103.116C84.6538 115.46 92.8567 126.068 104.595 130.713Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M104.595 130.713C116.332 126.068 124.535 115.46 124.535 103.116C124.535 90.7725 116.332 80.1642 104.595 75.519C92.8567 80.1642 84.6538 90.7725 84.6538 103.116C84.6538 115.46 92.8567 126.068 104.595 130.713Z"
                      fill="#70D767"
                    />
                    <path
                      d="M104.595 130.713L102.964 134.833L104.595 135.479L106.225 134.833L104.595 130.713ZM104.595 75.519L106.225 71.3987L104.595 70.7534L102.964 71.3987L104.595 75.519ZM120.104 103.116C120.104 113.378 113.27 122.514 102.964 126.593L106.225 134.833C119.395 129.622 128.967 117.541 128.967 103.116H120.104ZM102.964 79.6394C113.27 83.7181 120.104 92.8537 120.104 103.116H128.967C128.967 88.6913 119.395 76.6104 106.225 71.3987L102.964 79.6394ZM89.0851 103.116C89.0851 92.8537 95.9188 83.7181 106.225 79.6394L102.964 71.3987C89.7946 76.6104 80.2226 88.6913 80.2226 103.116H89.0851ZM106.225 126.593C95.9188 122.514 89.0851 113.378 89.0851 103.116H80.2226C80.2226 117.541 89.7946 129.622 102.964 134.833L106.225 126.593Z"
                      fill="#F9FCF8"
                      mask="url(#path-2-outside-1_24_2100)"
                    />
                    <mask
                      id="path-4-outside-2_24_2100"
                      maskUnits="userSpaceOnUse"
                      x="73.0937"
                      y="70.6079"
                      width="113.488"
                      height="125.567"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="73.0937"
                        y="70.6079"
                        width="113.488"
                        height="125.567"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M153.204 92.6111C164.749 108.344 166.595 130.116 156.161 148.187C145.729 166.257 125.952 175.545 106.556 173.415C95.0107 157.682 93.1653 135.909 103.599 117.839C114.031 99.7686 133.808 90.4804 153.204 92.6111Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M153.204 92.6111C164.749 108.344 166.595 130.116 156.161 148.187C145.729 166.257 125.952 175.545 106.556 173.415C95.0107 157.682 93.1653 135.909 103.599 117.839C114.031 99.7686 133.808 90.4804 153.204 92.6111Z"
                      fill="#70D767"
                    />
                    <path
                      d="M153.204 92.6111L156.777 89.9895L155.625 88.419L153.688 88.2063L153.204 92.6111ZM106.556 173.415L102.983 176.036L104.135 177.607L106.072 177.819L106.556 173.415ZM149.632 95.2327C160.167 109.59 161.853 129.467 152.324 145.972L159.999 150.403C171.337 130.765 169.331 107.097 156.777 89.9895L149.632 95.2327ZM152.324 145.972C142.796 162.475 124.74 170.954 107.039 169.01L106.072 177.819C127.164 180.136 148.662 170.039 159.999 150.403L152.324 145.972ZM110.128 170.793C99.5926 156.436 97.9073 136.559 107.436 120.054L99.761 115.623C88.4233 135.26 90.4287 158.928 102.983 176.036L110.128 170.793ZM107.436 120.054C116.964 103.551 135.02 95.0714 152.721 97.0158L153.688 88.2063C132.596 85.8893 111.098 95.9866 99.761 115.623L107.436 120.054Z"
                      fill="#F9FCF8"
                      mask="url(#path-4-outside-2_24_2100)"
                    />
                    <mask
                      id="path-6-outside-3_24_2100"
                      maskUnits="userSpaceOnUse"
                      x="33.3658"
                      y="77.6327"
                      width="102.785"
                      height="109.272"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="33.3658"
                        y="77.6327"
                        width="102.785"
                        height="109.272"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M104.698 167.198C115.818 152.373 116.562 131.377 105.122 115.381C95.636 102.117 80.188 95.6691 65.1395 97.1224C54.0192 111.947 53.2759 132.943 64.7154 148.939C74.2017 162.203 89.6497 168.651 104.698 167.198Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M104.698 167.198C115.818 152.373 116.562 131.377 105.122 115.381C95.636 102.117 80.188 95.6691 65.1395 97.1224C54.0192 111.947 53.2759 132.943 64.7154 148.939C74.2017 162.203 89.6497 168.651 104.698 167.198Z"
                      fill="#70D767"
                    />
                    <path
                      d="M104.698 167.198L105.124 171.608L107.07 171.42L108.243 169.857L104.698 167.198ZM65.1395 97.1224L64.7135 92.7117L62.7677 92.8996L61.5947 94.4635L65.1395 97.1224ZM101.518 117.959C111.814 132.355 111.135 151.232 101.153 164.539L108.243 169.857C120.502 153.513 121.31 130.398 108.727 112.803L101.518 117.959ZM65.5655 101.533C79.0913 100.227 92.9815 106.023 101.518 117.959L108.727 112.803C98.2905 98.211 81.2847 91.1114 64.7135 92.7117L65.5655 101.533ZM68.3198 146.361C58.0241 131.965 58.703 113.088 68.6843 99.7814L61.5947 94.4635C49.3354 110.807 48.5276 133.922 61.1111 151.517L68.3198 146.361ZM104.272 162.787C90.7464 164.093 76.8562 158.297 68.3198 146.361L61.1111 151.517C71.5472 166.109 88.553 173.209 105.124 171.608L104.272 162.787Z"
                      fill="#F9FCF8"
                      mask="url(#path-6-outside-3_24_2100)"
                    />
                    <path
                      d="M169.902 52.2487C166.025 48.3865 161.423 45.3238 156.359 43.2345C151.294 41.1453 145.867 40.0702 140.387 40.0702C134.906 40.0702 129.479 41.1453 124.415 43.2345C119.35 45.3238 114.748 48.3865 110.871 52.2487L106.807 56.2945L102.743 52.2479C94.9121 44.4508 84.2948 40.0738 73.2282 40.0738C62.1615 40.0738 51.5443 44.4508 43.7131 52.2479C35.8813 60.0458 31.4779 70.626 31.4779 81.6621C31.4779 92.6982 35.8813 103.278 43.7131 111.076L50.9038 118.236L103.681 170.784C105.41 172.505 108.205 172.505 109.934 170.784L162.711 118.236L169.901 111.077C173.78 107.217 176.858 102.632 178.959 97.5847C181.059 92.5374 182.14 87.1267 182.14 81.6621C182.14 76.1975 181.059 70.7868 178.959 65.7395C176.858 60.6928 173.781 56.1088 169.902 52.2487Z"
                      stroke="#348E2B"
                      stroke-width="8.8625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>

                <h3 className="mb-1 mt-2 text-[14px] text-[#21201c] font-medium">
                  Feedback received!
                </h3>
                <p className="font-[#63635d] text-[10px]">
                  Thanks for helping me improve!
                </p>
              </motion.div>
            ) : (
              <div>
                <motion.form
                  exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                  className="feedback-form relative rounded-[8px] border-[#e6e7e8] bg-white"
                >
                  <textarea
                    autoFocus
                    placeholder="Feedback"
                    onChange={(e) => setFeedback(e.target.value)}
                    className="h-[120px] w-full resize-none rounded-[8px] p-3 text-[14px] outline-none"
                  />
                  <div className="feedback-footer relative flex h-[48px] items-center px-[10px] py-0">
                    <svg
                      className="dotted-line absolute left-0 top-[-1px] right-0"
                      width="352"
                      height="2"
                      viewBox="0 0 352 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1H352"
                        stroke="#E6E7E8"
                        strokeDasharray="4 4"
                      />
                    </svg>
                    <div className="half-circle-left absolute left-0 top-0 translate-x-[-1.5px] translate-y-[-50%]">
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2029_22)">
                          <path
                            d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                            fill="#F5F6F7"
                          />
                          <path
                            d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                            stroke="#E6E7E8"
                            strokeWidth="1"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2029_22">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="half-circle-right absolute right-0 top-0 translate-x-[1.5px] translate-y-[-50%] rotate-180">
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2029_22)">
                          <path
                            d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                            fill="#F5F6F7"
                          />
                          <path
                            d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                            stroke="#E6E7E8"
                            strokeWidth="1"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2029_22">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <button
                      type="submit"
                      className="submit-button ml-auto flex items-center justify-center rounded-[6px] font-medium text-[12px] h-[30px] w-[114px] overflow-hidden bg-blue-500 relative shadow"
                    >
                      <span className="flex w-full justify-center items-center text-white [text-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.16)] text-[12px]">
                        Submit Feedback
                      </span>
                    </button>
                  </div>
                </motion.form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
