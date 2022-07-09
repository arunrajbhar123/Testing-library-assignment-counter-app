import React from 'react'

const CounterButton = ({handleAdd,handleReduce}) => {
  return (
    <div>
      <button data-testid="cButton_Add" onClick={handleAdd}>Add</button>
      <button data-testid="cButton_Reduce" onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default CounterButton
