import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import { Checkbox } from '../react-component-node-modules/index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('render <Checkbox> component', () => {
  const checkbox = shallow(<Checkbox>normal</Checkbox>)
  const checkboxDisabled = shallow(<Checkbox disabled>disabled</Checkbox>)
  const checkboxChecked = shallow(<Checkbox checked>checked</Checkbox>)
  const checkboxCheckedDisabled = shallow(
    <Checkbox checked disabled>
      checked disabled
    </Checkbox>,
  )
  expect(checkbox).toMatchSnapshot()
  expect(checkboxDisabled).toMatchSnapshot()
  expect(checkboxChecked).toMatchSnapshot()
  expect(checkboxCheckedDisabled).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Checkbox>Test</Checkbox>, div)
})

it('checkbox image changed after clicking label', () => {
  const checkbox = mount(<Checkbox>Test</Checkbox>)

  expect(checkbox.find('img').prop('src')).toEqual('btn_checkbox.svg')
  checkbox.find('input').simulate('click')
  expect(checkbox.find('img').prop('src')).toEqual('btn_checkbox_pressed.svg')
})

it('Checkbox text equal to children text', () => {
  const checkbox = mount(<Checkbox>normal</Checkbox>)

  expect(checkbox.find('span').text()).toEqual('normal')
})

it('renders an image with src correctly', () => {
  const checkbox = mount(<Checkbox>normal</Checkbox>)
  const checkboxDisabled = mount(<Checkbox disabled>disabled</Checkbox>)
  const checkboxChecked = mount(<Checkbox checked>checked</Checkbox>)
  const checkboxCheckedDisabled = mount(
    <Checkbox checked disabled>
      checked disabled
    </Checkbox>,
  )

  expect(checkbox.find('img').prop('src')).toEqual('btn_checkbox.svg')
  expect(checkboxDisabled.find('img').prop('src')).toEqual(
    'btn_checkbox_disable.svg',
  )
  expect(checkboxChecked.find('img').prop('src')).toEqual(
    'btn_checkbox_pressed.svg',
  )
  expect(checkboxCheckedDisabled.find('img').prop('src')).toEqual(
    'btn_checkbox_presseddisable.svg',
  )
})
