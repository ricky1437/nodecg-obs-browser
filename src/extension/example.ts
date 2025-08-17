import type NodeCG from "@nodecg/types";

export const example = (nodecg: NodeCG.ServerAPI) => {
	nodecg.log.info("example extension実行");
};
