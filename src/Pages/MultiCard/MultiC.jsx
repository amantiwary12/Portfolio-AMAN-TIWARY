import React from "react";
import Card from "../../UI/Card/Card";
import mind from "../../Accest/mind.png"
import Secure from "../../Accest/secure.png"
// import mind from "../../Accest/mind.png"

const MultiC = () => {
  return (
    <div className="w-full  flex justify-center items-start">
      <div className="w-full max-w-7xl p-2 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <div className=" cover cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Card username="aman tiwary" bgImage={mind} template=""  />
          </div>
          <div className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Card username="aman tiwary"  bgImage={Secure}  template="" />
          </div>
          <div className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Card username="aman tiwary"  bgImage={mind} template="" />
          </div>
          <div className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Card username="aman tiwary" bgImage={mind}  template="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiC;
