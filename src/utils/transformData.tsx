import { MenuTypelInterface } from "@/types/menuType";
import { TransformInterface } from "@/types/transformType";

const groupAndTransformData = (data: MenuTypelInterface[]): TransformInterface[] => {
  const typeMap = new Map();

  // Group menu items by type
  data.forEach((item) => {
    if (!typeMap.has(item.firstType)) {
      typeMap.set(item.firstType, {
        type: item.firstType,
        ids: [],
        image: item.image,
      });
    }
    typeMap.get(item.firstType).ids.push(item.id);
  });

  // Convert the map values to an array
  const transformData = Array.from(typeMap.values());

  return transformData;
};

export default groupAndTransformData;