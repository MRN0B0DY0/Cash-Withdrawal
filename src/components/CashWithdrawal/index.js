import {Component} from 'react'
import WithdrawalAmount from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onClickButton = id => {
    const {amount} = this.state
    let keyPressed
    if (id === 1) {
      console.log('50')
      keyPressed = 50
    } else if (id === 2) {
      console.log('100')
      keyPressed = 100
    } else if (id === 3) {
      console.log('200')
      keyPressed = 200
    } else {
      console.log('500')
      keyPressed = 500
    }

    this.setState({amount: amount - keyPressed})
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="container">
        <div className="atm-card">
          <div className="profile">
            <div className="avatar">S</div>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balance-section">
            <p className="label">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-section">
            <p className="withdraw">Withdraw</p>
            <p className="choose-label">CHOOSE SUM (IN RUPEES)</p>
            <ul className="buttons-list">
              {denominationsList.map(eachItem => (
                <WithdrawalAmount
                  amountList={eachItem}
                  onClickButton={this.onClickButton}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
