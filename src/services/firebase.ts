import * as firebase from 'firebase';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

export default firebase.initializeApp(config);
