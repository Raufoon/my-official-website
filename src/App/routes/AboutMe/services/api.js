import firebaseService from '../../../../services/firebase-service';

export const fetchAbout = () => firebaseService.database.read('/about-me');
