import { ActiveMap } from "@/components/special/MapScreen/BaseMap/data/mapTypes";
import { systemMapMeta } from "@/components/special/MapScreen/BaseMap/data/maps/systemMapData";
import { titanMapMeta } from "@/components/special/MapScreen/BaseMap/data/maps/titanMapData";

export const mapActiveMapToMeta = {
  [ActiveMap.System]: systemMapMeta,
  [ActiveMap.Titan]: titanMapMeta
}