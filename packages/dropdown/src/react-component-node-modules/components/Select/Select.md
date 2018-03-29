```js
initialState = { selectedOption: '' }

value = state.selectedOption
;<div>
  <Select
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
</div>
```

### disabled

```js
initialState = { selectedOption: '' }
;<div>
  <Select
    multi={true}
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
</div>
```
