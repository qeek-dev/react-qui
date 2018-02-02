import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '../react-component-node-modules/components/Checkbox/Checkbox'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('Checkbox text equal to children text', () => {
  // Render a checkbox with label in the document
  const checkbox = mount(<Checkbox>normal</Checkbox>)

  expect(checkbox.find('span').text()).toEqual('normal')
})
