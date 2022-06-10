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
import BirthdayCard from '../components/Card/BirthdayCard'

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
        <div>
        <Modal show={modal} onClose={handleModalClose}>
         <img src="confetti-effect.gif"/>
        </Modal>
        <Modal show={modal} onClose={handleModalClose}>
            <BirthdayCard 
              imageLink={'https://images.unsplash.com/photo-1525957067591-2e017b3e881d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} 
              name={'Yulia Damayanti'} 
              handleCancel={handleModalClose}
            />
        </Modal>
        </div>
    </NormalPageLayout>
  )
}

export default View
