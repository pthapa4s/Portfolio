
import { about } from '../../portfolio'
import './about.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 className=' anim-typewriter'>
          Hi, I am <span className='about__name '>{name}...</span>
        </h1>
      )}

      {role && <h2 className='about__role'>a{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a target="_blank" href='assets/PriyaThapaResume.pdf' rel="noreferrer">
            <span type='button' className='btn btn--outline'  >
              Resume
            </span>
          </a>
          
        )}

        {social && (
          <>
            {social.github && (
              <a target= "_blank" href="https://github.com/pthapa4s?tab=repositories" rel="noreferrer" className='icon'>
              <i class="uil uil-github"></i>
        </a>
            )}
            {social.linkedin && (
              <a target= "_blank" href="https://www.linkedin.com/in/priyathapa/" rel="noreferrer" className='icon'>
                <i class="uil uil-linkedin"></i>
              
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
