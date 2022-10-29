import React from "react"
import { Navigate } from "react-router-dom"

const HomePage = React.lazy(() => import("@/views/home-page"))
const LoginPage = React.lazy(() => import("@/views/login-page"))
const DetailPage = React.lazy(() => import("@/views/detail-page"))
const EntirePage = React.lazy(() => import("@/views/entire-page"))

const routes = [
  {
    path: '/',
    // 重定向
    element: <Navigate to={'/home'} />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/detail',
    element: <DetailPage />
  },
  {
    path: '/entire',
    element: <EntirePage />
  }
]

export default routes