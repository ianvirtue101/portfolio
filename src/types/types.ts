export type Service = {
  title: string;
  description: string;
  imageUrl: string;
  priceInformation: PriceInformation;
  detailedDescription: string;
};

export type PriceInformation = {
  details: string;
};
