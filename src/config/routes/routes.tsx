import Home from '@pages/home'
import { createBrowserRouter } from 'react-router-dom'

import App from '../../App'
import { Routes } from './constants'

const routes = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />
      },
      {
        path: Routes.HORSE,
        async lazy() {
          const component = await import('@pages/horse')
          return { Component: component.default }
        }
      },
      {
        path: Routes.CLIENT,
        async lazy() {
          const component = await import('@pages/client')
          return { Component: component.default }
        }
      },
      {
        path: Routes.MATERIALS,
        async lazy() {
          const component = await import('@pages/materials')
          return { Component: component.default }
        }
      }
    ]
  }
])

export default routes
