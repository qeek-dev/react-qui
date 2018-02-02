import React from 'react'
import { mount } from 'enzyme'
import { Checkbox, CheckboxGroup } from '../react-component-node-modules/index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

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
