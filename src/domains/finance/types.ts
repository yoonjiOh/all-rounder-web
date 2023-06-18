export interface IMappingInfo {
  goodsSoldCost: string[]; // 상품 구매비용
  incomeTax: string[]; // 법인세비용
  managementCost: string[]; // 관리비 (임대료, 급여, 감가상각비, 이자비용)
  nonOperatingCost: string[]; // 영업외비용
  nonOperatingIncome: string[]; // 영업외수익
  producingCost: string[]; // 제품 제조비용
  revenue: string[]; // 매출액
  sellingCost: string[]; // 판매비 (판매수수료, 운반비, 판매관리비)
  specialCost: string[]; // 특별비용
  specialIncome: string[]; // 특별수익
}
