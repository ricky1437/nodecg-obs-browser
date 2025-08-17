import type NodeCG from "@nodecg/types";
import {Example} from "../types/generated/example";

export const example = (nodecg: NodeCG.ServerAPI) => {
    nodecg.log.info("example extension実行");

	const exampleReplicant = nodecg.Replicant(
		"example",
	) as unknown as NodeCG.ServerReplicantWithSchemaDefault<Example>;

	setInterval(() => {
		exampleReplicant.value.age++;
	}, 5000);

	nodecg.listenFor("resetAge", () => {
		exampleReplicant.value.age = 0;
		nodecg.log.info("age has been reset!");
	});

	exampleReplicant.on("change", (newVal) => {
		nodecg.log.info(newVal);
	});
};
