import React from 'react';
import CommonLayout from '../components/layouts/CommonLayout';
import { Unprivate }  from '../components/layouts/Unprivate';

const singin = () => {
  return (
    <Unprivate>
      <CommonLayout>
          <div>サインインしてください</div>
      </CommonLayout>
    </Unprivate>
  );
};

export default singin;
