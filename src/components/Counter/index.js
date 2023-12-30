import './index.css'

const Counter = props => {
  const {quantity, increaseBtn, decreaseBtn} = props

  const onIncrement = () => {
    increaseBtn()
  }

  const onDecrement = () => {
    decreaseBtn()
  }

  return (
    <div className="counter-count">
      <button type="button" onClick={onDecrement}>
        -
      </button>
      <div>{quantity}</div>
      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  )
}

export default Counter
