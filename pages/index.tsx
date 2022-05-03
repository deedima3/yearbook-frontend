import type { NextPage } from 'next'
import ProfileCard from '../components/Card/ProfileCard'
import NormalPageLayout from '../components/Layout/NormalPageLayout'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <NormalPageLayout>
      <ProfileCard imageLink={'https://images.unsplash.com/photo-1525957067591-2e017b3e881d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} name={'Yulia Damayanti'} description={'Idk maybe but no'}/>
    </NormalPageLayout>
  )
}

export default Home
