import type { Vehicle } from '@/types/Vehicle';

const dummyFiller: any = {
  adAttribs: {
    itemUrl: '',
    makeAnOffer: '',
    priceDisclaimer: '',
    requestAPrice: '',
    videoBorchueNarationStyle: '',
  },
  adDetailUrl: '',
  adFeatures: {
    buyNow: false,
    featuredHomepage: false,
    featuredSearch: false,
    hideFloorPlans: false,
    oneYearPackage: false,
    paaVideo: false,
    premium: false,
    topPremium: false,
  },
  cityStateFacet: '',
  classId: '',
  className: '',
  companyName: '',
  createDate: '',
  createDateFormatted: '',
  customerId: '',
  dealerFeatures: {
    deactivateContactDealer: false,
    hasAccessIndustryAero: false,
    hasAccessIndustryBoatline: false,
    hasAccessIndustryCycle: false,
    hasAccessIndustryEquipment: false,
    hasAccessIndustryNextruck: false,
    hasAccessIndustryRV: false,
    hasAccessIndustryRentalsCycle: false,
    hasAccessIndustryRentalsRv: false,
    hasAccessIndustryRockAndDirt: false,
    hasAccessIndustryTradeAPlane: false,
    hasAccessIndustryTradeEquip: false,
    hasAccessIndustryTrailer: false,
    hasAccessIndustryTruck: false,
    hasAdLocationLockdown: false,
    hasAdPearance: false,
    hasAutoSelectUnusedBundle: false,
    hasClickToCall: false,
    hasClickToWeb: false,
    hasContactAtOnce: false,
    hasContactAtOnceTexting: false,
    hasCoreLite: false,
    hasDealDesignation: false,
    hasDealerCoreLeadManager: false,
    hasDigitalRetailingBuyNow: false,
    hasDigitalRetailingEnhancedLead: false,
    hasFacebookRetargeting: false,
    hasGreenFlag: false,
    hasHideDealerWebsiteLink: false,
    hasHideFactorySpecs: false,
    hasHideFinance: false,
    hasHideInspection: false,
    hasHideLoanCalculator: false,
    hasHideShipping: false,
    hasHideStandardFeatures: false,
    hasHideTaglines: false,
    hasInternetAdvertising: false,
    hasMakeAnOffer: false,
    hasMakeAnOfferPrice: false,
    hasMapIt: false,
    hasOctaneFinance: false,
    hasOptOutDealerGroupLeaderboard: false,
    hasOptOutDealerGroupRollup: false,
    hasOptOutDealerGroupSharedLogin: false,
    hasOptOutDealerGroupWebsite: false,
    hasRemoveLoanCalcDealerFinancing: false,
    hasRemoveVinFromDisplay: false,
    hasRental: false,
    hasRequestBestPrice: false,
    hasRequestPrice: false,
    hasRequestQuotePreorder: false,
    hasRequestQuoteWeBuy: false,
    hasRequestTradeIn: false,
    hasShiftDigital: false,
    hasShowListingAddress: false,
    hasShutOffAdvertising: false,
    hasShutOffDigitRetailVDP: false,
    hasSuggestedTrucks: false,
    hasTalkingBrochure: false,
    hasTiChat: false,
    hasTiChatGuestDisabled: false,
    hasTiChatManaged: false,
    hasTradeIn: false,
    hasTradeInFeature: false,
    hasTradertraxxCombinedExperience: false,
    hasVideo: false,
    hasVideoChatRequest: false,
    hasVr: false,
    isHibernate: false,
    removeRequestPhotoVideo: false,
  },
  dealerGroupDealerCount: '',
  dealerGroupId: '',
  dealerId: '',
  dealerWebsiteUrl: '',
  description: '',
  engine: '',
  id: '',
  isBuynow: '',
  isFeatured: '',
  isToppremium: '',
  latitude: '',
  longitude: '',
  mfrSerialNum: null,
  msrp: null,
  photoCount: 0,
  rebate: null,
  schemeCode: '',
  score: 0,
  sellerType: '',
  websiteUrl: null,
};

