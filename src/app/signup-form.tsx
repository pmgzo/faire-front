"use client";

import { useState } from "react";
import { useForm, Resolver } from "react-hook-form";

// TODO: update react hook form here

type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export type SignUpFormArgs = {
  submit: (data: SignUpFormValues) => void;
  outlineInputs: boolean;
};

const resolver: Resolver<SignUpFormValues> = async (values) => {
  let errors = {};

  errors = {
    ...(values.username === ""
      ? {
          username: {
            type: "required",
            message: "This is required.",
          },
        }
      : {}),
    ...errors,
  };
  errors = {
    ...(values.password === ""
      ? {
          password: {
            type: "required",
            message: "This is required.",
          },
        }
      : {}),
    ...errors,
  };

  return {
    values: values.username && values.password ? values : {},
    errors,
  };
};

export const SignUpForm: React.FunctionComponent<SignUpFormArgs> = ({
  submit,
  outlineInputs,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({ resolver });
  const onSubmit = handleSubmit(submit);

  const [outlined, setOutline] = useState<boolean | undefined>(false);
  if (!outlined && outlineInputs) {
    setOutline(true);
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-full">
        <div className="flex flex-col">
          <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">
            Username<label className="text-[#FF0101]">*</label>
          </label>
          <input
            className={`${
              outlineInputs
                ? "login-input outline outline-2 outline-red-600"
                : "placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1" //outline outline-2 outline-blue-500'
            }`}
            // {...register('username')}
            placeholder="Username"
          />
          {errors?.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">
            Email<label className="text-[#FF0101]">*</label>
          </label>
          <input
            className={`${
              outlineInputs
                ? "login-input outline outline-2 outline-red-600"
                : "placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1" //outline outline-2 outline-blue-500'
            }`}
            // {...register('username')}
            placeholder="Email"
          />
          {errors?.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">
            Password<label className="text-[#FF0101]">*</label>
          </label>
          <input
            className={
              outlineInputs
                ? "outline outline-2 outline-red-600 login-input placeholder-gray-700"
                : "placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1"
            }
            type="password"
            // {...register('password')}
            placeholder="Password"
          />
          {errors?.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">
            Confirm Password<label className="text-[#FF0101]">*</label>
          </label>
          <input
            className={
              outlineInputs
                ? "outline outline-2 outline-red-600 login-input placeholder-gray-700"
                : "placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1"
            }
            type="password"
            // {...register('password')}
            placeholder="Password"
          />
          {errors?.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="text-bold text-black text-center bg-red-200">
          {" "}
          CGU !
        </div>

        <input
          className="bg-[#8600BD] text-white rounded-full py-3 font-['InterBold'] text-sm "
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};
