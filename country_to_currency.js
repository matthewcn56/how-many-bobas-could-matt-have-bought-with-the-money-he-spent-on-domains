const countryToCurrency = {
  AD: { currency: 'EUR' },
  AE: { currency: 'AED' },
  AF: { currency: 'AFN' },
  AG: { currency: 'XCD' },
  AI: { currency: 'XCD' },
  AL: { currency: 'ALL' },
  AM: { currency: 'AMD' },
  AO: { currency: 'AOA' },
  AR: { currency: 'ARS' },
  AS: { currency: 'USD' },
  AT: { currency: 'EUR' },
  AU: { currency: 'AUD' },
  AW: { currency: 'AWG' },
  AX: { currency: 'EUR' },
  AZ: { currency: 'AZN' },
  BA: { currency: 'BAM' },
  BB: { currency: 'BBD' },
  BD: { currency: 'BDT' },
  BE: { currency: 'EUR' },
  BF: { currency: 'XOF' },
  BG: { currency: 'BGN' },
  BH: { currency: 'BHD' },
  BI: { currency: 'BIF' },
  BJ: { currency: 'XOF' },
  BL: { currency: 'EUR' },
  BM: { currency: 'BMD' },
  BN: { currency: 'BND' },
  BO: { currency: 'BOB' },
  BQ: { currency: 'USD' },
  BR: { currency: 'BRL' },
  BS: { currency: 'BSD' },
  BT: { currency: 'INR' },
  BV: { currency: 'NOK' },
  BW: { currency: 'BWP' },
  BY: { currency: 'BYN' },
  BZ: { currency: 'BZD' },
  CA: { currency: 'CAD' },
  CC: { currency: 'AUD' },
  CD: { currency: 'CDF' },
  CF: { currency: 'XAF' },
  CG: { currency: 'XAF' },
  CH: { currency: 'CHF' },
  CI: { currency: 'XOF' },
  CK: { currency: 'NZD' },
  CL: { currency: 'CLP' },
  CM: { currency: 'XAF' },
  CN: { currency: 'CNY' },
  CO: { currency: 'COP' },
  CR: { currency: 'CRC' },
  CU: { currency: 'CUP' },
  CV: { currency: 'CVE' },
  CW: { currency: 'ANG' },
  CX: { currency: 'AUD' },
  CY: { currency: 'EUR' },
  CZ: { currency: 'CZK' },
  DE: { currency: 'EUR' },
  DJ: { currency: 'DJF' },
  DK: { currency: 'DKK' },
  DM: { currency: 'XCD' },
  DO: { currency: 'DOP' },
  DZ: { currency: 'DZD' },
  EC: { currency: 'USD' },
  EE: { currency: 'EUR' },
  EG: { currency: 'EGP' },
  EH: { currency: 'MAD' },
  ER: { currency: 'ERN' },
  ES: { currency: 'EUR' },
  ET: { currency: 'ETB' },
  FI: { currency: 'EUR' },
  FJ: { currency: 'FJD' },
  FK: { currency: 'FKP' },
  FM: { currency: 'USD' },
  FO: { currency: 'DKK' },
  FR: { currency: 'EUR' },
  GA: { currency: 'XAF' },
  GB: { currency: 'GBP' },
  GD: { currency: 'XCD' },
  GE: { currency: 'GEL' },
  GF: { currency: 'EUR' },
  GG: { currency: 'GGP' },
  GH: { currency: 'GHS' },
  GI: { currency: 'GIP' },
  GL: { currency: 'DKK' },
  GM: { currency: 'GMD' },
  GN: { currency: 'GNF' },
  GP: { currency: 'EUR' },
  GQ: { currency: 'XAF' },
  GR: { currency: 'EUR' },
  GS: { currency: 'GBP' },
  GT: { currency: 'GTQ' },
  GU: { currency: 'USD' },
  GW: { currency: 'XOF' },
  GY: { currency: 'GYD' },
  HK: { currency: 'HKD' },
  HM: { currency: 'AUD' },
  HN: { currency: 'HNL' },
  HR: { currency: 'HRK' },
  HT: { currency: 'HTG' },
  HU: { currency: 'HUF' },
  ID: { currency: 'IDR' },
  IE: { currency: 'EUR' },
  IL: { currency: 'ILS' },
  IM: { currency: 'GBP' },
  IN: { currency: 'INR' },
  IO: { currency: 'USD' },
  IQ: { currency: 'IQD' },
  IR: { currency: 'IRR' },
  IS: { currency: 'ISK' },
  IT: { currency: 'EUR' },
  JE: { currency: 'GBP' },
  JM: { currency: 'JMD' },
  JO: { currency: 'JOD' },
  JP: { currency: 'JPY' },
  KE: { currency: 'KES' },
  KG: { currency: 'KGS' },
  KH: { currency: 'KHR' },
  KI: { currency: 'AUD' },
  KM: { currency: 'KMF' },
  KN: { currency: 'XCD' },
  KP: { currency: 'KPW' },
  KR: { currency: 'KRW' },
  KW: { currency: 'KWD' },
  KY: { currency: 'KYD' },
  KZ: { currency: 'KZT' },
  LA: { currency: 'LAK' },
  LB: { currency: 'LBP' },
  LC: { currency: 'XCD' },
  LI: { currency: 'CHF' },
  LK: { currency: 'LKR' },
  LR: { currency: 'LRD' },
  LS: { currency: 'LSL' },
  LT: { currency: 'EUR' },
  LU: { currency: 'EUR' },
  LV: { currency: 'EUR' },
  LY: { currency: 'LYD' },
  MA: { currency: 'MAD' },
  MC: { currency: 'EUR' },
  MD: { currency: 'MDL' },
  ME: { currency: 'EUR' },
  MF: { currency: 'EUR' },
  MG: { currency: 'MGA' },
  MH: { currency: 'USD' },
  MK: { currency: 'MKD' },
  ML: { currency: 'XOF' },
  MM: { currency: 'MMK' },
  MN: { currency: 'MNT' },
  MO: { currency: 'MOP' },
  MP: { currency: 'USD' },
  MQ: { currency: 'EUR' },
  MR: { currency: 'MRO' },
  MS: { currency: 'XCD' },
  MT: { currency: 'EUR' },
  MU: { currency: 'MUR' },
  MV: { currency: 'MVR' },
  MW: { currency: 'MWK' },
  MX: { currency: 'MXN' },
  MY: { currency: 'MYR' },
  MZ: { currency: 'MZN' },
  NA: { currency: 'NAD' },
  NC: { currency: 'XPF' },
  NE: { currency: 'XOF' },
  NF: { currency: 'AUD' },
  NG: { currency: 'NGN' },
  NI: { currency: 'NIO' },
  NL: { currency: 'EUR' },
  NO: { currency: 'NOK' },
  NP: { currency: 'NPR' },
  NR: { currency: 'AUD' },
  NU: { currency: 'NZD' },
  NZ: { currency: 'NZD' },
  OM: { currency: 'OMR' },
  PA: { currency: 'PAB' },
  PE: { currency: 'PEN' },
  PF: { currency: 'XPF' },
  PG: { currency: 'PGK' },
  PH: { currency: 'PHP' },
  PK: { currency: 'PKR' },
  PL: { currency: 'PLN' },
  PM: { currency: 'EUR' },
  PN: { currency: 'NZD' },
  PR: { currency: 'USD' },
  PS: { currency: 'JOD' },
  PT: { currency: 'EUR' },
  PW: { currency: 'USD' },
  PY: { currency: 'PYG' },
  QA: { currency: 'QAR' },
  RE: { currency: 'EUR' },
  RO: { currency: 'RON' },
  RS: { currency: 'RSD' },
  RU: { currency: 'RUB' },
  RW: { currency: 'RWF' },
  SA: { currency: 'SAR' },
  SB: { currency: 'SBD' },
  SC: { currency: 'SCR' },
  SD: { currency: 'SDG' },
  SE: { currency: 'SEK' },
  SG: { currency: 'SGD' },
  SH: { currency: 'SHP' },
  SI: { currency: 'EUR' },
  SJ: { currency: 'NOK' },
  SK: { currency: 'EUR' },
  SL: { currency: 'SLL' },
  SM: { currency: 'EUR' },
  SN: { currency: 'XOF' },
  SO: { currency: 'SOS' },
  SR: { currency: 'SRD' },
  SS: { currency: 'SSP' },
  ST: { currency: 'STD' },
  SV: { currency: 'USD' },
  SX: { currency: 'ANG' },
  SY: { currency: 'SYP' },
  SZ: { currency: 'SZL' },
  TC: { currency: 'USD' },
  TD: { currency: 'XAF' },
  TF: { currency: 'EUR' },
  TG: { currency: 'XOF' },
  TH: { currency: 'THB' },
  TJ: { currency: 'TJS' },
  TK: { currency: 'NZD' },
  TL: { currency: 'USD' },
  TM: { currency: 'TMT' },
  TN: { currency: 'TND' },
  TO: { currency: 'TOP' },
  TR: { currency: 'TRY' },
  TT: { currency: 'TTD' },
  TV: { currency: 'AUD' },
  TW: { currency: 'TWD' },
  TZ: { currency: 'TZS' },
  UA: { currency: 'UAH' },
  UG: { currency: 'UGX' },
  UM: { currency: 'USD' },
  US: { currency: 'USD' },
  UY: { currency: 'UYU' },
  UZ: { currency: 'UZS' },
  VA: { currency: 'EUR' },
  VC: { currency: 'XCD' },
  VE: { currency: 'VEF' },
  VG: { currency: 'USD' },
  VI: { currency: 'USD' },
  VN: { currency: 'VND' },
  VU: { currency: 'VUV' },
  WF: { currency: 'XPF' },
  WS: { currency: 'EUR' },
  YE: { currency: 'YER' },
  YT: { currency: 'EUR' },
  ZA: { currency: 'ZAR' },
  ZM: { currency: 'ZMW' },
  ZW: { currency: 'USD' },
};
