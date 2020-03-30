import firebaseService from '../../../../services/firebase-service';
import {makeObjectSorter} from '../../../../services/utils.js';

export const fetchProjects = async () => {
  const data = await firebaseService.database.read('/projects');
  const projectsWithIds = Object.keys(data).map(key => ({...data[key], id: key}));
	const sortedProjects = projectsWithIds.sort(makeObjectSorter([
    'priority',
    ['datetime', 'end', 'year'],
	  ['datetime', 'end', 'month'],
	]));
  return {projects: sortedProjects};
}
