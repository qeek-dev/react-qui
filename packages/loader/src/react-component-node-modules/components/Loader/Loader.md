Basic:

```js
const phases = [
  {
    render: (props, state) => (
      <div>
        <p>phase 1</p>
        <p>isTimeout: {state.isTimeout.toString()}</p>
      </div>
    ),
    duration: 3000
  },
  {
    render: (props, state) => (
      <div>
        <p>phase 2</p>
        <p>isTimeout: {state.isTimeout.toString()}</p>
      </div>
    ),
    duration: 5000
  }
];

renderTimeout = (props, state) => (
  <div>
    <p>Timeout!!!</p>
    <p>isTimeout: {state.isTimeout.toString()}</p>
  </div>
),

<Loader phases={phases} renderTimeout={this.renderTimeout} timeout={10000} visible />
```


