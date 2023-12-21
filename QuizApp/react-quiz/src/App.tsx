import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
import QuestionCard from "./components/QuestionCard";


type AnswerObject = {
    question:string,
    answer:string,
    correct:boolean,
    correctAnswer:string
}




const TOTAL_QUESTIONS =10;

function App() {
    const [loading,setLoading]= useState(false)
    const [questions,setQuestions] =useState<QuestionState[]>([])
    const [number,setNumber] =useState(0)
    const [userAnswers,setUserAnswers]=useState<AnswerObject[]>([])
    const [score,setScore]=useState(0)
    const [gameOver,setGameOver]=useState(true)


    console.log(questions)
    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        )
        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    };

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion = ()=>{

  }

  return (
    <div className={"App"}>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length===TOTAL_QUESTIONS?(
          <button className={"start"} onClick={startQuiz}>
              Start
          </button>
      ):null}

      {!gameOver? <p className={"score"}>Score:</p> :null}
      {!loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
            <QuestionCard
                questionNumber={number+1}
                totalQuestion={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            />
        )}

      <button className={"next"} onClick={nextQuestion}>NextQuestion</button>
    </div>
  );
}

export default App;
