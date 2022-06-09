import React from "react";
import Team from "../../pages/team";

const Footer = () => {
    return(
      <div className="w-full bg-[#062F99] mt-24">
          <div className="flex justify-center items-center gap-10">
            <img src="/Logo.png" alt="Brand Logo" className="w-36 my-10"/>
            <p className="text-lg text-white">
                Every life is a story, make yours a <b>best seller</b>
            </p>
          </div>
          <hr></hr>
          <div className="flex justify-between py-8 px-48">
            <a href="/">
              <p className="text-xl text-white font-bold">
                Privacy Policy
              </p>
            </a>
            <a href="/team">
              <p className="text-xl text-white font-bold">
                Our Team
              </p>
            </a>
          </div>
      </div>
    )
}

export default Footer