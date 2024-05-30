"use client";

import { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';

type LoginFormValues = {
	username: string;
	password: string;
};

export type LoginFormArgs = {
	submit: (data: LoginFormValues) => void;
	outlineInputs: boolean;
};

const resolver: Resolver<LoginFormValues> = async (values) => {
	let errors = {};

	errors = {
		...(values.username === ''
			? {
					username: {
						type: 'required',
						message: 'This is required.',
					},
				}
			: {}),
		...errors,
	};
	errors = {
		...(values.password === ''
			? {
					password: {
						type: 'required',
						message: 'This is required.',
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


export const LoginForm: React.FunctionComponent<LoginFormArgs> = ({
	submit,
	outlineInputs,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>({ resolver });
	const onSubmit = handleSubmit(submit);

	const [outlined, setOutline] = useState<boolean | undefined>(false);
	if (!outlined && outlineInputs) {
		setOutline(true);
	}

	return (
            <div className="flex justify-center">
                <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-full">
                    <div className="flex flex-col">
                    <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">Email<label className="text-[#FF0101]">*</label></label>
                        <input
                            className={`${
                                outlineInputs
                                    ? 'login-input outline outline-2 outline-red-600'
                                    : 'placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1'//outline outline-2 outline-blue-500'
                            }`}
                            // {...register('username')}
                            placeholder="Email"
                        />
                        {errors?.username && (
                            <p className="text-red-600">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                    <label className="ml-4 mb-1 font-['Inter'] text-sm text-[#888888]">Password<label className="text-[#FF0101]">*</label></label>
                    <input
                        className={
                            outlineInputs
                                ? 'outline outline-2 outline-red-600 login-input placeholder-gray-700'
                                : 'placeholder-gray border border-2 border-[#888888] rounded-full text-black px-4 py-1'
                        }
                        type="password"
                        {...register('password')}
                        placeholder="Password"
                    />
                    {errors?.password && (
                        <p className="text-red-600">{errors.password.message}</p>
                    )}
                    </div>

                    <input
                        className="bg-[#8600BD] text-white rounded-full py-3 font-['InterBold'] text-sm " //py-1 px-9 
                        type="submit"
                        value="Connect"
                    />
                </form>
        </div>
	);
};
