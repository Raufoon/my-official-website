import firebaseService from '../../../../services/firebase-service';
import {makeObjectSorter} from '../../../../services/utils.js';
import LocalStorageManager from '../../../../services/local-storage-manager';

export const fetchProjects = async () => {
  if (LocalStorageManager.has('projects')) {
    return Promise.resolve(LocalStorageManager.get('projects'));
  }

  const data = await firebaseService.database.read('/projects');
  const projectsWithIds = Object.keys(data).map(key => ({...data[key], id: key}));
	const sortedProjects = projectsWithIds.sort(makeObjectSorter([
    'priority',
    ['datetime', 'end', 'year'],
	  ['datetime', 'end', 'month'],
	]));
  LocalStorageManager.save('projects', {projects: sortedProjects});
  return {projects: sortedProjects};
}
