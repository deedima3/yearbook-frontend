import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../hooks/useToast";
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
import useUserStore from "../stores/userStore";
import { useRouter } from "next/router";
import { useProgressLoader } from "../hooks/useProgressLoader";
import Loader from "../components/Loader/Loader";

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const router = useRouter();

  //   const [user, setUser, removeUser] = useLocalStorage("user", null);

  const user = useUserStore((state) => state.user);
  const changeUser = useUserStore((state) => state.changeUser);

  if(user){
    router.push("/");
  }
  

  const [toast, showToast] = useToast(5000);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const toastContentSuccess: ToastProps = {
    title: "Login Berhasil",
    message: "Selamat datang di Yearbook",
    variant: "success",
  };

  const toastContentFailed: ToastProps = {
    title: "Login Gagal",
    message: "Username atau password salah",
    variant: "error",
  };

  const [progress, isLoading, setLoading, setProgress] = useProgressLoader()

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      let result = await authApi.login(data, setProgress)
      setLoading(false)
      showToast(2000, toastContentSuccess);
      changeUser(result.accesstoken)
      router.push("/");
      console.log(result)
    }
    catch(e){
      console.log(e)
      showToast(2000, toastContentFailed);
    }    
  };

  return (
    <NormalPageLayout>
      <Title pageTitle="Login" description={"Login to use our apps"} />
      <div className="flex justify-center my-20 w-full max-w-screen-sm">
        <div className="flex flex-col justify-center w-full">
          <CustomTitle
            title="Login To Site"
            desc="Login to site to use the create page menu, and create your own page"
            extraClasses="font-bold text-6xl text-center"
            extraClassesSub="text-md"
            outlineWidth={8}
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-screen-lg"
          >
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
              </div>
            </div>
            <div className="flex items center gap-10 justify-center">
              <CustomLinkButton
                type="reset"
                extraClasses="bg-gray-400 my-4"
                href={"/login"}
              >
                RESET
              </CustomLinkButton>
              <CustomButton type="submit" extraClasses={"my-4"}>
                LOGIN
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

export default Login;
