import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Toastr, ToastrContainer } from './react-component-node-modules/'

class App extends Component {
  render() {
    return (
      <div>
        <ToastrContainer duration={5} position="top-left">
          <Toastr btnStyle="qts">
            已複製到剪貼簿。hfaspoighoipewhjgiopasehjgposjeo
          </Toastr>
          <Toastr btnStyle="photo-st">PhotoStation</Toastr>
          <Toastr btnStyle="music-st">MusicStation</Toastr>
          <Toastr btnStyle="file-st">FileStation</Toastr>
          <Toastr btnStyle="download-st">DownloadStation</Toastr>
          <Toastr btnStyle="video-st">VideoStation</Toastr>
        </ToastrContainer>
      </div>
    )
  }
}

export default App
