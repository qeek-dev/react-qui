### Light Theme

```js
initialState = { checked: false }
;<div>
  <div>
    <Checkbox
      value="normal"
      checked={state.checked}
      onClick={e => setState({ checked: !state.checked })}
    >
      test
    </Checkbox>
  </div>
  <div>
    <Checkbox
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
