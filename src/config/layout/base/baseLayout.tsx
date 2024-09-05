import { Outlet } from 'react-router-dom'

import { Body, Header, Menu } from './components'

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Menu />

        <Body>
          <Outlet />
        </Body>
      </div>
    </div>
  )
}

export default BaseLayout
