### InputText Only

```js
initialState = { value: '' }
;<div>
  <InputText
    type="text"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
</div>
```


### Work with label

```js
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
