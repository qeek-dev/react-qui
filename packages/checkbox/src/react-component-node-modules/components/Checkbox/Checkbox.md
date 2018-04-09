### Light Theme

```js
initialState = { checked: false }
;<div>
  <div>
    <Checkbox
      id="normal"
      value="normal"
      checked={state.checked}
      onClick={e => {
        console.log(`checked: ${e.target.checked}, value:${e.target.value}`)
        setState({ checked: !state.checked })
      }}
    >
      test
    </Checkbox>
  </div>
  <div>
    <Checkbox
      id="disabled"
      value="disabled"
      disabled
      checked={false}
      onClick={e => setState({ checked: !state.checked })}
    >
      test
    </Checkbox>
  </div>
  <div>
    <Checkbox
      id="disabled-checked"
      value="disabled-checked"
      disabled
      checked={true}
      onClick={e => setState({ checked: !state.checked })}
    >
      test
    </Checkbox>
  </div>
</div>
```

### Dark Theme

```js
initialState = { checked: false }
;<div style={{ backgroundColor: 'black', padding: '10px' }}>
  <div>
    <Checkbox
      id="dark-checked"
      value="dark-checked"
      theme="dark"
      checked={state.checked}
      onClick={e => setState({ checked: !state.checked })}
    >
      dark checked
    </Checkbox>
  </div>
  <div>
    <Checkbox
      id="dark-disabled"
      value="dark-disabled"
      theme="dark"
      disabled
      checked={false}
      onClick={e => setState({ checked: !state.checked })}
    >
      dark checked
    </Checkbox>
  </div>
  <div>
    <Checkbox
      id="dark-disabled-checked"
      value="dark-disabled-checked"
      theme="dark"
      disabled
      checked={true}
      onClick={e => setState({ checked: !state.checked })}
    >
      dark checked
    </Checkbox>
  </div>
</div>
```
