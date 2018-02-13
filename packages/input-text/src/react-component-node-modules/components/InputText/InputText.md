```js
class App extends React.Component {
  constructor(props) {
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <InputText
          titleSpanR={50}
          value={this.state.value}
          onChange={this.handleChange}
        >
          Title
        </InputText>
      </div>
    )
  }
}

;<App />
```
