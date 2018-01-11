import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withDraggable } from '../react-component-node-modules/index';

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

it('should render without crashing', () => {
  const div = document.createElement('div');
  const Test = _ => <div>Test</div>;
  const Draggable = withDraggable()(Test);
  ReactDOM.render(<Draggable />, div);
});

it('should not set transform style when `center` option is false', () => {
  const opts = {
    center: false
  };
  const expectStyle = {
    transform: null,
    position: 'fixed',
    zIndex: '99999',
    top: '50%',
    left: '50%'
  };

  const Test = props => <div>Test</div>;
  const WrappedComponent = withDraggable(opts)(Test);
  const component = renderer.create(<WrappedComponent />);
  let tree = component.toJSON();
  expect(tree.props.style).toEqual(expectStyle);
});

it('should pass props to original component', () => {
  const parentProps = {
    a: 10,
    b: [1, 2, 3]
  };
  const Test = props => (
    <div className="child" data-props={props}>
      Test
    </div>
  );
  const WrappedComponent = withDraggable()(Test);
  const wrapper = mount(<WrappedComponent parentProps={parentProps} />);
  expect(wrapper.find('.child').prop('data-props').parentProps).toEqual(
    parentProps
  );
});
