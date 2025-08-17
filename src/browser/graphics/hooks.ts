import {useReplicant} from "@nodecg/react-hooks"
import {Assets} from "../../types/assets"

export const useAssets = (name: string) => {
    const [assets] = useReplicant<Assets[]>(`assets:${name}`);
    return assets;
}
