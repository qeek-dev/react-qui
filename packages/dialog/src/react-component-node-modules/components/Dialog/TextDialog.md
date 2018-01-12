```js
<TextDialog
  visible
  confirmText="Yes"
  cancelText="No"
  onClose={() => alert('close')}
  onConfirm={() => alert('confirm')}
  onCancel={() => alert('cancel')}
>
  <div>Some Content</div>
</TextDialog>
```
