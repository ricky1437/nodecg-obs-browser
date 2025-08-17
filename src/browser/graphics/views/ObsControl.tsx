import {useListenFor} from "@nodecg/react-hooks";
import {useEffect} from "react";
import {render} from "../../render";

export const ObsControl = () => {
	useListenFor("get-scenes", () => {
		window.obsstudio.getScenes((scenes) => {
			nodecg.sendMessage("send-scenes", scenes);
		});
	});

	useListenFor("change-scene", (data: string) => {
		window.obsstudio.setCurrentScene(data);
	});

	useEffect(() => {
		if (window.obsstudio && window.obsstudio.getScenes) {
			window.obsstudio.getScenes((scenes) => {
				nodecg.sendMessage("send-scenes", scenes);
			});
		}
	}, []);

	return <></>;
};

render(<ObsControl />);
