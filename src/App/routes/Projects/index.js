import React from 'react'
import withFetch from '../../components/HOCs/withFetch'
import {fetchProjects} from './services/api.js'
import ProjectCard from './components/ProjectCard'
import './style.css'

const Projects = ({projects}) => {
  return (
    <div className="Projects">
      {
        projects.map(project => {
          const {id} = project;
          return (
            <ProjectCard key={id} className="project" project={project}/>
          )
        })
      }
    </div>
  )
}

export default withFetch(Projects, fetchProjects)
