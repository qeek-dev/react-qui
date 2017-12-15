import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Spinner.scss';

const cx = classnames.bind(styles);

const Circle = props => {
  return (
    <div className={cx('circle')}>
      <svg className={cx('circular')} viewBox="0 0 80 80">
        <circle
          className={cx('base')}
          cx="40"
          cy="40"
          r="38"
          fill="none"
          strokeWidth="2px"
          strokeMiterlimit="10"
          stroke="#fff"
          opacity="0.5"
        />
        <circle
          className={cx('path')}
          cx="40"
          cy="40"
          r="38"
          fill="none"
          strokeWidth="2px"
          strokeMiterlimit="10"
        />
      </svg>
      <div>{props.children}</div>
    </div>
  );
};

const renderIcon = () => (
  <div className={cx('icon-spinner')}>
    <div className={cx('logo')} />
  </div>
);

const renderPercentage = percent => (
  <div className={cx('percentage')}>
    <span className={cx('num')}>{percent.toString()}</span>
    <span className={cx('percent')}>%</span>
  </div>
);

const Spinner = props => {
  const { type, percent, className } = props;
  return (
    <div className={cx('spinner', className)}>
      <Circle>
        {type === 'normal' ? renderIcon() : renderPercentage(percent)}
      </Circle>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'progress']),
  percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Spinner.defaultProps = {
  className: '',
  type: 'normal',
  percent: 0,
};

export default Spinner;
