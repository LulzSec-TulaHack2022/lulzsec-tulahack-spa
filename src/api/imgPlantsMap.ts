export const ImgPlantsMap = {
  Аглаонема: '/agla.png',
  кактус: '/kaktus.png',
  сансевиерия: '/sans.png',
}

export const getImgByName = (nameNomenclature: string) => {
  return ImgPlantsMap[nameNomenclature] || ImgPlantsMap['кактус']
}
