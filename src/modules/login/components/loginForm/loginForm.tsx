import { Eye } from '@phosphor-icons/react'
import { useRef, useState } from 'react'

import HorseCare from '@/assets/horse_care.png'

const LoginForm = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const refPassword = useRef<HTMLInputElement>(null)

  const formItemClass = 'flex flex-col mb-5 w-full'

  const inputClass =
    'bg-transparent rounded-lg border border-gray-500 p-2 text-gray-500 focus-visible:border-gray-500 w-full'

  const labelClass = 'text-gray-500 w-full'

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    console.log('User Infos ', { user, password })
  }

  const handleShowPassWord = () => {
    if (!refPassword.current) return

    if (refPassword.current.type === 'text') {
      return (refPassword.current.type = 'password')
    }

    if (refPassword.current.type === 'password') {
      refPassword.current.type = 'text'
      return
    }
  }

  return (
    <div>
      <header>
        <div className="">
          <figure className="flex items-center">
            <img className="w-40 h-40" src={HorseCare} alt="" />
            <h2 className="text-gray-500 font-bold"> Vet Care </h2>
          </figure>
        </div>
      </header>

      <main>
        <form className="flex flex-col items-center justify-start h-full">
          <div className={formItemClass}>
            <label className={labelClass} htmlFor="user">
              Usuário:
            </label>
            <input type="text" className={inputClass} id="user" onChange={(e) => setUser(e.target.value)} />
          </div>

          <div className={formItemClass}>
            <label className={labelClass} htmlFor="password">
              Senha:
            </label>

            <div className="relative">
              <input
                ref={refPassword}
                type="password"
                className={inputClass}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Eye
                aria-label="Ver senha"
                size="20"
                color="white"
                className="absolute top-3 right-4 cursor-pointer font-bold"
                onClick={handleShowPassWord}
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  )
}

export default LoginForm
