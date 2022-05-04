import React from "react";
import CustomTitle from "./CustomTitle";

const BirthdayTitle = () => {
    return (
        <div className='flex flex-col text-center'>
        <h1 className='text-9xl text-brand-brown font-black'>This Week</h1>
        <CustomTitle 
            title="Birthday Celebration" 
            desc="There’s no too late to say happy birthday, but only if it’s within a week" 
            extraClasses='font-black'
            size='w-2/3 text-2xl'
        />
        </div>
    );
};

export default BirthdayTitle;