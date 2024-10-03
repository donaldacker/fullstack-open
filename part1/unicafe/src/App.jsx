import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback handleGood={() => setGood(good + 1)}
        handleNeutral={() => setNeutral(neutral + 1)}
        handleBad={() => setBad(bad + 1)} 
      />
      <Statistics goodCount={good} 
        neutralCount={neutral} 
        badCount={bad} 
      />
    </div>
  )
}

const Feedback = (props) => {
  return(
    <div>
      <h1>
        give feedback
      </h1>
      <Button text="good" handleClick={props.handleGood} />
      <Button text="neutral" handleClick={props.handleNeutral} />
      <Button text="bad" handleClick={props.handleBad} />
    </div>
  )

}

const Statistics = (props) => {
  return(
    <div>
      <h1>
        statistics
      </h1>
      <p>
        good {props.goodCount}
      </p>
      <p>
        neutral {props.neutralCount}
      </p>
      <p>
        bad {props.badCount}
      </p>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

}


export default App