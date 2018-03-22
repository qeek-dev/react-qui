### Row

```js
<div>
  <CheckboxGroup
    options={[{ label: 'SUB' }, { label: 'MNR' }, { label: 'ICX' }]}
    span={30}
    theme="light"
    direction="row"
  />
</div>
```

### Column

```js
<div>
  <CheckboxGroup
    options={[
      { label: 'ADA', value: 'ada', checked: true },
      { label: 'NEO', value: 'neo', checked: true },
      { label: 'EOS', value: 'eos', checked: true },
    ]}
    span={30}
    theme="light"
    direction="col"
    onChange={e => {
      console.log(`checked: ${e.target.checked}, value: ${e.target.value}`)
    }}
  />
</div>
```

### Manually Checked

```js
<div>
  <CheckboxGroup
    options={[
      { label: 'QSP', value: 'QSP', checked: false },
      { label: 'UTK', value: 'UTK', checked: true },
      { label: 'TNC', value: 'TNC', checked: false },
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
      { label: 'ETHOS', value: 'ETHOS', checked: true, disabled: true },
      { label: 'CVC', value: 'CVC', checked: false, disabled: false },
      { label: 'INK', value: 'INK', checked: true, disabled: true },
    ]}
    span={30}
    theme="light"
    direction="row"
  />
</div>
```
