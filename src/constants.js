//swiggy api === https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const FETCH_MENU_URL =
  'https://www.swiggy.com/dapi/menu/v4/full?lat=15.5057232&lng=80.049922&menuId=';

export const restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '342032',
      name: 'Bhartiya Jalpan',
      uuid: '9bd9aa90-0b97-4f24-969a-3f16c5aafc66',
      city: '1',
      area: 'HSR Layout',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'ybfyjdu8fhlgqj6i9dlh',
      cuisines: ['North Indian', 'Sweets', 'Desserts', 'Chaat'],
      tags: [],
      costForTwo: 45000,
      costForTwoString: '₹450 FOR TWO',
      deliveryTime: 32,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: '30-40 MINS',
      lastMileTravel: 4.900000095367432,
      slugs: {
        restaurant: 'bhartiya-jalpan-hsr-hsr',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'NO.2631,27TH MAIN ROAD, 1ST SECTOR , HSR LAYOUT, BANGALORE - 560102',
      locality: '1st Sector',
      parentId: 7518,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5953186~p=1~eid=00000186-65c5-dae2-0f3c-247700a1016a',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4.9 kms',
      hasSurge: false,
      sla: {
        restaurantId: '342032',
        deliveryTime: 32,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 4.900000095367432,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.2',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '45754',
      name: 'Dhaba Shaba',
      uuid: 'ad69acd6-6f97-48e8-b2c8-0f658cd3ba81',
      city: '1',
      area: 'Sarjapur Road',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'c5z4you4mdxnsdjxaig8',
      cuisines: ['North Indian', 'Punjabi', 'Thalis', 'Indian'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 7.5,
      slugs: {
        restaurant: 'dhaba-shaba-bellandursarjapur-sarjapur-disabled',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'House No-71/1A, Shop No-3, Ground Floor Lingappa Reddy complex Kaikondrahalli Varthurhobli Carmelara, Devanahalli, Bangalore Rural (Karnataka), - 560035',
      locality: 'Kaikondrahalli',
      parentId: 21531,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '15% off',
        shortDescriptionList: [
          {
            meta: '15% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '15% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '15% OFF',
        shortDescriptionList: [
          {
            meta: 'Free Delivery',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '15% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: 'Closes soon',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '7.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '45754',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 7.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.2',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '237465',
      name: 'Edesia by Freshmenu',
      uuid: '8990135b-4750-4b88-ad3a-4618d1e9113a',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'uaoxurm8pipynwmya4b8',
      cuisines: ['Desserts', 'Bakery', 'Sweets'],
      tags: [],
      costForTwo: 15000,
      costForTwoString: '₹150 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: '20-30 MINS',
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: 'edesia-1st-block-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'Besides Kateramma Temple, No 38, 1, 1st Cross Rd, Jakkasandra, Block,Bangalore:560034, Koramangala, Bengaluru, Karnataka 560034',
      locality: 'Jakkasandra',
      parentId: 11246,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: 'Closes soon',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '237465',
        deliveryTime: 23,
        minDeliveryTime: 20,
        maxDeliveryTime: 30,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '444178',
      name: 'Magnolia Bakery',
      uuid: '8cd8348a-2edd-4a13-8840-c2fc77396821',
      city: '1',
      area: 'Indiranagar',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: '6f0945b8b18d9f4241dd1cd9a70e23d7',
      cuisines: ['Bakery', 'Desserts', 'Ice Cream'],
      tags: [],
      costForTwo: 50000,
      costForTwoString: '₹500 FOR TWO',
      deliveryTime: 44,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: '40-50 MINS',
      lastMileTravel: 5,
      slugs: {
        restaurant: 'magnolia-bakery-indiranagar-indiranagar',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'J.K. Plaza, 788, 12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038',
      locality: 'JK Plaza',
      parentId: 267303,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5799697~p=4~eid=00000186-65c5-dae2-0f3c-247800a10406',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '444178',
        deliveryTime: 44,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.5',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '532081',
      name: 'The Baklava Company',
      uuid: '67133945-1288-4945-b1b8-5643de273fa3',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: '91439fcc998dc6c3bbfbf926d7526bb2',
      cuisines: ['Desserts', 'Turkish', 'Arabian'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: 'the-baklava-company-koramangala-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'No.60, Ground Floor 17th F1B Main, 2nd B  Cross , KHB Colony, Koramangala 5th  Block, Bangalore, BTM Layout , B.B.M.P  South, Karnataka - 560095',
      locality: 'KHB Colony',
      parentId: 204973,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '532081',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '534654',
      name: 'The Licious Kitchen',
      uuid: '70d00f1f-9ac7-4d89-aae8-02c5b0799f7d',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'yhzzdcl90e1oxqzxhfpf',
      cuisines: ['Kebabs', 'Snacks', 'Tandoor', 'North Indian', 'Beverages'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 0.5,
      slugs: {
        restaurant: 'the-licious-kitchen-koramangala-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'The Licious Store99, Gr Flr- ARD Complex5th Cross rd, 6th BlockKoramangala560095',
      locality: '6th Block',
      parentId: 321223,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5822448~p=7~eid=00000186-65c5-dae2-0f3c-247900a10758',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '534654',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.1',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '638983',
      name: 'Punjab Kitchen',
      uuid: '787a1e0d-0779-47f2-8091-570c626ee16c',
      city: '1',
      area: 'Bommanahalli',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'pnigw4u2imjb2mkvzuyy',
      cuisines: ['North Indian', 'Chinese', 'Indian'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: '40 MINS',
      lastMileTravel: 3.5999999046325684,
      slugs: {
        restaurant: 'punjab-kitchen-btm-btm-2',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'No.74 GROUND, 2nd Cross Road, 9th Main Rd, NGR Layout, Roopena Agrahara, Bommanahalli, Bengaluru, Karnataka 560068, India',
      locality: 'NGR Layout',
      parentId: 162022,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹90 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '638983',
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 3.5999999046325684,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
];
