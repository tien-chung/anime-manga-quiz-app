import { createRoot } from 'react-dom/client';
import Quiz from './components/Quiz';
import './index.css';
import { QuizProvider } from './contexts/quiz';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <QuizProvider>
        <Quiz />
    </QuizProvider>
);
