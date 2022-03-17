import { Advertisements } from './components/overwatch/main/advertisements/Advertisements';
import { Logo } from './components/overwatch/main/logo/Logo';
import { Party } from './components/overwatch/main/party/Party';
import { MainNav } from './components/overwatch/main/nav/MainNav';
import { MainChat } from './components/overwatch/main/chat/MainChat';

import MenuImage from './assets/ow/images/main-menu.jpg';

import './styles/index.css';

export const App = () => {
	return (
		<>
			<div className='overwatch v-h-center'>
				<img src={MenuImage} alt='overwatch ui' className='bg-image'></img>
				<Logo />
				<Party />
				<MainNav />
				<Advertisements />
				<MainChat />
			</div>
		</>
	);
};
