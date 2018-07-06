import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Menus from '../components/Menus';
import Page from '../components/Page';

const IndexPage = ({app, children, dispatch}) => {
  const {list, current} = app;
  return (
    <div className={styles.flex}>
      <Menus 
        list={list} 
        current={current} 
        dispatch={dispatch}/>
        <Page>
          {children}
        </Page>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({app}) => ({app}))(IndexPage);
