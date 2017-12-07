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

<Loader phases={phases} visible />
```


