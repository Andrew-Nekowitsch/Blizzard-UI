import React from 'react';
import '../../../styles/index.css';
import Logo from '../../../assets/ow/images/overwatch-logo.png';
import AnaImage from '../../../assets/ow/images/ana.png';
import GenjiImage from '../../../assets/ow/images/genji.png';
import JunkratImage from '../../../assets/ow/images/junkrat.png';

export default function HomePage() {
	return (
		<>
			<div className='bg-image'></div>

			<div className='overwatch'>
				<a href='index.html'>
					<img className='ow-logo' src={Logo} alt='overwatch logo' />
				</a>

				<div className='ow-party'>
					<div className='search-player party-square'></div>
					<div className='add-player'></div>
					<img src={AnaImage} className='party-member party-square' alt='player anna'></img>
					<img src={GenjiImage} className='party-member party-square' alt='player genji'></img>
					<img src={JunkratImage} className='party-member party-square' alt='player junkrat'></img>
					<div className='player'>
						<div className='player-icon party-square'></div>
						<div className='player-name'>ANDREW</div>
						<div className='player-level'></div>
					</div>
				</div>

				<div className='ow-nav'>
					<div className='ow-main-nav'>
						<ul>
							<li>PLAY</li>
							<li>TRAINING</li>
							<li>HERO GALLERY</li>
							<li>LOOT BOX</li>
						</ul>
					</div>
					<div className='ow-sub-nav'>
						<ul>
							<li>OVERWATCH LEAGUE</li>
							<li>HIGHLIGHTS</li>
							<li>
								SOCIAL
								<div className='friend'>
									<div className='friend-icon'></div>
									<div className='friend-number'></div>
								</div>
							</li>
							<li>CAREER PROFILE</li>
							<li>OPTIONS</li>
							<li>EXIT GAME</li>
						</ul>
					</div>
				</div>

				<div className='ow-chat'>
					<div className='chat-output'></div>
					<div className='chat-input'></div>
				</div>

				<div className='special-content'>
					<div className='content-sub-label'>2018 OVERWATCH LEAGUE MVP ANDREW NEKOWITSCH</div>
					<div className='content-label'>ZEN-NAKJI LEGENDARY SKIN</div>
					<div className='ow-button yellow'>SHOP</div>
				</div>

				<div className='ow-content'></div>
			</div>
		</>
	);
}
