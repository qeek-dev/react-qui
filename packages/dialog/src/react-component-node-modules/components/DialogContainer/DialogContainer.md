Basic:

```js
initialState = { visible: true }

;<DialogContainer
  visible={state.visible}
  onClose={() => setState({ visible: false })}
>
  Hi, some content!
</DialogContainer>
```
