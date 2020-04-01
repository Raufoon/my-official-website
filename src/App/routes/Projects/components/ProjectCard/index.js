import React, {useState} from 'react'
import ImageSlider from './components/ImageSlider'
import './style.css'

const ProjectCard = ({project, className}) => {
  const {photos, title, summary} = project;
  const {tools, links} = project;
  const [isInfoVisible, setVisibility] = useState(false);

  return (
    <div className={`ProjectCard ${className}`}
      onMouseOver={() => setVisibility(true)}
    >
      <ImageSlider className='imageSlider' images={photos}/>

      <div className="projectInfo"
        style={{left: isInfoVisible ? '0':'100%'}}
        onMouseOut={() => setVisibility(false)}>
        <h1>{title}</h1>
        <h3>{summary}</h3>
        {
          tools.map((toolName, idx) => <div className="projectTool" key={idx}>{toolName}</div>)
        }
        <br/>
        <div className="linkArea">
          {
            links.map(({title, url}) => <a key={title} href={url} target="_blank" rel="noopener noreferrer">{title}</a>)
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
