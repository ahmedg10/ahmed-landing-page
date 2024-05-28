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
            {form === "success" ? (
              <motion.div
                initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="success-wrappe rounded-lg flex h-full flex-col items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.73243 5.3594L7.16603 8.4375L6.26763 7.36C6.03898 7.08576 5.68139 6.95434 5.32957 7.01524C4.97775 7.07613 4.68514 7.3201 4.56197 7.65524C4.4388 7.99037 4.50378 8.36576 4.73243 8.64L6.39843 10.64C6.58799 10.8682 6.86917 11.0002 7.16579 11.0004C7.46242 11.0006 7.74378 10.8689 7.93363 10.641L11.2676 6.641C11.5021 6.36738 11.5712 5.98878 11.4486 5.64996C11.3259 5.31114 11.0305 5.0645 10.6752 5.00435C10.3199 4.9442 9.95977 5.07983 9.73243 5.3594Z"
                    fill="#01BA13"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8C0 3.58172 3.58172 0 8 0C12.4163 0.0047399 15.9953 3.58369 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3122 13.9964 13.9964 11.3122 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"
                    fill="#01BA13"
                  />
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
                    <motion.button
                      type="submit"
                      disabled={form === "loading"}
                      className="submit-button ml-auto flex items-center justify-center rounded-[6px] font-medium text-[12px] h-[30px] w-[114px] overflow-hidden bg-blue-500 relative shadow"
                    >
                      {form === "loading" && (
                        <motion.div
                          className="absolute inset-0 bg-blue-700/50 flex items-center justify-center"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 1,
                            ease: [0.85, 0, 0.15, 1],
                          }}
                        ></motion.div>
                      )}

                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={form}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            bounce: 0,
                          }}
                          initial={{ opacity: 0, y: -25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                        >
                          {form === "loading" ? (
                            <span className="relative z-2 text-white">
                              Submitting...
                            </span>
                          ) : (
                            <span className="relative z-2 text-white">
                              Submit Feedback
                            </span>
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </motion.button>
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
