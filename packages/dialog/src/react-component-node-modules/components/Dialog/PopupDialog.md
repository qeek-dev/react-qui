```js
<PopupDialog visible level="info" confirmText="OK">
  <h1>I am title!</h1>
  <p>
    VeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongText
  </p>
</PopupDialog>
```

Error Level:

```js
let style = { margin: '10px' }
;<div>
  <PopupDialog style={style} visible level="info" confirmText="OK" />
  <PopupDialog style={style} visible level="warning" confirmText="OK" />
  <PopupDialog style={style} visible level="error" confirmText="OK" />
  <PopupDialog style={style} visible level="charging" confirmText="OK" />
  <PopupDialog style={style} visible level="ok" confirmText="OK" />
  <PopupDialog style={style} visible level="remind" confirmText="OK" />
  <PopupDialog style={style} visible level="delete" confirmText="OK" />
  <PopupDialog style={style} visible level="help" confirmText="OK" />
  <PopupDialog
    style={style}
    visible
    level="Error_but_system_still_can_process"
    confirmText="OK"
  />
</div>
```

Custom Icon:

```js
<PopupDialog
  visible
  customIcon="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"
  confirmText="OK"
/>
```
