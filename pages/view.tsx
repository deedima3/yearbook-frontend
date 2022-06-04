import type { NextPage } from 'next'
import NormalPageLayout from '../components/Layout/NormalPageLayout'
import CustomTitle from '../components/Title/CustomTitle'
import HeaderCard from '../components/Card/HeaderCard'
import Modal from '../components/Modals/Modal'
import ConfirmCard from '../components/Card/ModalsCard'
import { useModal } from '../hooks/useModal'
import ToastCard from '../components/Card/ToastCard'
import TextInput from '../components/Form/TextInput'
import PasswordInput from '../components/Form/PasswordInput'
import BirthdayTitle from '../components/Title/BirthdayTitle'

const View = () => {
    const [modal, setModal, handleModalClose, handleModalOpen] =
    useModal();
  return (
    <NormalPageLayout> 
        <HeaderCard 
            imageLink={'https://images.unsplash.com/photo-1525957067591-2e017b3e881d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} 
            name={'Yulia Damayanti'} 
            description={'Idk maybe but no'}
        />
        <button onClick={handleModalOpen} className="bg-brand-brown text-white mt-5">Open Modals</button>
        <Modal show={modal} onClose={handleModalClose}>
            <ConfirmCard
            name={'Yulia'}
            handleCancel={handleModalClose}
            />
        </Modal>
        <div className="absolute bottom-0 right-0 py-8 px-10 z-20">
        <ToastCard  title="Login Success" 
          message="Wrong username or password"
          color ="bg-yellow-500 text-brand-red"
          shadow = "shadow-failed-shadow" />
        </div>
    </NormalPageLayout>
  )
}

export default View
