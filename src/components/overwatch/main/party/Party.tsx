import SearchPlayerImage from '../../../../assets/ow/images/search-players.jpg';
import AddPlayerImage from '../../../../assets/ow/images/add-player.jpg';
import AnaImage from '../../../../assets/ow/images/ana.png';
import PerformanceStatImage from '../../../../assets/ow/images/overwatch-performance-stat.png';

import './Party.css';

export const Party = () => {
	return (
		<>
			<div className='ow-party flex-row'>
				<img
					className='search-player party-square float-left'
					src={SearchPlayerImage}
					alt='search for a player'></img>
				<img
					className='add-player party-square float-left'
					src={AddPlayerImage}
					alt='Add player to party'></img>
				<div className='player float-left'>
					<img src={AnaImage} className='player-icon party-square float-left' alt='ana'></img>
					<div className='player-name-container flex-column'>
						<div className='player-name-stats'>
							<div className='player-name'>ANDREW</div>
							<div className='player-stats flex-row'>
								<div className='player-level-outer float-left'>
									<div className='player-level-bubble player-level-inner bronze'>20</div>
								</div>
								<div className='player-level-bubble player-stat-separator sky-blue float-left'>
									<div className='player-level-bubble player-stat-ring sky-blue flex-row'>
										<div className='performance-padding float-left'>1</div>
										<img
											className='performance-padding small-icon float-left'
											src={PerformanceStatImage}
											alt='performance'></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
