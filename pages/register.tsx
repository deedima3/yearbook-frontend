import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../components/Hooks/useToast";
import Toast from "../components/Toast/Toast";
import { ToastProps } from "../interfaces/toastInterfaces";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import TextInput from "../components/Form/TextInput";
import PasswordInput from "../components/Form/PasswordInput";
import CustomTitle from "../components/Title/CustomTitle";
import CustomButton from "../components/Button/CustomButton";
import CustomLinkButton from "../components/Button/CustomLinkButton";

const Register = () => {
  const schema = yup.object({
    email: yup.string().email("Email must be a valid email address").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

//   const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [toast, showToast] = useToast(5000);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const toastContentSuccess : ToastProps = {
    title: "Login Berhasil",
    message: "Selamat datang di Minerva",
    variant : "success"
  }

  const toastContentFailed : ToastProps = {
    title: "Login Gagal",
    message: "Username atau password salah",
    variant : "error"
  }

  const onSubmit = (data: any) => {
    console.log("Push Data");
    console.log(data);
      showToast(2000, toastContentSuccess);
      showToast(2000, toastContentFailed);
  };

  return (
    <NormalPageLayout>
       <div className="flex justify-center my-20">
           <div className="flex flex-col justify-center">
              <CustomTitle   
                 title="Register To Site" 
                 desc="Dont Have and Account?, Lets Register to the Site to use our sevices" 
                 extraClasses='font-bold'
                 size='w-11/12 text-xl'
              />
               <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="max-w-screen">
                       <div className='flex flex-col gap-5 mt-10 mb-6'>
                           <TextInput 
                               title='Email' placeholder='Enter email address' 
                               type='email' {...register("email")}/>
                            {errors.email && (
                                <p className="text-red-400 text-xs -mt-3">{errors.email.message}</p>
                              )}
                            <PasswordInput 
                               title='Password' placeholder='Masukan password' 
                               {...register("password")}/>
                            {errors.password && (
                                <p className="text-red-400 text-xs -mt-3">{errors.password.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items center gap-10 justify-center">
                    <CustomButton type = "submit" extraClasses={"my-4"}>
                    REGISTER
                    </CustomButton>
                    <CustomLinkButton type="button" extraClasses="bg-gray-400 my-4" href={"/login"}>
                        LOGIN
                    </CustomLinkButton>
                    </div>
                </form>
            </div>
       </div>
      <Toast show={toast.show} title={toast.title} message={toast.message} variant={toast.variant}/>
    </NormalPageLayout>
  );
};

export default Register;