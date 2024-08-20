import { createRoot } from 'react-dom/client';
import Quiz from './components/Quiz';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Quiz />);
