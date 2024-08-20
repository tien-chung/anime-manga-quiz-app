import { useContext, useEffect } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
    const [ quizState, dispatch ] = useContext(QuizContext);
    const disableNextButtonClass = quizState.currentAnswer ? '' : 'disabled-button';
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple&encode=url3986';

    useEffect(() => {
        if (quizState.questions.length > 0) {
            return;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                console.log('data', data);
                dispatch({ type: 'LOADED_QUESTIONS', payload: data.results})
            })
        }
    );
    
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="result">
                    <div className="congratulations">Congratulations</div>
                    <div className="result-info">
                        <div>You have completed the quiz.</div>
                        <div>You've got {quizState.totalCorrectAnswers} of {quizState.questions.length} correct!</div>
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: 'RESET_QUESTION'})}>Reset</div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && (<div>
                <div className="score">
                    Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </div>
                <Question/>
                <div className={`next-button ${disableNextButtonClass}`} onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next Question</div>
            </div>)}
        </div>
    )
}

export default Quiz;
