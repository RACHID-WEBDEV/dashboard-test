import React, { useState } from "react";
import classNames from "classnames";

type Data = {
  data?: any;
  containerClassName?: string;
  isProfile?: boolean;
};

const Tab = ({ containerClassName = "", data, isProfile = false }: Data) => {
  const [visibleTab, setVisibleTab] = useState(0);

  const TabTitles = Object.keys(data).map((title, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(index)}
      className={classNames(
        "inline-block text-sm p-3 pt-4 cursor-pointer  tracking-wide ",
        {
          "border-b-2 font-semibold border-gray-700 mb-[-2px] text-gray-700":
            visibleTab === index,
        },
        { "text-gray-500 font-medium": visibleTab !== index }
      )}
    >
      {title}
    </li>
  ));

  const TabContent = Object.keys(data).map((item, index) => (
    <div
      className="text-sm mt-6 leading-6 text-secondary-700"
      key={index}
      style={visibleTab === index ? {} : { display: "none" }}
    >
      {/* {!isProfile && (
        <h4 className=" font-bold my-7 lg:mt-12 text-xl text-neutral-black">
          {item}
        </h4>
      )} */}
      <div className="">{data[item]}</div>
    </div>
  ));

  return (
    <div className={classNames("lg:py-4", containerClassName)}>
      <ul className="flex flex-wrap justify-start lg:space-x-5 list-none lg:border-b-[1px] border-secondary-100">
        {TabTitles}
      </ul>

      <div className="py-1">{TabContent}</div>
    </div>
  );
};

export default Tab;
