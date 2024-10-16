import { useState, useEffect } from 'react'
import React from 'react'
import questiondata from '../quizzes/random-easy.json';

const Question = (props) => {
  
  return(
    <div data-id={props.id} className="question-container">
      {props.questionText}
      {props.answers ?  
      Object.entries(props.answers).map(([key, value]) => (
        <ul>
          <li key={key} className={props.answered? "" : ""} onClick={()=>props.handleAnswer(key, props.correctAnswer)}>
            {key}: {value}
          </li>
          </ul>
        )) : ""}

    </div>
  )
}

function App() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(()=> {
    setData(questiondata);
  }, []);

  
  const getRandomQ = () => {
    setQuestion(data[Math.floor(Math.random() * data.length)]);
    console.log(question.answers);

  }

  const handleAnswer = (key, correctAnswer) => {
        if (key.toLowerCase()==correctAnswer.toLowerCase()) {
          alert("correct!")
        }
        else {
          alert("try again!");
        }
  }


  return (
    <>
      <button onClick={getRandomQ}> Следващ въпрос </button>
      <Question id={question.index} questionText={question.question} handleAnswer={handleAnswer} correctAnswer={question.correctAnswer} answers={question.answers} />
    </>
  )
}

export default App

