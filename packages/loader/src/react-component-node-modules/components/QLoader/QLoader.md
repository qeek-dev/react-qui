### Icon Loader

Basic:

```js
const props = {
  visible: true,
  cancelable: false,
  showProgress: false,
  showCounter: false,
  descriptionPhase1: '讀取中...',
  descriptionPhase2: '正在努力讀取中，請您再稍後一下...',
}
;<QLoader {...props} />
```

With detail messages:

```js
const props = {
  visible: true,
  cancelable: false,
  showProgress: false,
  showCounter: false,
  cancelButtonWord: '取消動作',
  descriptionPhase1: '讀取中...',
  detailPhase1:
    '詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
  descriptionPhase2: '正在努力讀取中，請您再稍後一下...',
  detailPhase2:
    '更加詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
  onTimeout: () => console.log('timeout!'),
}

;<QLoader {...props} />
```

### Progress Loader

With progress and remaining time

```js
const props = {
  visible: true,
  cancelable: true,
  showProgress: true,
  showCounter: true,
  cancelButtonWord: '取消動作',
  descriptionPhase1: '讀取中...',
  detailPhase1:
    '詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
  descriptionPhase2: '正在努力讀取中，請您再稍後一下...',
  detailPhase2:
    '更加詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
  remainMessage: '剩餘時間',
  remainTime: '00:03:59',
  percent: 75,
  onCancel: () => alert('cencel!'),
  onTimeout: () => alert('timeout!'),
  renderTimeout: () => <div>Timeout!!!</div>,
}

;<QLoader {...props} />
```
