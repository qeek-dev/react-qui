### Light Theme

```js
<div>
  <div>
    <Checkbox
      value="normal"
      onChange={e => {
        console.log(`checked: ${e.target.checked}, value: ${e.target.value}`)
      }}
    >
      normal
    </Checkbox>
  </div>
  <div>
    <Checkbox value="disabled" disabled onChange={() => console.log('hello')}>
      disabled
    </Checkbox>
  </div>
  <div>
    <Checkbox value="checked" checked onChange={() => console.log('hello')}>
      checked
    </Checkbox>
  </div>
  <div>
    <Checkbox
      value="checked-disabled"
      checked
      disabled
      onChange={() => console.log('hello')}
    >
      checked disabled
    </Checkbox>
  </div>
</div>
```

### Dark Theme

```js
<div style={{ backgroundColor: 'black', padding: '10px' }}>
  <div>
    <Checkbox value="dark-normal" theme="dark" onChange={() => alert('hello')}>
      dark normal
    </Checkbox>
  </div>
  <div>
    <Checkbox
      value="dark-disabled"
      theme="dark"
      disabled
      onChange={() => console.log('hello')}
    >
      dark disabled
    </Checkbox>
  </div>
  <div>
    <Checkbox
      value="dark-checked"
      theme="dark"
      checked
      onChange={() => console.log('hello')}
    >
      dark checked
    </Checkbox>
  </div>
  <div>
    <Checkbox
      value="dark-checked-disabled"
      theme="dark"
      checked
      disabled
      onChange={() => console.log('hello')}
    >
      dark checked disabled
    </Checkbox>
  </div>
</div>
```
