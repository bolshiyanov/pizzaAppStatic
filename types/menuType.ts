export interface MenuTypelInterface {
  id: string;
  name: string;
  components: string;
  descriptions: string;
  firstType: string;
  secondType: string;
  thirdType: string;
  properties: string[];
  keyWords: string;
  pricesTypes: string[];
  order: number;
  useInPdf: boolean;
  useInPdfWithProperties: boolean;
  useInPdfWithQR: boolean;
  additional: string[];
  path: string;
  image: string;
}
