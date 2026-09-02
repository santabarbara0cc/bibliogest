// ══════════════════════════════════════════════════════════════════════════════
//  CONFIGURACIÓN DE FIREBASE — Proyecto: bibliogest-7895d
// ══════════════════════════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyD1FuzhqbOlj9dIu2Hm2YHRlf_B3rX_xE8",
  authDomain: "bibliogest-7895d.firebaseapp.com",
  projectId: "bibliogest-7895d",
  storageBucket: "bibliogest-7895d.firebasestorage.app",
  messagingSenderId: "164070581835",
  appId: "1:164070581835:web:c6af8a456cccfe7a470fce"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
