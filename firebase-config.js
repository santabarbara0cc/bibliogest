// ══════════════════════════════════════════════════════════════════════════════
//  CONFIGURACIÓN DE FIREBASE
//
//  Estos valores (apiKey, etc.) NO son secretos como una contraseña: es normal
//  y seguro que aparezcan en el código de una app web pública. La seguridad
//  real de tus datos se controla con las "Reglas de Firestore" (ver README.md).
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
