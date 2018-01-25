```js
<div>
  <div>
    <Checkbox onChange={() => alert('hello')}>normal</Checkbox>
  </div>
  <div>
    <Checkbox disabled onChange={() => console.log('hello')}>
      disabled
    </Checkbox>
  </div>
  <div>
    <Checkbox checked onChange={() => console.log('hello')}>
      checked
    </Checkbox>
  </div>
  <div>
    <Checkbox checked disabled onChange={() => console.log('hello')}>
      checked disabled
    </Checkbox>
  </div>
</div>
```


