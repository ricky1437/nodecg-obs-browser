import {render} from "../../render";
import {useReplicant} from "@nodecg/react-hooks" 
import {Example} from "../../../types/generated/example"

const App = () => {
	const [example] = useReplicant<Example>("example");

	return (
		<div id='container'>
			<div>This is Panel.</div>
            <div>text: {example?.text}</div>
            <div>age: {example?.age}</div>
			<button onClick={() => nodecg.sendMessage("resetAge")}>
                reset age
			</button>
		</div>
	);
};

render(
    <>
        <App />
    </>
);
