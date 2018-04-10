```js
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ethos: false,
      cvc: false,
      ink: true,
    }
    this.toggleCheck = this.toggleCheck.bind(this)
  }
  toggleCheck(e) {
    const name = e.target.name

    this.setState({
      [name]: !this.state[name],
    })
  }
  render() {
    return (
      <div>
        <CheckboxGroup direction="column">
          <Checkbox
            id="ethos"
            name="ethos"
            value="ethos"
            checked={this.state.ethos}
            onClick={this.toggleCheck}
          >
            ETHOS
          </Checkbox>
          <Checkbox
          id="cvc"
            name="cvc"
            value="cvc"
            checked={this.state.cvc}
            onClick={this.toggleCheck}
          >
            CVC
          </Checkbox>
          <Checkbox
            id="ink"
            name="ink"
            value="ink"
            checked={this.state.ink}
            onClick={this.toggleCheck}
          >
            INK
          </Checkbox>
        </CheckboxGroup>
      </div>
    )
  }
}
;<App />
```
