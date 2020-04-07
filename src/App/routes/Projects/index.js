import React from 'react'
import useFetch from '../../hooks/useFetch'
import {fetchProjects} from './services/api.js'
import ProjectCard from './components/ProjectCard'
import Loader from '../../components/Loader'
import './style.css'

const Projects = () => {
  const [{projects}, isLoading, hasError] = useFetch(fetchProjects);

  if (isLoading) return <Loader className="Projects"/>

  return (
    <div className="Projects">
      {hasError && <b>Failed to load projects</b>}

      {
        projects && projects.map(project => {
          const {id} = project;
          return (
            <ProjectCard key={id} className="project" project={project}/>
          )
        })
      }
    </div>
  )
}

export default Projects
