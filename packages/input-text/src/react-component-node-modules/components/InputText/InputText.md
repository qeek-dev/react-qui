## titleMaxWidth

#### _You can set Maximun width of title_

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
          titleMaxWidth={200}
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

## titleSpan

#### _You can set the margin width of title_

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
      <div>
        <div className="App">
          <InputText
            titleSpanR={50}
            value={this.state.value}
            onChange={this.handleChange}
          >
            Title
          </InputText>
        </div>
        <br />
        <div className="App">
          <InputText
            titleSpanL={40}
            value={this.state.value}
            onChange={this.handleChange}
          >
            Title
          </InputText>
        </div>
      </div>
    )
  }
}

;<App />
```
