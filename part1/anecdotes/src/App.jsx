import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  
  const zeroes = new Uint32Array(anecdotes.length)
  const [votes, setVotes] = useState(zeroes)

  const getRandInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleClickNext = () => {
    setSelected(getRandInt(anecdotes.length))
  }

  const handleClickVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotesIndex = () => {
    let index = 0
    let highest = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > highest) {
        highest = votes[i]
        index = i
      }
    }
    return index
  }

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {anecdotes[selected]}
      <br />
      This quote has {votes[selected]} votes.
      <br />
      <Button text="Vote" handleClick={handleClickVote} />
      <Button text="Next anecdote" handleClick={handleClickNext} />
      <h1>
        Anecdote with most votes
      </h1>
      {anecdotes[mostVotesIndex()]}
      <br />
      This quote has {votes[mostVotesIndex()]} votes.

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