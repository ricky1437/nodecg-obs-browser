import {useListenFor} from "@nodecg/react-hooks";
import {useEffect, useState} from "react";
import {render} from "../../render";

const App = () => {
	const [scenes, setScenes] = useState<string[]>([]);
	const [sceneToSwitch, setSceneToSwitch] = useState<string>("");
	useListenFor("send-scenes", (newScenes: string[]) => {
		setScenes(newScenes);
	});

	const handleGetScenes = () => {
		nodecg.log.info("get scenes");
		nodecg.sendMessage("get-scenes");
	};

	const handleChangeScene = () => {
		nodecg.sendMessage("change-scene", sceneToSwitch);
	};

	useEffect(() => {
		nodecg.sendMessage("get-scenes");
	}, []);

	return (
		<div id='container'>
			<div>選択中のシーン: {sceneToSwitch}</div>
			<select
				id='scene-select'
				value={sceneToSwitch}
				onChange={(e) => setSceneToSwitch(e.target.value)}
			>
				{scenes.length !== 0 ? (
					scenes.map((scene, i) => (
						<option
							key={i}
							value={scene}
						>
							{scene}
						</option>
					))
				) : (
					<option>シーンがありません。</option>
				)}
			</select>
			<div>
				<button onClick={handleChangeScene}>シーン切り替え</button>
				<button onClick={handleGetScenes}>シーンリスト更新</button>
			</div>
		</div>
	);
};

render(
	<>
		<App />
	</>,
);
