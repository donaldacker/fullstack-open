const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const partitems = props.parts.map(part => 
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
  return partitems
}


const Total = (props) => {
  let numbers = props.parts.map(part => part.exercises)
  let sum = numbers.reduce((accumulator, current) => accumulator + current)
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

export default App