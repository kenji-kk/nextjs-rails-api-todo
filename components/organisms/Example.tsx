import {useContext} from 'react';
import {AuthContext} from "../layouts/Unprivate"

export const Example = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <p>名前：{currentUser?.name}</p>
      <p>メールアドレス：{currentUser?.email}</p>
    </div>
  )
};
