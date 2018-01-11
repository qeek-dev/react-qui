# @react-qui/hoc
A react high-order-component toolbox for react-qui.

## withDraggable
A component passed to the hoc will be transformed into a draggable component.
```jsx
import { withDraggable } from '@react-qui/hoc'

const Draggable = withDraggable({
  position: 'absolute',
  zIndex: '9999',
  center: true
})(_ => (
  <div
    style={{
      background: 'tomato',
      width: '300px',
      height: '50px',
      lineHeight: '50px'
    }}
  >
    I can be dragged.
  </div>
));
```
