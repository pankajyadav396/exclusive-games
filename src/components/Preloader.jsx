import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-[black] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div class="loader">
                        <span className="span1 text-[25px] sm:text-[52px]">E</span>
                        <span className="span1 text-[25px] sm:text-[52px]">X</span>
                        <span className="span1 text-[25px] sm:text-[52px]">C</span>
                        <span className="span1 text-[25px] sm:text-[52px]">L</span>
                        <span className="span1 text-[25px] sm:text-[52px]">U</span>
                        <span className="span1 text-[25px] sm:text-[52px]">S</span>
                        <span className="span1 text-[25px] sm:text-[52px]">I</span>
                        <span className="span1 text-[25px] sm:text-[52px]">V</span>
                        <span className="span1 text-[25px] sm:text-[52px]">E</span>
                        <span className="span2 text-[25px] sm:text-[52px]">G</span>
                        <span className="span2 text-[25px] sm:text-[52px]">A</span>
                        <span className="span2 text-[25px] sm:text-[52px]">M</span>
                        <span className="span2 text-[25px] sm:text-[52px]">E</span>
                        <span className="span2 text-[25px] sm:text-[52px]">S</span>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;