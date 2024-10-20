import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout/Layout'
import Dashboard from './Views/Dashboard/Dashboard'

import { routes } from './routes'


const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path='/' element={ <Dashboard /> }/>

          <Route index element={<Dashboard />} />
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}

        </Route>
      </Routes>
    </Suspense>
  )
}

export default App