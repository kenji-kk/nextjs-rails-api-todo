import React from 'react';
import CommonLayout from '../components/layouts/CommonLayout';
import { Unprivate }  from '../components/layouts/Unprivate';
import SignIn from '../components/pages/Signin';

const signin = () => {
  return (
    <Unprivate>
      <CommonLayout>
          <SignIn />
      </CommonLayout>
    </Unprivate>
  );
};

export default signin;
