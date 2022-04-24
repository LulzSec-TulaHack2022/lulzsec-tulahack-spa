export const ImgPlantsMap = {
  Аглаонема: '/agla.png',
  Кактус: '/kaktus.png',
  Сансевиерия: '/sans.png',
}

export const getImgByName = (nameNomenclature: string) => {
  return ImgPlantsMap[nameNomenclature] || ImgPlantsMap['Кактус']
}
