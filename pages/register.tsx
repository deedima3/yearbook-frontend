import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../hooks/show/useToast";
import Toast from "../components/Toast/Toast";
import { ToastProps } from "../interfaces/toastInterfaces";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import TextInput from "../components/Form/TextInput";
import PasswordInput from "../components/Form/PasswordInput";
import CustomTitle from "../components/Title/CustomTitle";
import CustomButton from "../components/Button/CustomButton";
import CustomLinkButton from "../components/Button/CustomLinkButton";
import Title from "../components/SEO/Title";
import authApi from "../api/auth/authApi";
import Loader from "../components/Loader/Loader";
import { useProgressLoader } from "../hooks/show/useProgressLoader";

const Register = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    nickname : yup.string().required("Nickname is required"),
    nim : yup.string().required("NIM is required").matches(/(20085610)([0-9])/, 'NIM should be following nim format'),
  });

  //   const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [toast, showToast] = useToast(5000);
  const [progress, isLoading, setLoading, setProgress] = useProgressLoader()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const toastContentSuccess: ToastProps = {
    title: "Register Berhasil",
    message: "Selamat datang di Yearbook",
    variant: "success",
  };

  const toastContentFailed: ToastProps = {
    title: "Register Gagal",
    message: "Data yang diinput salah",
    variant: "error",
  };

  const onSubmit = async (data: any) => {
    console.log("Push Data");
    console.log(data);
    try {
      setLoading(true);
      let response = await authApi.register(data, setProgress)
      setLoading(false);
      showToast(2000, toastContentSuccess);
    }
    catch(e){
      console.log(e)
      showToast(2000, toastContentFailed);
    }
  };

  return (
    <NormalPageLayout>
      <Title pageTitle="Register" description={"Dont Have and Account?, Lets Register to the Site to use our sevices"} />
      <div className="flex justify-center my-6 w-full max-w-screen-sm">
        <div className="flex flex-col justify-center w-full">
          <CustomTitle
            title="Register To Site"
            desc="Dont Have and Account?, Lets Register to the Site to use our sevices"
            extraClasses="font-bold text-6xl text-center"
            extraClassesSub="text-md"
            outlineWidth={8}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-screen-lg">
              <div className="w-full flex flex-col gap-5 mt-10 mb-6">
                <TextInput
                  title="Email"
                  placeholder="Enter email address"
                  type="email"
                  register={register}
                  name={"email"}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs -mt-3">
                    {errors.email.message}
                  </p>
                )}
                <PasswordInput
                  title="Password"
                  placeholder="Masukan password"
                  register={register}
                  name={"password"}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs -mt-3">
                    {errors.password.message}
                  </p>
                )}
                <TextInput
                  title="NIM"
                  placeholder="Enter NIM"
                  type="nim"
                  register={register}
                  name={"nim"}
                />
                {errors.nim && (
                  <p className="text-red-400 text-xs -mt-3">
                    {errors.nim.message}
                  </p>
                )}
                <TextInput
                  title="Nickname"
                  placeholder="Enter nickname"
                  type="nickname"
                  register={register}
                  name={"nickname"}
                />
                {errors.nickname && (
                  <p className="text-red-400 text-xs -mt-3">
                    {errors.nickname.message}
                  </p>
                )}
                <TextInput
                  title="Birthday"
                  placeholder="Enter Date of Birth"
                  type="date"
                  register={register}
                  name={"birthDate"}
                />
                {errors.nickname && (
                  <p className="text-red-400 text-xs -mt-3">
                    {errors.nickname.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items center gap-10 justify-center">
              <CustomLinkButton
                type="reset"
                extraClasses="my-4 bg-slate-400 hover:bg-brand-brown"
                href={"/login"}
              >
                RESET
              </CustomLinkButton>
              <CustomButton type="submit" extraClasses={"my-4"}>
                REGISTER
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
      <Toast
        show={toast.show}
        title={toast.title}
        message={toast.message}
        variant={toast.variant}
      />
      <Loader isLoading={isLoading} progress={progress}/>
    </NormalPageLayout>
  );
};

export default Register;
