import type { NextPage } from 'next'
import HeaderCard from '../components/Card/HeaderCard'
import ProfileCard from '../components/Card/ProfileCard'
import NormalPageLayout from '../components/Layout/NormalPageLayout'


const View = () => {
  return (
    <NormalPageLayout> 
        <div className='flex justify-center'>
        <HeaderCard imageLink={'https://images.unsplash.com/photo-1525957067591-2e017b3e881d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} 
        name={'Yulia Damayanti'} 
        description={'An invisible connection system; a mystical portal between Illustrator and After Effects. Transfer shapes as you need them without importing, converting or redrawing. The vector workflow you imagined between apps created by the same company.'}/>
        </div>
    </NormalPageLayout>
  )
}

export default View