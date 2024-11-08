import {Component} from 'react'
import './index.css'

const coin = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {total: 0, coinFace: coin[0], heads: 0, tails: 0}

  incHeads = tossResult => {
    this.setState(prevState => ({
      total: prevState.total + 1,
      coinFace: coin[tossResult],
      heads: prevState.heads + 1,
    }))
  }

  incTails = tossResult => {
    this.setState(prevState => ({
      total: prevState.total + 1,
      coinFace: coin[tossResult],
      tails: prevState.tails + 1,
    }))
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.incHeads(tossResult)
    } else {
      this.incTails(tossResult)
    }
  }

  render() {
    const {heads, tails, total, coinFace} = this.state
    console.log(`${heads} ${tails}`)

    return (
      <div className="coin-toss-game">
        <div className="toss-area">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img className="coin" src={coinFace} alt="toss result" />
          <button onClick={this.tossCoin} type="submit" className="toss-coin">
            Toss Coin
          </button>
          <div className="toss-results">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
