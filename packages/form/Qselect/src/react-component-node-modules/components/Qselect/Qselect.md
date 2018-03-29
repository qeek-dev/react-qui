```js
initialState = { selectedOption: '' }

value = state.selectedOption
;<div>
  <Qselect
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
  <Qselect
    multi={true}
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
</div>
```
