import { PublicApi, SERVER_URL } from '../serviceSetting'

export interface Goods {
  data: {
    list: Good[]
  }
}

export interface Good {
  goodsNo: number
  goodsName: string
  price: number
  brandName: string
  imageUrl: string
  linkUrl: string
  brandLinkUrl: string
  normalPrice: number
  isSale: boolean
  saleRate: number
  isSoldOut: boolean
  isExclusive: boolean
}

export async function getDataGood(): Promise<Good[] | undefined> {
  let result: Good[] = []

  try {
    const responses = await Promise.all([
      PublicApi.get(`data/goods0.json`),
      PublicApi.get(`data/goods1.json`),
      PublicApi.get(`data/goods2.json`),
      PublicApi.get(`data/goods3.json`),
    ])

    responses.forEach(({ data, status }) => {
      if (status !== 200) {
        return
      }
      result.push(data.data.list)
    })
  } catch (e) {
    console.log(e)
    // result = testDate
  }
  return result
}

const testDate: Goods = {
  data: {
    list: [
      {
        goodsNo: 1759350,
        goodsName: '[SET] 베이직 라인 셋업',
        price: 59000,
        brandName: '에프씨엠엠',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1759350',
        brandLinkUrl: 'https://www.musinsa.com/brands/fcmm',
        normalPrice: 74000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1163605,
        goodsName: '클럽 맨투맨 블랙',
        price: 59000,
        brandName: '나이키',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20190923/1163605/1163605_2_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1163605',
        brandLinkUrl: 'https://www.musinsa.com/brands/nike',
        normalPrice: 89000,
        isSale: true,
        saleRate: 34,
        isSoldOut: true,
        isExclusive: false,
      },
      {
        goodsNo: 1628383,
        goodsName: '2 TONE ARCH CREWNECK GRAY',
        price: 34500,
        brandName: '예일',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20200928/1628383/1628383_2_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1628383',
        brandLinkUrl: 'https://www.musinsa.com/brands/yale',
        normalPrice: 69000,
        isSale: true,
        saleRate: 50,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 2085371,
        goodsName:
          '[패키지] 헤이즈 오버핏 스웨트셔츠 [쭈리/기모] 2PACK KJMT2369 / KJMT2400',
        price: 47900,
        brandName: '제멋',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20210825/2085371/2085371_1_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/2085371',
        brandLinkUrl: 'https://www.musinsa.com/brands/jemut',
        normalPrice: 57800,
        isSale: true,
        saleRate: 17,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1582356,
        goodsName: '980g pigment mtm-charcoal-',
        price: 46400,
        brandName: '소버먼트',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20200903/1582356/1582356_1_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1582356',
        brandLinkUrl: 'https://www.musinsa.com/brands/sovermentwithlomort',
        normalPrice: 74000,
        isSale: true,
        saleRate: 37,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1757501,
        goodsName: '[3-PACK]피싱 아트 워크 피그먼트 스웨트셔츠',
        price: 58500,
        brandName: '트래블',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20210121/1757501/1757501_1_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1757501',
        brandLinkUrl: 'https://www.musinsa.com/brands/travel',
        normalPrice: 150000,
        isSale: true,
        saleRate: 61,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1742347,
        goodsName: '엔젤 와펜 맨투맨 블랙',
        price: 41300,
        brandName: '마크 곤잘레스',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20210111/1742347/1742347_2_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1742347',
        brandLinkUrl: 'https://www.musinsa.com/brands/markgonzales',
        normalPrice: 59000,
        isSale: true,
        saleRate: 30,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1679943,
        goodsName: 'RETRIEVER CREWNECK KA [NAVY]',
        price: 44850,
        brandName: '비바스튜디오',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20201105/1679943/1679943_3_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1679943',
        brandLinkUrl: 'https://www.musinsa.com/brands/vivastudio',
        normalPrice: 69000,
        isSale: true,
        saleRate: 35,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1549281,
        goodsName: 'SWEATSHIRT FLOWERMARDI_OATMEAL BLACK',
        price: 75000,
        brandName: '마르디 메크르디',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20200814/1549281/1549281_1_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1549281',
        brandLinkUrl: 'https://www.musinsa.com/brands/mardimercredi',
        normalPrice: 75000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1595530,
        goodsName: '(BY P.E.DEPT) UNIVERSITY HANDSOME DAN CREWNECK GRAY',
        price: 57600,
        brandName: '예일',
        imageUrl:
          'https://image.msscdn.net/images/goods_img/20200910/1595530/1595530_3_500.jpg',
        linkUrl: 'https://store.musinsa.com/app/goods/1595530',
        brandLinkUrl: 'https://www.musinsa.com/brands/yale',
        normalPrice: 72000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
    ],
  },
}