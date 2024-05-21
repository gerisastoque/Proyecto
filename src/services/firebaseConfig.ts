// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
const dataBase = require('firebase/firestore');
const strg = require('firebase/storage');
require('firebase/firestore');

const { initializeApp } = firebase;
const { getFirestore } = dataBase;
const { getStorage } = strg;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCU42uuS55TFRUWS2KJZzoQKjhTJT1Jciw',
	authDomain: 'proyecto-final-c5690.firebaseapp.com',
	projectId: 'proyecto-final-c5690',
	storageBucket: 'proyecto-final-c5690.appspot.com',
	messagingSenderId: '183150005663',
	appId: '1:183150005663:web:791e23ff92190ffddf41aa',
	measurementId: 'G-YKJ4DK3G23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
