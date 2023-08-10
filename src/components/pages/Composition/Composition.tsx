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
      description='Have a look at the README for this section to understand the differences in these components.'
      leftElement={<RegularApp />}
      rightElement={<CompositionedApp />}
    />
  );
};

export default Composition;
