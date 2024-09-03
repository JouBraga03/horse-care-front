const Menu = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Menu</h1>
        <ul>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a></li>
        </ul>
      </div>
    </aside>
  )
}

export default Menu