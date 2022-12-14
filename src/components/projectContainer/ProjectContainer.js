import uniqid from 'uniqid'
import './projectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
          <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener"
          aria-label='source code'
          className='link link--icon'
          >
          <i class="uil uil-github"></i>
        </a>
    )}

    {project.livePreview && (
           <a
           href={project.livePreview}
          target="_blank"
          rel="noopener"
           aria-label='source code'
           className='link link--icon'
           >
         <i class="uil uil-external-link-alt"></i>
           
         </a>
    )}
  </div>
)

export default ProjectContainer
