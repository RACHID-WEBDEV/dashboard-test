import React from "react";

import ActivitiesTable from "@/components/ActivitiesTable";
import activitiesData from "./activitesdata";

type Content = {
  [key: string]: React.ReactNode;
};

export const Log = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full py-2 my-3 border border-gray-100 rounded-lg">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 ">
        <div>
          <p className=" font-semibold text-lg text-gray-800">{title}</p>
        </div>
        <div>
          <button
            type="button"
            className="block px-4 py-2 text-sm font-medium bg-bgBtn text-center text-white rounded-lg hover:bg-bgBlue focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Sign Out All Sessions
          </button>
        </div>
      </div>

      <div className="scrollbar min-w-full overflow-auto">
        <ActivitiesTable activitiesData={activitiesData} />
      </div>
    </div>
  );
};

const content: Content = {
  Overview: <Log title="Overview" />,
  Branch: <Log title="Branch" />,
  "KYC Document": <Log title="KYC Document" />,
  "Activies Log": <Log title="Activies Log" />,
};

export default content;
