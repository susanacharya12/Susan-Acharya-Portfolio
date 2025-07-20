import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set document title here:
document.title = "Susan Acharya Portfolio";

createRoot(document.getElementById("root")!).render(<App />);
