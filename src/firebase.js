import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBF5Ucw1XLZS4ZIBaOTdzYPIxz7rfT_THY",
  authDomain: "trainingproject-3f226.firebaseapp.com",
  projectId: "trainingproject-3f226",
  storageBucket: "trainingproject-3f226.appspot.com",
  messagingSenderId: "855928083971",
  appId: "1:855928083971:web:40d59a521992fd8fe3a036",
  databaseURL:
    "https://trainingproject-3f226-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
