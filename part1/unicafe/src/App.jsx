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
  let g = props.goodCount
  let n = props.neutralCount
  let b = props.badCount
  let total = g + n + b

  
  if (total === 0) {
    return (
      <div>
        <h1>
          Statistics
        </h1>
        No feedback given
      </div>
    )
  }

  let average = (total > 0) ? (g - b) / total : 0 // zero safety isn't necessary after that if, but it still seems smart
  let positivePercent = (total > 0) ? g / total * 100 : 0

  return(
    <div>
      <h1>
        statistics
      </h1>
      <p>
        good {g}
      </p>
      <p>
        neutral {n}
      </p>
      <p>
        bad {b}
      </p>
      <p>
        all {total}
      </p>
      <p>
        average {average}
      </p>
      <p>
        positive {positivePercent}%
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