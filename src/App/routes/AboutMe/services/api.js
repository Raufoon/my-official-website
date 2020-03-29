import firebaseService from '../../../../services/firebase-service';

export const fetchBio = () => firebaseService.database.read('/about-me/bio');
