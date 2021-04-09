import React from 'react';
import Page from 'src/components/Page';
import UserList from './UserList';

const HomeView = () => {
  return (
    <Page title="Line-Up">
      <UserList />
    </Page>
  );
};

export default HomeView;
