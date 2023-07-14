import ChildA from './child-a';
import ChildB from './child-b';

const Parent = () => {
  return (
    <>
      <h1>Parent</h1>
      <ChildA />
      <ChildB />
    </>
  );
};

export default Parent;
