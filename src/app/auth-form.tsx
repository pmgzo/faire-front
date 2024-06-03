"use client";

import Image from "next/image";

import Dadj from "@/images/dadj.svg";
import { LoginForm } from "./login-form";
import { SignUpForm } from "./signup-form";

export const AuthForm: React.FunctionComponent<{}> = () => {
  // animation to select which type

  return (
    <div className="grid justify-items-center w-full">
      <div className="border-3 border-[#D5D5D5] rounded-3xl w-2/4 py-8">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              className="pb-10"
              width={100}
              src={Dadj}
              alt="follow us on twitter"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-2/3">
              <div className="flex justify-center w-full">
                <button
                  className="text-white bg-[#0277B5] w-full rounded-full py-3 font-['InterBold'] text-sm"
                  onClick={() =>
                    //** TODO */
                    console.log("Signed up with linkedin")
                  }
                >
                  Sign Up with Linkedin
                </button>
              </div>
              <div className="flex justify-center py-8">
                <div className="flex flex-col justify-center">
                  <div className="h-px w-48 bg-[#BDBCBC]" />
                </div>
                <div className="font-['InterBold'] text-[#BDBCBC] px-2">Or</div>
                <div className="flex flex-col justify-center">
                  <div className="h-px w-48 bg-[#BDBCBC]" />
                </div>
              </div>
              {/* <LoginForm 
                                submit={(data) => {console.log("data")}}
                                outlineInputs={false}
                            /> */}
              <SignUpForm
                submit={(data) => {
                  console.log("data");
                }}
                outlineInputs={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
