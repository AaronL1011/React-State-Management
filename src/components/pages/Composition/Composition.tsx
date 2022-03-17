import { useState } from "react";
import CompositionedApp from "../../organisms/CompositionedApp";
import RegularApp from "../../organisms/RegularApp";
import SplitLayout from "../../templates/SplitLayout";

/* 
	WOAH! COMPOSITION-CEPTION!
*/

const Composition = () => {
	return (
		<SplitLayout
			title="Component Composition"
			leftElement={<RegularApp />}
			rightElement={<CompositionedApp />}
		/>
	);
};

export default Composition;
