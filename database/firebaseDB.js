import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyDcqfOReq0cY8HTPY6BSL6MowCwQcrINkI ', //got it
  authDomain: 'testapp-f3e90.firebaseapp.com', //got it 
  databaseURL: 'https://testapp-f3e90-default-rtdb.firebaseio.com', //got it but its not needed?
  projectId: 'testapp-f3e90', //got it
  storageBucket: 'testapp-f3e90.appspot.com', //got it
  messagingSenderId: '887546068651', //got it
  appId: '1:887546068651:android:cc327acf14684f02e981ee', //got it

};

firebase.initializeApp(firebaseConfig);

export default firebase;