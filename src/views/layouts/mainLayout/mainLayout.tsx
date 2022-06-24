import {FC, ReactNode} from 'react'

interface IMainLayoutProps {
    children: ReactNode
}

const MainLayout:FC<IMainLayoutProps> = (props) => {
  const {children} = props
  return (
    <>
    <header>header</header>
    {children}
    <footer>footer</footer>
    </>
  )
}

export default MainLayout
