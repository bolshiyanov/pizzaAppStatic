import { MenuTypelInterface } from "@/types/menuType";
import { TransformInterface } from "@/types/transformType";

const groupAndTransformDataThirdType = (data: MenuTypelInterface[]): TransformInterface[] => {
  const typeMap = new Map();

  // Group menu items by type
  data.forEach((item) => {
    if (!typeMap.has(item.thirdType)) {
      typeMap.set(item.thirdType, {
        type: item.thirdType,
        ids: [],
        image: item.image,
      });
    }
    typeMap.get(item.thirdType).ids.push(item.id);
  });

  // Convert the map values to an array
  const transformData = Array.from(typeMap.values());

  return transformData;
};

export default groupAndTransformDataThirdType;