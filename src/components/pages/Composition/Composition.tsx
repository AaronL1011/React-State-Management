import CompositionedApp from '../../apps/CompositionedApp';
import RegularApp from '../../apps/RegularApp';
import SplitLayout from '../../templates/SplitLayout';

/* 
	WOAH! COMPOSITION-CEPTION!
*/

const Composition = () => {
  return (
    <SplitLayout
      title='Component Composition'
      leftElement={<RegularApp />}
      rightElement={<CompositionedApp />}
    />
  );
};

export default Composition;
