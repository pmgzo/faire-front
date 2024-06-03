"use client";

import Image from "next/image";
import { useState } from "react";

import AddIcon from "@/images/add.svg";
import RmIcon from "@/images/remove.svg";

enum SwedenRegion {
  Stockholm = "Stockhom Region",
  Uppsala = "Uppsala Region",
  Sormland = "Sörmland",
  Ostergotland = "Östergötland",
  Jonkoping = "Jönköpings län",
  Kronoberg = "Kronoberg",
  Kalmar = "Kalmar län",
  Gotland = "Gotland",
  Blekinge = "Blekinge",
  Skane = "Skåne",
  Halland = "Halland",
  VastraGotaland = "Västra Götaland",
  Värmland = "Värmland",
  Orebro = "Örebro län",
  Vastmanland = "Västmanland",
  Dalarna = "Dalarna",
  Gavleborg = "Gävleborg",
  Vâsternorrland = "Västernorrland",
  JamtlandHarjedalen = "Jämtland Härjedalen",
  Vasterbotten = "Västerbotten",
  Norbotten = "Norbotten",
}

function toggleMapSelection(
  mapT: Map<SwedenRegion, boolean>,
  key: SwedenRegion,
) {
  console.log("clicked");
  mapT.set(key, !mapT.get(key));
  return new Map<SwedenRegion, boolean>(mapT);
}

export default function Page() {
  const [regionsList, setRegionsList] = useState<Map<SwedenRegion, boolean>>(
    new Map<SwedenRegion, boolean>([
      [SwedenRegion.Stockholm, false],
      [SwedenRegion.Uppsala, false],
      [SwedenRegion.Sormland, false],
      [SwedenRegion.Ostergotland, false],
      [SwedenRegion.Jonkoping, false],
      [SwedenRegion.Kronoberg, false],
      [SwedenRegion.Kalmar, false],
      [SwedenRegion.Gotland, false],
      [SwedenRegion.Blekinge, false],
      [SwedenRegion.Skane, false],
      [SwedenRegion.Halland, false],
      [SwedenRegion.VastraGotaland, false],
      [SwedenRegion.Värmland, false],
      [SwedenRegion.Orebro, false],
      [SwedenRegion.Vastmanland, false],
      [SwedenRegion.Dalarna, false],
      [SwedenRegion.Gavleborg, false],
      [SwedenRegion.Vâsternorrland, false],
      [SwedenRegion.JamtlandHarjedalen, false],
      [SwedenRegion.Vasterbotten, false],
      [SwedenRegion.Norbotten, false],
    ]),
  );

  return (
    <div className="mt-10 w-full">
      <h1 className="font-['InterBold'] text-[#8600BD] text-xl grid justify-items-center">
        Location
      </h1>

      <div className="mt-20 flex justify-center">
        <div className="flex flex-col">
          <div className="ml-4 font-['InterBold'] text-[#8600BD] text-lg">
            Please select your regions
          </div>

          {/*selected list*/}
          <ul className="flex flex-wrap space-x-2 space-y-1 mb-18 w-[50rem] p-4">
            {[...regionsList.keys()]
              .filter((key) => regionsList.get(key))
              .map((value) => (
                <li
                  key={value}
                  className="bg-[#8600BD] opacity-50 w-fit rounded-full p-4 flex"
                  onClick={() =>
                    setRegionsList(toggleMapSelection(regionsList, value))
                  }
                >
                  <Image width="15" src={RmIcon} alt="remove region" />
                  <div
                    className="font-['Inter'] text-white text-sm"
                    onClick={() =>
                      setRegionsList(toggleMapSelection(regionsList, value))
                    }
                  >
                    {value}
                  </div>
                </li>
              ))}
          </ul>

          {/*proposed list*/}
          <ul className="flex flex-wrap space-x-2 space-y-1 w-[50rem] p-4">
            {[...regionsList.keys()]
              .filter((key) => !regionsList.get(key))
              .map((value) => (
                <li
                  className="bg-[#8600BD] w-fit rounded-full p-4 flex"
                  onClick={() =>
                    setRegionsList(toggleMapSelection(regionsList, value))
                  }
                >
                  <Image width="15" src={AddIcon} alt="add region" />
                  <div
                    className="font-['Inter'] text-white text-sm"
                    key={value}
                  >
                    {value}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
