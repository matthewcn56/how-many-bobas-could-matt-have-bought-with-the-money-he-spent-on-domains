const salesTaxRates = {
  AL: {
    type: 'vat',
    rate: 0.2,
  },

  AR: {
    type: 'vat',
    rate: 0.21,
  },

  AM: {
    type: 'vat',
    rate: 0.2,
  },

  AU: {
    type: 'gst',
    rate: 0.1,
  },

  AT: {
    type: 'vat',
    rate: 0.2,
  },

  AZ: {
    type: 'vat',
    rate: 0.18,
  },

  BS: {
    type: 'vat',
    rate: 0.075,
  },

  BH: {
    type: 'vat',
    rate: 0.05,
  },

  BB: {
    type: 'vat',
    rate: 0.175,
  },

  BY: {
    type: 'vat',
    rate: 0.2,
  },

  BE: {
    type: 'vat',
    rate: 0.21,
  },

  BO: {
    type: 'vat',
    rate: 0.1494,
  },

  BW: {
    type: 'vat',
    rate: 0.12,
  },

  BR: {
    type: 'vat',
    rate: 0.35,
  },

  BG: {
    type: 'vat',
    rate: 0.2,
  },

  CA: {
    type: 'gst',
    rate: 0.05,

    states: {
      BC: {
        rate: 0.07,
        type: 'pst',
      },

      MB: {
        rate: 0.07,
        type: 'rst',
      },

      NB: {
        rate: 0.1,
        type: 'hst',
      },

      NL: {
        rate: 0.1,
        type: 'hst',
      },

      NS: {
        rate: 0.1,
        type: 'hst',
      },

      ON: {
        rate: 0.08,
        type: 'hst',
      },

      PE: {
        rate: 0.1,
        type: 'hst',
      },

      QC: {
        rate: 0.09975,
        type: 'qst',
      },

      SK: {
        rate: 0.06,
        type: 'pst',
      },
    },
  },

  CL: {
    type: 'vat',
    rate: 0.19,
  },

  CN: {
    type: 'vat',
    rate: 0.16,
  },

  CO: {
    type: 'vat',
    rate: 0.19,
  },

  CR: {
    type: 'vat',
    rate: 0.13,
  },

  HR: {
    type: 'vat',
    rate: 0.25,
  },

  CW: {
    type: 'vat',
    rate: 0.06,
  },

  CY: {
    type: 'vat',
    rate: 0.19,
  },

  CZ: {
    type: 'vat',
    rate: 0.21,
  },

  DK: {
    type: 'vat',
    rate: 0.25,
  },

  DO: {
    type: 'vat',
    rate: 0.18,
  },

  DZ: {
    type: 'vat',
    rate: 0.19,
  },

  EC: {
    type: 'vat',
    rate: 0.14,
  },

  EG: {
    type: 'vat',
    rate: 0.14,
  },

  SV: {
    type: 'vat',
    rate: 0.13,
  },

  EE: {
    type: 'vat',
    rate: 0.2,
  },

  FI: {
    type: 'vat',
    rate: 0.24,
  },

  FR: {
    type: 'vat',
    rate: 0.2,
  },

  GE: {
    type: 'vat',
    rate: 0.18,
  },

  DE: {
    type: 'vat',
    rate: 0.19,

    before: {
      '2020-12-31T22:00:00.000Z': {
        type: 'vat',
        rate: 0.16,
      },

      '2020-06-30T22:00:00.000Z': {
        type: 'vat',
        rate: 0.19,
      },
    },
  },

  GH: {
    type: 'vat',
    rate: 0.125,
  },

  GR: {
    type: 'vat',
    rate: 0.24,
  },

  GT: {
    type: 'vat',
    rate: 0.12,
  },

  HN: {
    type: 'vat',
    rate: 0.15,
  },

  HU: {
    type: 'vat',
    rate: 0.27,
  },

  IS: {
    type: 'vat',
    rate: 0.24,
  },

  IN: {
    type: 'gst',
    rate: 0.18,
  },

  ID: {
    type: 'vat',
    rate: 0.1,
  },

  IE: {
    type: 'vat',
    rate: 0.23,

    before: {
      '2021-02-28T22:00:00.000Z': {
        type: 'vat',
        rate: 0.21,
      },

      '2020-08-31T22:00:00.000Z': {
        type: 'vat',
        rate: 0.23,
      },
    },
  },

  IM: {
    type: 'vat',
    rate: 0.2,
  },

  IL: {
    type: 'vat',
    rate: 0.17,
  },

  IT: {
    type: 'vat',
    rate: 0.22,
  },

  JP: {
    type: 'vat',
    rate: 0.08,
  },

  JE: {
    type: 'vat',
    rate: 0.05,
  },

  JO: {
    type: 'vat',
    rate: 0.16,
  },

  KZ: {
    type: 'vat',
    rate: 0.12,
  },

  KE: {
    type: 'vat',
    rate: 0.14,
  },

  KR: {
    type: 'vat',
    rate: 0.1,
  },

  XK: {
    type: 'vat',
    rate: 0.18,
  },

  KW: {
    type: 'vat',
    rate: 0.05,
  },

  LI: {
    type: 'vat',
    rate: 0.077,
  },

  LV: {
    type: 'vat',
    rate: 0.21,
  },

  LB: {
    type: 'vat',
    rate: 0.1,
  },

  LT: {
    type: 'vat',
    rate: 0.21,
  },

  LU: {
    type: 'vat',
    rate: 0.17,
  },

  MC: {
    type: 'vat',
    rate: 0.2,
  },

  MK: {
    type: 'vat',
    rate: 0.18,
  },

  MG: {
    type: 'vat',
    rate: 0.2,
  },

  MY: {
    type: 'vat',
    rate: 0.1,
  },

  MV: {
    type: 'vat',
    rate: 0.06,
  },

  MT: {
    type: 'vat',
    rate: 0.18,
  },

  MU: {
    type: 'vat',
    rate: 0.15,
  },

  MX: {
    type: 'vat',
    rate: 0.16,
  },

  MD: {
    type: 'vat',
    rate: 0.2,
  },

  MN: {
    type: 'vat',
    rate: 0.1,
  },

  MA: {
    type: 'vat',
    rate: 0.2,
  },

  MM: {
    type: 'vat',
    rate: 0.05,
  },

  NA: {
    type: 'vat',
    rate: 0.15,
  },

  NL: {
    type: 'vat',
    rate: 0.21,
  },

  NZ: {
    type: 'vat',
    rate: 0.15,
  },

  NI: {
    type: 'vat',
    rate: 0.15,
  },

  NG: {
    type: 'vat',
    rate: 0.05,
  },

  NO: {
    type: 'vat',
    rate: 0.25,
  },

  OM: {
    type: 'vat',
    rate: 0.05,
  },

  PK: {
    type: 'vat',
    rate: 0.16,
  },

  PA: {
    type: 'vat',
    rate: 0.07,
  },

  PG: {
    type: 'vat',
    rate: 0.1,
  },

  PY: {
    type: 'vat',
    rate: 0.1,
  },

  PE: {
    type: 'vat',
    rate: 0.18,
  },

  PH: {
    type: 'vat',
    rate: 0.12,
  },

  PL: {
    type: 'vat',
    rate: 0.23,
  },

  PT: {
    type: 'vat',
    rate: 0.23,
  },

  PR: {
    type: 'vat',
    rate: 0.105,
  },

  QA: {
    type: 'vat',
    rate: 0.05,
  },

  RO: {
    type: 'vat',
    rate: 0.19,
  },

  RU: {
    type: 'vat',
    rate: 0.2,
  },

  RW: {
    type: 'vat',
    rate: 0.18,
  },

  LC: {
    type: 'vat',
    rate: 0.15,
  },

  SA: {
    type: 'vat',
    rate: 0.15,
  },

  RS: {
    type: 'vat',
    rate: 0.2,
  },

  SC: {
    type: 'vat',
    rate: 0.15,
  },

  SG: {
    type: 'vat',
    rate: 0.07,
  },

  SK: {
    type: 'vat',
    rate: 0.2,
  },

  SI: {
    type: 'vat',
    rate: 0.22,
  },

  ZA: {
    type: 'vat',
    rate: 0.15,
  },

  ES: {
    type: 'vat',
    rate: 0.21,

    states: {
      GC: {
        rate: -0.21,
        type: 'vat',
      },

      TF: {
        rate: -0.21,
        type: 'vat',
      },

      CE: {
        rate: -0.21,
        type: 'vat',
      },

      ML: {
        rate: -0.21,
        type: 'vat',
      },
    },
  },

  SR: {
    type: 'vat',
    rate: 0.1,
  },

  SE: {
    type: 'vat',
    rate: 0.25,
  },

  CH: {
    type: 'vat',
    rate: 0.077,
  },

  TW: {
    type: 'vat',
    rate: 0.05,
  },

  TZ: {
    type: 'vat',
    rate: 0.18,
  },

  TH: {
    type: 'vat',
    rate: 0.07,
  },

  TT: {
    type: 'vat',
    rate: 0.125,
  },

  TN: {
    type: 'vat',
    rate: 0.18,
  },

  TR: {
    type: 'vat',
    rate: 0.18,
  },

  UG: {
    type: 'vat',
    rate: 0.18,
  },

  AE: {
    type: 'vat',
    rate: 0.05,
  },

  AO: {
    type: 'vat',
    rate: 0.14,
  },

  GB: {
    type: 'vat',
    rate: 0.2,
  },

  US: {
    type: 'none',
    rate: 0.0,

    states: {
      HI: {
        rate: 0.04,
        type: 'vat',
      },

      MA: {
        rate: 0.0625,
        type: 'vat',
      },

      RI: {
        rate: 0.07,
        type: 'vat',
      },

      CT: {
        rate: 0.06,
        type: 'vat',
      },

      NJ: {
        rate: 0.07,
        type: 'vat',
      },

      MD: {
        rate: 0.06,
        type: 'vat',
      },

      DC: {
        rate: 0.06,
        type: 'vat',
      },

      WA: {
        rate: 0.065,
        type: 'vat',
      },

      CA: {
        rate: 0.0825,
        type: 'vat',
      },

      NV: {
        rate: 0.0685,
        type: 'vat',
      },

      ID: {
        rate: 0.06,
        type: 'vat',
      },

      WY: {
        rate: 0.04,
        type: 'vat',
      },

      UT: {
        rate: 0.0595,
        type: 'vat',
      },

      AZ: {
        rate: 0.066,
        type: 'vat',
      },

      CO: {
        rate: 0.029,
        type: 'vat',
      },

      NM: {
        rate: 0.05125,
        type: 'vat',
      },

      ND: {
        rate: 0.05,
        type: 'vat',
      },

      SD: {
        rate: 0.04,
        type: 'vat',
      },

      NE: {
        rate: 0.055,
        type: 'vat',
      },

      KS: {
        rate: 0.063,
        type: 'vat',
      },

      OK: {
        rate: 0.045,
        type: 'vat',
      },

      TX: {
        rate: 0.0625,
        type: 'vat',
      },

      MN: {
        rate: 0.06875,
        type: 'vat',
      },

      IA: {
        rate: 0.06,
        type: 'vat',
      },

      MO: {
        rate: 0.04225,
        type: 'vat',
      },

      AR: {
        rate: 0.06,
        type: 'vat',
      },

      LA: {
        rate: 0.04,
        type: 'vat',
      },

      WI: {
        rate: 0.05,
        type: 'vat',
      },

      IL: {
        rate: 0.0625,
        type: 'vat',
      },

      MI: {
        rate: 0.06,
        type: 'vat',
      },

      IN: {
        rate: 0.07,
        type: 'vat',
      },

      OH: {
        rate: 0.055,
        type: 'vat',
      },

      KY: {
        rate: 0.06,
        type: 'vat',
      },

      TN: {
        rate: 0.07,
        type: 'vat',
      },

      MS: {
        rate: 0.07,
        type: 'vat',
      },

      AL: {
        rate: 0.04,
        type: 'vat',
      },

      GA: {
        rate: 0.04,
        type: 'vat',
      },

      FL: {
        rate: 0.06,
        type: 'vat',
      },

      ME: {
        rate: 0.05,
        type: 'vat',
      },

      VT: {
        rate: 0.06,
        type: 'vat',
      },

      NY: {
        rate: 0.04,
        type: 'vat',
      },

      PA: {
        rate: 0.06,
        type: 'vat',
      },

      WV: {
        rate: 0.06,
        type: 'vat',
      },

      VA: {
        rate: 0.05,
        type: 'vat',
      },

      NC: {
        rate: 0.0575,
        type: 'vat',
      },

      SC: {
        rate: 0.06,
        type: 'vat',
      },
    },
  },

  UY: {
    type: 'vat',
    rate: 0.22,
  },

  VE: {
    type: 'vat',
    rate: 0.16,
  },

  VN: {
    type: 'vat',
    rate: 0.1,
  },

  ZM: {
    type: 'vat',
    rate: 0.16,
  },

  ZW: {
    type: 'vat',
    rate: 0.15,
  },
};
