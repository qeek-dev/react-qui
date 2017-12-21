```js
<div>
  <ToastrContainer duration={5} position="top-right">
    <Toastr btnStyle="qts">已複製到剪貼簿。</Toastr>
    <Toastr btnStyle="photo-st">PhotoStation</Toastr>
    <Toastr btnStyle="music-st">MusicStation</Toastr>
    <Toastr btnStyle="file-st">FileStation</Toastr>
    <Toastr btnStyle="download-st">DownloadStation</Toastr>
    <Toastr btnStyle="video-st">VideoStation</Toastr>
  </ToastrContainer>
</div>
```

```js
<div>
  <Toastr btnStyle="photo-st">PhotoStation</Toastr>
  <Toastr btnStyle="music-st">MusicStation</Toastr>
  <Toastr btnStyle="file-st">FileStation</Toastr>
  <Toastr btnStyle="download-st">DownloadStation</Toastr>
  <Toastr btnStyle="video-st">VideoStation</Toastr>
</div>
```

```js
import toastrContainer from 'ToastrContianer';

const toastrFunc = () =>{
  console.log('test')
  toastrContainer.info('Hello!!!', 5)
}

<button onClick={this.toastrFunc()}>TEST</button>
```
