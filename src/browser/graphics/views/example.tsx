import {useReplicant} from "@nodecg/react-hooks"
import {Example} from "../../../types/generated/example"
import {render} from "../../render";
import {useAssets} from "../hooks"

const App = () => {
	const [example] = useReplicant<Example>("example");
    const testAssets = useAssets("test");

	return (
		<div id='container'>
			<div>This is example.</div>
			<p>Age: {example?.age}</p>
			<p>Text: {example?.text}</p>
            <img src={testAssets?.[0]?.url} />
		</div>
	);
};

render(<App />);
