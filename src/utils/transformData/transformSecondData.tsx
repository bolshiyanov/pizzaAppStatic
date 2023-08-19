import { MenuTypelInterface } from "@/types/menuType";
import { TransformInterface } from "@/types/transformType";

const groupAndTransformDataSecondType = (data: MenuTypelInterface[]): TransformInterface[] => {
  const typeMap = new Map();

  // Group menu items by type
  data.forEach((item) => {
    if (!typeMap.has(item.secondType)) {
      typeMap.set(item.secondType, {
        type: item.secondType,
        ids: [],
        image: item.image,
      });
    }
    typeMap.get(item.secondType).ids.push(item.id);
  });

  // Convert the map values to an array
  const transformData = Array.from(typeMap.values());

  return transformData;
};

export default groupAndTransformDataSecondType;