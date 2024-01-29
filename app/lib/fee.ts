interface CityPrice {
  [key: string]: number;
}

const deliverySurchargeThreshold = 10;

const postalCodes = [
  {
    id: 1,
    cityName: 'helsinki',
    codes: [
      '00002',
      '00100',
      '00102',
      '00120',
      '00130',
      '00140',
      '00150',
      '00160',
      '00170',
      '00180',
      '00190',
      '00200',
      '00210',
      '00220',
      '00230',
      '00240',
      '00250',
      '00260',
      '00270',
      '00280',
      '00290',
      '00300',
      '00310',
      '00320',
      '00330',
      '00340',
      '00350',
      '00360',
      '00370',
      '00380',
      '00390',
      '00400',
      '00410',
      '00420',
      '00430',
      '00440',
      '00500',
      '00510',
      '00520',
      '00530',
      '00540',
      '00550',
      '00560',
      '00570',
      '00580',
      '00590',
      '00600',
      '00610',
      '00620',
      '00630',
      '00640',
      '00650',
      '00660',
      '00670',
      '00680',
      '00690',
      '00700',
      '00710',
      '00720',
      '00730',
      '00740',
      '00750',
      '00760',
      '00770',
      '00780',
      '00790',
      '00800',
      '00810',
      '00820',
      '00830',
      '00840',
      '00850',
      '00860',
      '00870',
      '00880',
      '00890',
      '00900',
      '00910',
      '00920',
      '00930',
      '00940',
      '00950',
      '00960',
      '00970',
      '00980',
      '00990',
    ],
  },
  {
    id: 2,
    cityName: 'vantaa',
    codes: [
      '01200',
      '01230',
      '01260',
      '01280',
      '01300',
      '01340',
      '01350',
      '01360',
      '01370',
      '01380',
      '01390',
      '01400',
      '01420',
      '01450',
      '01480',
      '01490',
      '01510',
      '01520',
      '01530',
      '01600',
      '01610',
      '01620',
      '01630',
      '01640',
      '01650',
      '01660',
      '01670',
      '01680',
      '01690',
      '01700',
      '01710',
      '01720',
      '01730',
      '01740',
      '01750',
      '01760',
      '01770',
    ],
  },
  {
    id: 3,
    cityName: 'espoo',
    codes: [
      '02100',
      '02110',
      '02120',
      '02130',
      '02140',
      '02150',
      '02160',
      '02170',
      '02180',
      '02200',
      '02210',
      '02230',
      '02240',
      '02250',
      '02260',
      '02270',
      '02280',
      '02290',
      '02300',
      '02320',
      '02330',
      '02340',
      '02360',
      '02380',
      '02600',
      '02610',
      '02620',
      '02630',
      '02650',
      '02660',
      '02680',
      '02710',
      '02720',
      '02730',
      '02740',
      '02750',
      '02760',
      '02770',
      '02780',
      '02810',
      '02820',
      '02860',
      '02920',
      '02940',
      '02970',
      '02980',
    ],
  },
];

export const cityWiseDeliveryPrice: CityPrice = {
  espoo: 1.49,
  vantaa: 2.49,
  helsinki: 0,
};

export const rushHourObj = [
  {
    id: 1,
    day: 'sunday',
    dayNum: 0,
    rushHourStart: 10,
    rushHourEnd: 15,
  },
  {
    id: 2,
    day: 'monday',
    dayNum: 1,
    rushHourStart: 10,
    rushHourEnd: 21,
  },
  {
    id: 3,
    day: 'tuesday',
    dayNum: 2,
    rushHourStart: 10,
    rushHourEnd: 15,
  },
  {
    id: 4,
    day: 'wednesday',
    dayNum: 3,
    rushHourStart: 10,
    rushHourEnd: 15,
  },
  {
    id: 5,
    day: 'thursday',
    dayNum: 4,
    rushHourStart: 10,
    rushHourEnd: 15,
  },
  {
    id: 6,
    day: 'friday',
    dayNum: 5,
    rushHourStart: 10,
    rushHourEnd: 18,
  },
  {
    id: 7,
    day: 'saturday',
    dayNum: 6,
    rushHourStart: 10,
    rushHourEnd: 18,
  },
];

export function findCityFromPostalCode(codeToCheck: string) {
  const city = postalCodes.find((city) => city.codes.includes(codeToCheck));
  return city && city.cityName;
}

export function isPostalCodeInDeliveryRange(postalCode: string) {
    return !!findCityFromPostalCode(postalCode);
}

export function isRushHour() {
  const currentDate = new Date();
  const today = currentDate.getDay();
  const currentTime = currentDate.getHours();

  const rushHour = rushHourObj.find((day) => day.dayNum === today);
  return (
    rushHour &&
    currentTime >= rushHour.rushHourStart &&
    currentTime < rushHour.rushHourEnd
  );
}

export function findCityWisePrice(postalCode: string) {
  const cityname = findCityFromPostalCode(postalCode);
  console.log(cityname);
  if (cityname) {
    return cityWiseDeliveryPrice[cityname];
  }
}

export async function calculateDeliveryFee(totalAmount: number, postalCode: string) {
  let baseFee = 2.49;
  const cityDistanceCharge = findCityWisePrice(postalCode) ?? 0;

  let totalDeliveryFee = baseFee + cityDistanceCharge;
  if (isRushHour()) {
    totalDeliveryFee += 1.99;
  }
  const totalToPay = totalAmount + totalDeliveryFee;

  return {
    totalAmount,
    totalDeliveryFee,
    totalToPay,
    rushHourCharged: isRushHour(),
  };
}
