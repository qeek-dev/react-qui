```js
initialState = { selectedOption: '' }

value = state.selectedOption
;<div>
  <Dropdown
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
</div>
```

### disabled

```js
<div>
  <Dropdown disabled />
</div>
```
