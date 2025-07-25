import './index.css'

const WithdrawalAmount = props => {
  const {amountList, onClickButton} = props
  const {id, value} = amountList

  const onClickbutton = () => {
    onClickButton(id)
  }

  return (
    <li>
      <button type="button" className="withdraw-button" onClick={onClickbutton}>
        {value}
      </button>
    </li>
  )
}

export default WithdrawalAmount
