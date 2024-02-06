import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3100);
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
                        <span className="span1">E</span>
                        <span className="span1">X</span>
                        <span className="span1">C</span>
                        <span className="span1">L</span>
                        <span className="span1">U</span>
                        <span className="span1">S</span>
                        <span className="span1">I</span>
                        <span className="span1">V</span>
                        <span className="span1">E</span>
                        <span className="span2">G</span>
                        <span className="span2">A</span>
                        <span className="span2">M</span>
                        <span className="span2">E</span>
                        <span className="span2">S</span>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;