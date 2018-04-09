import React from 'react'
import ReactDOM from 'react-dom'
import { mount} from 'enzyme'
import { Checkbox, CheckboxGroup } from '../react-component-node-modules/index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('render <CheckboxGroup> component', () => {
  const checkboxGroup = mount(
    <CheckboxGroup direction="column">
      <Checkbox id="ethos" name="ethos" value="ethos">
        ETHOS
      </Checkbox>
      <Checkbox id="cvc" name="cvc" value="cvc">
        CVC
      </Checkbox>
      <Checkbox id="ink" name="ink" value="ink">
        INK
      </Checkbox>
    </CheckboxGroup>,
  )
  expect(checkboxGroup).toMatchSnapshot()
})

it('render CheckboxGroup correctly', () => {
  const checkboxGroup = mount(
    <CheckboxGroup direction="column">
      <Checkbox id="ethos" name="ethos" value="ethos">
        ETHOS
      </Checkbox>
      <Checkbox id="cvc" name="cvc" value="cvc">
        CVC
      </Checkbox>
      <Checkbox id="ink" name="ink" value="ink">
        INK
      </Checkbox>
    </CheckboxGroup>,
  )
  expect(checkboxGroup.children().text()).toEqual('ETHOSCVCINK')
})
