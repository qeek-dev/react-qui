Basic:

```js
const phases = [
  {
    render: () => <div>phase 1</div>,
    duration: 3
  },
  {
    render: () => <div>phase 2</div>,
    duration: 5
  }
];

renderTimeout = () => <div>timeout!!!</div>;

<Loader phases={phases} renderTimeout={this.renderTimeout} timeout={10000} visible />
```


