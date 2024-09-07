import { LoginForm } from '@modules/login'
import clsx from 'clsx'

import Logo from '@/assets/horse_care.png'

import style from './style.module.css'

const Login = () => {
  return (
    <div className="flex justify-start items-start h-screen">
      <div className="flex-grow-2 items-center justify-center h-full">
        <figure className="flex h-full flex-col items-center justify-center">
          <img src={Logo} alt="Vet Care" />
          <h2 className={clsx('font-bold text-5xl', style.title)}> Vet Care </h2>
        </figure>
      </div>

      <div className="flex-col p-5 h-full lg:min-w-480 border-l border-l-gray-500">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
