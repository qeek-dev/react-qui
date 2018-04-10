#### Single-Select

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

#### Disabled

```js
initialState = { selectedOption: '' }
;<div>
  <Qselect
    disabled
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
</div>
```

#### Option Disabled
```js
initialState = { selectedOption: '' }
;<div>
  <Qselect
    value={state.selectedOption}
    onChange={selectedOption => setState({ selectedOption })}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two', disabled: true }]}
  />
</div>
```


#### Multi-Select

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
