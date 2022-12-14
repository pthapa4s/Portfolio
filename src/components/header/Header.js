import { header } from '../../portfolio'
import Nav from '../nav/Nav'
import './header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Nav/>
    </header>
  )
}

export default Header
