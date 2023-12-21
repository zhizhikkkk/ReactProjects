import React from 'react';
import {AnswerObject} from "../App";


type Props ={
    question:string;
    answers: string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnswerObject | undefined;
    questionNumber:number;
    totalQuestion:number;
}

const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNumber,
                                           totalQuestion
                                       }) => (
    <div>
        <p className={"number"}>
            Question: {questionNumber} / {totalQuestion}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer, index) => (
                <div key={index}>
                    <button disabled={!!userAnswer} value={answer}  onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;