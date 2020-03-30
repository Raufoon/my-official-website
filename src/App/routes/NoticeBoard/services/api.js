import firebaseService from '../../../../services/firebase-service';
import {makeObjectSorter} from '../../../../services/utils.js';

export const fetchNotices = async () => {
  const data = await firebaseService.database.read('/notices');
  const sortedNotices = Object.values(data).sort(makeObjectSorter([
    'importance',
    ['datetime', 'y'],
    ['datetime', 'm'],
    ['datetime', 'd'],
  ]));
  return {notices: sortedNotices};
}
