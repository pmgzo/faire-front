"use client";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Page() {
  const [startDate, setStartDate] = useState<Value>(null);
  const [endDate, setEndDate] = useState<Value>(null);

  return (
    <div className="ml-20 mt-10">
      <h1 className="font-['InterBold'] text-[#8600BD] text-lg">
        New experience
      </h1>

      <div className="flex space-x-6">
        <div className="flex flex-col space-y-6">
          <input
            placeholder="Company name*"
            className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[20rem]"
          />
          <input
            placeholder="Role*"
            className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[20rem]"
          />
          <div className="bg-[#FAF9F9] p-6 rounded-t-lg">
            <div className="text-[#9CA3AF]">Start Period*</div>
            <DatePicker
              className="w-full"
              onChange={setStartDate}
              value={startDate}
            />
          </div>
          <div className="bg-[#FAF9F9] p-6 rounded-t-lg">
            <div className="text-[#9CA3AF]">End Period*</div>
            <DatePicker
              className="w-full"
              onChange={setEndDate}
              value={endDate}
            />
          </div>
        </div>

        <textarea
          onResize={undefined}
          placeholder="Description*"
          className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[25rem] h-[full]"
        />
      </div>

      {/* date */}
    </div>
  );
}
