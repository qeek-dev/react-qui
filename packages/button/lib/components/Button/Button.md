
### Theme: There are ` light ` and `dark` theme in QUI. `light` is default.

* `light` Theme

```js
<div style={{ padding: '10px' }}>
  <Button theme="light">Button</Button>
</div>
```

* `dark` Theme

```js
<div>
  <div style={{ backgroundColor: 'black', padding: '10px' }}>
    <Button theme="dark">Square</Button>
  </div>
</div>
```

### Shapes: There are `square` and `rounded` shapes in QUI. `square` is default.

* `light` Theme

```js
<div>
  <div style={{ padding: '10px' }}>
    <Button theme="light" shape="sqaure">Square</Button>
    <Button theme="light" shape="rounded">Rounded</Button>
  </div>
</div>
```

* `dark` Theme
```js
<div>
  <div style={{ backgroundColor: 'black', padding: '10px' }}>
    <Button theme="dark" shape="sqaure">Square</Button>
    <Button theme="dark" shape="rounded">Rounded</Button>
  </div>
</div>
```

### State: disabled

* `light` Theme

```js
<div style={{ padding: '10px' }}>
  <Button disabled theme="light" shape="sqaure" >Square</Button>
  <Button disabled theme="light" shape="rounded" >Rounded</Button>
</div>
```

* `dark` Theme

```js
<div>
  <div style={{ backgroundColor: 'black', padding: '10px' }}>
    <Button disabled theme="dark" shape="square">Square</Button>
    <Button disabled theme="dark" shape="rounded">Rounded</Button>
  </div>
</div>
```
