import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTab } from '../redux/actions';
import { TABS } from '../redux/actions/type';

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {TABS.map((tab) => (
        <button
          key={tab}
          className={tab === currentTab ? 'button selected' : 'button'}
          onClick={() => dispatch(toggleTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
