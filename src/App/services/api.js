import firebaseService from '../../services/firebase-service';
import LocalStorageManager from '../../services/local-storage-manager';

export const fetchSocialLinks = async () => {
  if (LocalStorageManager.has('socialLinks')) {
    return Promise.resolve(LocalStorageManager.get('socialLinks'));
  }
  const socialLinks = await firebaseService.database.read('/socialLinks');
  LocalStorageManager.save('socialLinks', {socialLinks});
  return {socialLinks};
};
