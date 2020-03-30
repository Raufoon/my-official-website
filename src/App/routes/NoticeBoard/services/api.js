import firebaseService from '../../../../services/firebase-service';
import {makeObjectSorter} from '../../../../services/utils.js';
import LocalStorageManager from '../../../../services/local-storage-manager';

export const fetchNotices = async () => {
  if (LocalStorageManager.has('notices')) {
    return Promise.resolve(LocalStorageManager.get('notices'));
  }
  const data = await firebaseService.database.read('/notices');
  const sortedNotices = Object.values(data).sort(makeObjectSorter([
    'importance',
    ['datetime', 'y'],
    ['datetime', 'm'],
    ['datetime', 'd'],
  ]));
  LocalStorageManager.save('notices', {notices: sortedNotices});
  return {notices: sortedNotices};
}
