import firebaseService from '../../../../services/firebase-service';
import LocalStorageManager from '../../../../services/local-storage-manager';

export const fetchAbout = async () => {
  if (LocalStorageManager.has('about-me')) {
    return Promise.resolve(LocalStorageManager.get('about-me'));
  }

  const data = await firebaseService.database.read('/about-me');
  LocalStorageManager.save('about-me', data);
  return data;
}
