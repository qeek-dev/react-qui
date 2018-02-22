### Row

```js
<div>
  <CheckboxGroup
    options={[{ value: 'SUB' }, { value: 'MNR' }, { value: 'ICX' }]}
    span={30}
    theme="light"
    direction="row"
    onChange={e => {
      console.log(`checked: ${e.target.checked}, value: ${e.target.value}`)
    }}
  />
</div>
```

### Column

```js
<div>
  <CheckboxGroup
    options={[
      { value: 'ADA', checked: true },
      { value: 'NEO', checked: true },
      { value: 'EOS', checked: true },
    ]}
    span={30}
    theme="light"
    direction="col"
  />
</div>
```

### Manually Checked

```js
<div>
  <CheckboxGroup
    options={[
      { value: 'QSP', checked: false },
      { value: 'UTK', checked: true },
      { value: 'TNC', checked: false },
    ]}
    span={30}
    theme="light"
    direction="row"
  />
</div>
```

### Manually Disabled

```js
<div>
  <CheckboxGroup
    options={[
      { value: 'ETHOS', checked: true, disabled: true },
      { value: 'CVC', checked: false, disabled: false },
      { value: 'INK', checked: true, disabled: true },
    ]}
    span={30}
    theme="light"
    direction="row"
  />
</div>
```
