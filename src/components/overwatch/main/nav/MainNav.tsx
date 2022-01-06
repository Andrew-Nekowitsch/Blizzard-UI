import './MainNav.css'
export const MainNav = () => {
  return (
    <div className="ow-nav">
      <div className="ow-main-nav">
        <ul>
          <li>PLAY</li>
          <li>TRAINING</li>
          <li>HERO GALLERY</li>
          <li>LOOT BOX</li>
        </ul>
      </div>
      <div className="ow-sub-nav">
        <ul>
          <li>OVERWATCH LEAGUE</li>
          <li>HIGHLIGHTS</li>
          <li>
            SOCIAL
            <div className="friend">
              <div className="friend-icon"></div>
              <div className="friend-number"></div>
            </div>
          </li>
          <li>CAREER PROFILE</li>
          <li>OPTIONS</li>
          <li>EXIT GAME</li>
        </ul>
      </div>
    </div>
  )
}
