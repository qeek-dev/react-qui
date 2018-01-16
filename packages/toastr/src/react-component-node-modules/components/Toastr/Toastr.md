
```js
let toastr;
<div>
  <button onClick={evt => toastr.trigger({children: <span>No, changed!</span>})}>trigger</button>
  <Toastr
    position="top-right"
    duration={5000}
    ref={ref => toastr = ref}
    zIndex={9999}
  >
    <QToastr toastrStyle="qts">Default Message</QToastr>
  </Toastr>
</div>
```
