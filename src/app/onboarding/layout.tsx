"use client";

import Image from "next/image";
import Dadj from "@/images/dadj.svg";
import { usePathname } from "next/navigation";

enum OnBoardingStep {
  Upload = "Upload CV",
  Experiences = "Experiences",
  Criterias = "Criterias",
  Location = "Location",
  Interest = "Interest and Passion",
}

const stepsMap: Map<OnBoardingStep, string> = new Map<OnBoardingStep, string>([
  [OnBoardingStep.Upload, "/onboarding/cv"],
  [OnBoardingStep.Experiences, "/onboarding/experiences"],
  [OnBoardingStep.Criterias, "/onboarding/criterias"],
  [OnBoardingStep.Location, "/onboarding/location"],
  [OnBoardingStep.Interest, "/onboarding/interest"],
]);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-w-full">
      <div className="flex flex-col fixed w-[20rem]">
        <div className="pt-6 pl-16">
          {/* TODO: to change alt */}
          <div className="flex flex-row">
            <Image src={Dadj} width={100} alt="follow us on twitter" />
          </div>

          <div className="flex flex-start h-[24rem]">
            <ul className="mt-24 mr-10 flex flex-col w-full space-y-4 ">
              {[...stepsMap.entries()].map((value, index) =>
                pathname === value[1] ? (
                  <li
                    className="font-['InterBold'] text-[#8600BD]"
                    key={index}
                  >{`${index + 1}- ${value[0]}`}</li>
                ) : (
                  <li
                    className="font-['InterBold'] text-[#8600BD] opacity-50"
                    key={index}
                  >{`${index + 1}- ${value[0]}`}</li>
                ),
              )}
            </ul>
            <div className="mt-20 w-[2px] h-full bg-[#D2D2D2]"></div>
          </div>
        </div>
      </div>
      <div className="ml-[20rem]">{children}</div>
    </div>
  );
}
