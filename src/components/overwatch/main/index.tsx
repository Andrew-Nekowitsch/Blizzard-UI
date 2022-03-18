import { Advertisements } from './advertisements/Advertisements';
import { Logo } from './logo/Logo';
import { Party } from './party/Party';
import { MainNav } from './nav/MainNav';
import { MainChat } from './chat/MainChat';

import MenuImage from '../../../assets/ow/images/main-menu.jpg';
import './index.css';
export const Index = () => {
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
