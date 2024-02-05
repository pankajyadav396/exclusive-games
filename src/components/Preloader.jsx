import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
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
                    <div className="div">
                        <p id="h2">Loading....<span id="lol"></span></p>
                    </div>
                    <h1 className="text-white mt-[60px] text-[50px] font-inter font-bold max-sm:text-[35px]">Exclusive <span className=" text-[#51d613]">Games</span></h1>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;