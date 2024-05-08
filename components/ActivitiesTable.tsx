// ActivitiesTable.js
import React from "react";

const ActivitiesTable = ({ activitiesData }: { activitiesData: any }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {activitiesData.map((activity: any, index: any) => (
          <table
            key={index}
            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead className="text-xs text-gray-700  bg-gray-50 ">
              <tr>
                {activity.tableHeadings.map(
                  (heading: any, headingIndex: any) => (
                    <th key={headingIndex} scope="col" className="px-6 py-4">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {activity.tableRow.map((row: any, rowIndex: any) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b dark:bg-gray-800 text-gray-400 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-400 whitespace-nowrap dark:text-white"
                  >
                    {row.location}
                  </th>
                  <td className="px-6 py-5 whitespace-nowrap"> {row.email}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    {" "}
                    {row.IPAddress}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">{row.time}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    {row.status === "signedOut" && (
                      <span className="bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA] text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl ">
                        Signed Out
                      </span>
                    )}
                    {row.status === "expired" && (
                      <span className="bg-[#FFFAEB] border border-[#FEDF89] text-[#B54708] text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl ">
                        Expired
                      </span>
                    )}
                    {row.status === "active" && (
                      <span className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl ">
                        Active
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default ActivitiesTable;
