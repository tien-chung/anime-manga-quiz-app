import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";

const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: '',
    totalCorrectAnswers: 0,
}

const reducer = (state, action) => {    
    switch (action.type) {
        case 'NEXT_QUESTION': {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: '',
            }
        }
        case 'RESET_QUESTION': {
            return initialState;
        }
        case 'SELECT_ANSWER': {
            const totalCorrectAnswers = action.payload === state.questions[state.currentQuestionIndex].correctAnswer 
                ? state.totalCorrectAnswers + 1
                : state.totalCorrectAnswers;
            return {
                ...state,
                currentAnswer: action.payload,
                totalCorrectAnswers,
            }
        }
        default: return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
