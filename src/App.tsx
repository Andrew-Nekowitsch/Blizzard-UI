import { Advertisements } from './components/overwatch/main/advertisements/Advertisements'
import { Logo } from './components/overwatch/main/logo/Logo'
import { Party } from './components/overwatch/main/party/Party'
import { MainNav } from './components/overwatch/main/nav/MainNav'
import { MainChat } from './components/overwatch/main/chat/MainChat'

import './styles/index.css'

export const App = () => {
  return (
    <>
      <div className="bg-image"></div>

      <div className="overwatch">
        <Logo />
        <Party />
        <MainNav />
        <Advertisements />
        <MainChat />
      </div>
    </>
  )
}
