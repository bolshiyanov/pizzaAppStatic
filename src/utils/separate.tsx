interface CollectionItem {
    type: string;
    ids: string[];
    image: string;
  }
  
  
  export function separete(data: CollectionItem[]): string[] {
    const idsArray: string[] = [];
  
    data.forEach(item => {
      item.ids.forEach(id => {
        const trimmedId = id.trim();
        if (trimmedId.length > 0) {
          idsArray.push(trimmedId);
        }
      });
    });
  
    return idsArray;
  }

  