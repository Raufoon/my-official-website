import firebaseService from '../../services/firebase-service';

export const fetchSocialLinks = async () => {
  const socialLinks = await firebaseService.database.read('/socialLinks');
  return {socialLinks};
};
