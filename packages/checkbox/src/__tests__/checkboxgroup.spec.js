import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import { CheckboxGroup } from '../react-component-node-modules/index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('render <CheckboxGroup> component', () => {
  const checkboxGroup = shallow(
    <CheckboxGroup
      options={[
        { label: 'ADA', value: 'ada', checked: true },
        { label: 'NEO', value: 'neo', checked: true },
        { label: 'EOS', value: 'eos', checked: true },
      ]}
      span={30}
      theme="light"
      direction="row"
    />,
  )
  expect(checkboxGroup).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CheckboxGroup
      options={[
        { label: 'ADA', value: 'ada', checked: true },
        { label: 'NEO', value: 'neo', checked: true },
        { label: 'EOS', value: 'eos', checked: true },
      ]}
      span={30}
      theme="light"
      direction="row"
    />,
    div,
  )
})

it('render CheckboxGroup correctly', () => {
  const checkboxGroup = mount(
    <CheckboxGroup
      options={[
        { label: 'ADA', value: 'ada', checked: true },
        { label: 'NEO', value: 'neo', checked: true },
        { label: 'EOS', value: 'eos', checked: true },
      ]}
      span={30}
      theme="light"
      direction="row"
    />,
  )
  expect(checkboxGroup.find('span').length).toEqual(3)
  expect(checkboxGroup.children().text()).toEqual('ADANEOEOS')
})