export const dummyVehicles: Vehicle[] = [
  {
    adId: 0,
    adListingPosition: 0,
    categoryName: [],
    city: 'Springwells Township',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Ford'],
    modelFacet: [],
    modelName: ['Model-T'],
    phone: '18005551234',
    photoIds: [],
    price: 850,
    stateCode: 'MI',
    trimName: [],
    year: 1904,
    ...dummyFiller,
  },
  {
    adId: 1,
    adListingPosition: 1,
    categoryName: [],
    city: 'Pittsburgh',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Fisher-Price'],
    modelFacet: [],
    modelName: ['Power Wheels'],
    phone: '7575551234',
    photoIds: [],
    price: 334,
    stateCode: 'PA',
    trimName: [],
    year: 1994,
    ...dummyFiller,
  },
  {
    adId: 2,
    adListingPosition: 2,
    categoryName: [],
    city: 'Norfolk',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Honda'],
    modelFacet: [],
    modelName: ['Fit'],
    phone: '5551234',
    photoIds: [],
    price: 8000,
    stateCode: 'VA',
    trimName: [],
    year: 2008,
    ...dummyFiller,
  },
  {
    adId: 3,
    adListingPosition: 3,
    categoryName: [],
    city: 'Virginia Beach',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Honda'],
    modelFacet: [],
    modelName: ['Goldwing'],
    phone: '18005551234',
    photoIds: [],
    price: 16000,
    stateCode: 'VA',
    trimName: [],
    year: 2018,
    ...dummyFiller,
  },
  {
    adId: 4,
    adListingPosition: 4,
    categoryName: [],
    city: 'The Moon',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Telsa'],
    modelFacet: [],
    modelName: ['Cybertruck'],
    phone: '18005551234',
    photoIds: [],
    price: 50000,
    stateCode: 'N/A',
    trimName: [],
    year: 2023,
    ...dummyFiller,
  },
  {
    adId: 5,
    adListingPosition: 5,
    categoryName: [],
    city: 'The Batcave',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Wayne Industries'],
    modelFacet: [],
    modelName: ['Batmobile'],
    phone: '18005551234',
    photoIds: [],
    price: 123456789,
    stateCode: 'N/A',
    trimName: [],
    year: 2023,
    ...dummyFiller,
  },
  {
    adId: 6,
    adListingPosition: 6,
    categoryName: [],
    city: 'Real Life',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Acme'],
    modelFacet: [],
    modelName: ['Motorcar'],
    phone: '18005551234',
    photoIds: [],
    price: 10000,
    stateCode: 'N/A',
    trimName: [],
    year: 2000,
    ...dummyFiller,
  },
  {
    adId: 7,
    adListingPosition: 7,
    categoryName: [],
    city: 'Real Life',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Acme'],
    modelFacet: [],
    modelName: ['Motorcar'],
    phone: '18005551234',
    photoIds: [],
    price: 10000,
    stateCode: 'N/A',
    trimName: [],
    year: 2000,
    ...dummyFiller,
  },
  {
    adId: 8,
    adListingPosition: 8,
    categoryName: [],
    city: 'Real Life',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Acme'],
    modelFacet: [],
    modelName: ['Motorcar'],
    phone: '18005551234',
    photoIds: [],
    price: 10000,
    stateCode: 'N/A',
    trimName: [],
    year: 2000,
    ...dummyFiller,
  },
  {
    adId: 9,
    adListingPosition: 9,
    categoryName: [],
    city: 'Real Life',
    condition: 'New',
    dealerGroupName: 'Fake Dealer',
    dealerPhone: [],
    isPremium: 'true',
    makeFacet: [],
    makeId: [],
    makeName: ['Acme'],
    modelFacet: [],
    modelName: ['Motorcar'],
    phone: '18005551234',
    photoIds: [],
    price: 10000,
    stateCode: 'N/A',
    trimName: [],
    year: 2000,
    ...dummyFiller,
  },
];
