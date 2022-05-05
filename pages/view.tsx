import type { NextPage } from 'next'
import ProfileCard from '../components/Card/ProfileCard'
import PasswordInput from '../components/Form/PasswordInput'
import TextInput from '../components/Form/TextInput'
import NormalPageLayout from '../components/Layout/NormalPageLayout'
import BirthdayTitle from '../components/Title/BirthdayTitle'
import CustomTitle from '../components/Title/CustomTitle'
import HeaderCard from '../components/Card/HeaderCard'
import ProfileCard from '../components/Card/ProfileCard'
import NormalPageLayout from '../components/Layout/NormalPageLayout'

const View = () => {
  return (
    <NormalPageLayout> 
        {/* <BirthdayTitle /> */}
        <CustomTitle   
         title="Login To Site" 
         desc="Login to site to use the create page menu, and create your own page" 
         extraClasses='font-bold'
         size='w-11/12 text-xl'
         />
         <div className='flex flex-col w-full gap-5 mt-10'>
        <TextInput title='Email'placeholder='Masukan email' type='email'/>
         <PasswordInput title='Password' placeholder='Masukan password'/>
         </div>
    </NormalPageLayout>
  )
}

export default View