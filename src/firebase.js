import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCU9zZY1YylZR4DUdou0h377iORSfF6RHg",
  authDomain: "proyecto-react-4219a.firebaseapp.com",
  projectId: "proyecto-react-4219a",
  storageBucket: "proyecto-react-4219a.firebasestorage.app",
  messagingSenderId: "1066491890302",
  appId: "1:1066491890302:web:e25d5c93f643d53102e62f",
  measurementId: "G-VEJ2CRE6ET"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics
const analytics = getAnalytics(app);

// Inicializa Auth y Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exporta para usar en otros archivos
export { auth, provider, analytics };
