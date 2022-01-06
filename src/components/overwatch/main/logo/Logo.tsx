import LogoImage from '../../../../assets/ow/images/overwatch-logo.png'

import './Logo.css'

export const Logo = () => {
  return (
    <a href="index.html">
      <img className="ow-logo" src={LogoImage} alt="overwatch logo" />
    </a>
  )
}
