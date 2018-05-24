#### InputText Only

```js
initialState = { value: '' }
;<div>
  <InputText
    type="text"
    // height={24}
    width={100}
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    placeholder="Type something"
  />
</div>
```

#### Work with label

```js
initialState = { value: '123' }
;<div>
  <label htmlFor="test">Type Something </label>

  <InputText
    type="text"
    id="test"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
</div>
```
