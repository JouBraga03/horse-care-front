import { Link } from 'react-router-dom'

import { Routes } from '../../../../routes'

const Menu = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Menu</h1>
        <ul>
          <Link to={Routes.HOME} className="block py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to={Routes.HORSE} className="block py-2 px-4 hover:bg-gray-700">
            Cavalos
          </Link>
          <Link to={Routes.CLIENT} className="block py-2 px-4 hover:bg-gray-700">
            Clientes
          </Link>
          <Link to={Routes.MATERIALS} className="block py-2 px-4 hover:bg-gray-700">
            {' '}
            Materiais{' '}
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default Menu
