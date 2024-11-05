"use client";

import moment, { Duration } from "moment";
import RemoveIcon from "./icons/removeIcon";
import Image from "next/image";
import LkdnIcon from "@/images/linkedinLogo.png";
import EditIcon from "./icons/editIcon";

interface ExperienceElemProps {
  addedWithLinkedin?: boolean;
  roleName: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  onRemoval: () => void;
}

function getFormattedDuration(startDate: Date, endDate: Date): string {
  const duration: Duration = moment.duration(
    endDate.getTime() - startDate.getTime(),
  );

  const weeks = duration.weeks();
  const months = duration.months();
  const years = duration.years();

  let initialString = "";

  if (years) {
    initialString += `${years} year(s)`;
  }
  if (months) {
    const newValue = `${months} month(s)`;
    initialString = initialString
      ? initialString + " " + newValue
      : newValue;
  }
  if (weeks && !years) {
    const newValue = `${weeks} week(s)`;
    initialString = initialString
      ? initialString + " " + newValue
      : newValue;
  }
  return initialString;
}

export default function ExperienceElem({
  addedWithLinkedin,
  roleName,
  companyName,
  startDate,
  endDate,
  onRemoval,
}: ExperienceElemProps) {
  const formattedRangeDate = `${startDate.toLocaleDateString('fr-FR')}-${endDate.toLocaleDateString('fr-FR')}`;
  const duration = getFormattedDuration(startDate, endDate);

  return (
    // Redirect to experience page edit
    <div className="bg-white py-4 w-[38rem]">
      <div
        className="w-full h-[8rem]  flex flex-row "
        onClick={() => console.log("redirection")}
      >
        <div className="flex flex-col justify-center px-8 mr-8">
          {/* call modal here */}
          <button className="bg-violet rounded-full p-1" onClick={onRemoval}>
            <RemoveIcon size="sm" />
          </button>
        </div>

        <div className="flex flex-col justify-center w-full">
          {addedWithLinkedin ? (
            <div className="flex flex-row space-x-1">
              {/* Optional field */}
              <div className="font-['InterThin'] text-sm text-violet">
                Added with
              </div>
              <div className="w-4">
                <Image className="w-fit" src={LkdnIcon} alt="Linkedin Icon" />
              </div>
            </div>
          ) : (
            ""
          )}
          <h2 className="flex flex-start font-['InterBold'] text-[#8600BD] text-[24px]">
            {companyName}
          </h2>
          <h3 className="flex flex-start font-['Inter'] text-[#8600BD] text-[20px]">
            {roleName}
          </h3>
          <div className="mt-3 flex flex-col h-[3rem]">
            <div className="flex flex-start space-x-2">
              <div className="text-violet text-[15px] font-['Inter'] font-semibold">
                {duration}
              </div>
              <div className="flex flex-col">
                <div className="h-full" />
                <div className="text-[13px] text-violet font-['Inter'] underline">
                  {formattedRangeDate}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex flex-col justify-center p-4">
          {/* call modal here */}
          <EditIcon color="#8600BD" size="md" />
        </button>
      </div>
    </div>
  );
}
