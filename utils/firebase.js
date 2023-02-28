import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDieUixngOssyYaBRKt6vPG_pDce1sYFNE",
  authDomain: "hackathon-381de.firebaseapp.com",
  databaseURL: "https://hackathon-381de-default-rtdb.firebaseio.com",
  projectId: "hackathon-381de",
  storageBucket: "hackathon-381de.appspot.com",
  messagingSenderId: "564903073280",
  appId: "1:564903073280:web:4e4dfea7ce4efc409beae5",
  measurementId: "G-RWE6YPJQXW"
};

initializeApp(firebaseConfig);

export const functions = getFunctions();
