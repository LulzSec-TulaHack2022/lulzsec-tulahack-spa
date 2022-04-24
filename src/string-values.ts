const getIllumination = (value: number): string => {
  const illumination = {
    low: 'Избегать долго солнечного воздействия',
    medium: 'Хорошее освещение, без прямых солнечных лучше',
    high: 'Держать растение на солнце',
    any: 'Подойдёт любое освещение',
  }

  if (value <= 20) {
    return illumination.low
  } else if (21 <= value && value <= 40) {
    return illumination.medium
  } else if (41 <= value && value <= 60) {
    return illumination.high
  }

  return illumination.any
}

const temperature = {
  low: '5-15 ˚C',
  medium: '15 - 25 ˚C',
  high: '15 - 45 ˚C',
  any: '45+ ˚C',
}

const humidity = {
  low: 'Поливать хотя бы раз в неделю',
  medium: 'Обязательно поливать 2-3 раза в неделю',
  high: 'Необходим ежедневный полив',
  any: 'Одного полива в месяц будет в полне достаточно',
}

export { getIllumination, temperature, humidity }
