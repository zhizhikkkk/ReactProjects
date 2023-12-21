import React from 'react';
import {AnswerObject} from "../App";
import {ButtonWrapper, Wrapper} from "./QuestionCard.styles";


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
    <Wrapper>
        <p className={"number"}>
            Question: {questionNumber} / {totalQuestion}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer, index) => (
                <ButtonWrapper
                    key={index}
                    correct={userAnswer?.correctAnswer===answer}
                    userClicked = {userAnswer?.answer===answer}
                >
                    <button disabled={!!userAnswer} value={answer}  onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;