import { PublicApi, SERVER_URL, sleep } from "../serviceSetting";

export interface Goods {
  data: {
    list: Good[];
  };
}

export interface Good {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
}

export async function getDataGood(): Promise<Good[] | undefined> {
  let result: Good[] = [];

  await sleep(1000);
  result.push(
    ...test1.data.list,
    ...test2.data.list,
    ...test3.data.list,
    ...test4.data.list
  );
  // test용으로 전환
  // try {
  //   const responses = await Promise.all([
  //     PublicApi.get(`data/goods0.json`),
  //     PublicApi.get(`data/goods1.json`),
  //     PublicApi.get(`data/goods2.json`),
  //     PublicApi.get(`data/goods3.json`),
  //   ]);

  //   responses.forEach(({ data, status }) => {
  //     if (status !== 200) {
  //       return;
  //     }
  //     result.push(data.data.list);
  //   });
  // } catch (e) {
  //   console.log(e);
  //   // result = testDate
  // }
  return result;
}

const test1: Goods = {
  data: {
    list: [
      {
        goodsNo: 1759350,
        goodsName: "[SET] 베이직 라인 셋업",
        price: 59000,
        brandName: "에프씨엠엠",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1759350",
        brandLinkUrl: "https://www.musinsa.com/brands/fcmm",
        normalPrice: 74000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1163605,
        goodsName: "클럽 맨투맨 블랙",
        price: 59000,
        brandName: "나이키",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20190923/1163605/1163605_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1163605",
        brandLinkUrl: "https://www.musinsa.com/brands/nike",
        normalPrice: 89000,
        isSale: true,
        saleRate: 34,
        isSoldOut: true,
        isExclusive: false,
      },
      {
        goodsNo: 1628383,
        goodsName: "2 TONE ARCH CREWNECK GRAY",
        price: 34500,
        brandName: "예일",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200928/1628383/1628383_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1628383",
        brandLinkUrl: "https://www.musinsa.com/brands/yale",
        normalPrice: 69000,
        isSale: true,
        saleRate: 50,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 2085371,
        goodsName:
          "[패키지] 헤이즈 오버핏 스웨트셔츠 [쭈리/기모] 2PACK KJMT2369 / KJMT2400",
        price: 47900,
        brandName: "제멋",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210825/2085371/2085371_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2085371",
        brandLinkUrl: "https://www.musinsa.com/brands/jemut",
        normalPrice: 57800,
        isSale: true,
        saleRate: 17,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1582356,
        goodsName: "980g pigment mtm-charcoal-",
        price: 46400,
        brandName: "소버먼트",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200903/1582356/1582356_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1582356",
        brandLinkUrl: "https://www.musinsa.com/brands/sovermentwithlomort",
        normalPrice: 74000,
        isSale: true,
        saleRate: 37,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1757501,
        goodsName: "[3-PACK]피싱 아트 워크 피그먼트 스웨트셔츠",
        price: 58500,
        brandName: "트래블",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210121/1757501/1757501_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1757501",
        brandLinkUrl: "https://www.musinsa.com/brands/travel",
        normalPrice: 150000,
        isSale: true,
        saleRate: 61,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1742347,
        goodsName: "엔젤 와펜 맨투맨 블랙",
        price: 41300,
        brandName: "마크 곤잘레스",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210111/1742347/1742347_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1742347",
        brandLinkUrl: "https://www.musinsa.com/brands/markgonzales",
        normalPrice: 59000,
        isSale: true,
        saleRate: 30,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1679943,
        goodsName: "RETRIEVER CREWNECK KA [NAVY]",
        price: 44850,
        brandName: "비바스튜디오",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20201105/1679943/1679943_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1679943",
        brandLinkUrl: "https://www.musinsa.com/brands/vivastudio",
        normalPrice: 69000,
        isSale: true,
        saleRate: 35,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1549281,
        goodsName: "SWEATSHIRT FLOWERMARDI_OATMEAL BLACK",
        price: 75000,
        brandName: "마르디 메크르디",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200814/1549281/1549281_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1549281",
        brandLinkUrl: "https://www.musinsa.com/brands/mardimercredi",
        normalPrice: 75000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1595530,
        goodsName: "(BY P.E.DEPT) UNIVERSITY HANDSOME DAN CREWNECK GRAY",
        price: 57600,
        brandName: "예일",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200910/1595530/1595530_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1595530",
        brandLinkUrl: "https://www.musinsa.com/brands/yale",
        normalPrice: 72000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
    ],
  },
};

const test2: Goods = {
  data: {
    list: [
      {
        goodsNo: 1557508,
        goodsName: "베츠 어센틱 맨투맨 그레이",
        price: 47200,
        brandName: "이벳필드",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200820/1557508/1557508_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1557508",
        brandLinkUrl: "https://www.musinsa.com/brands/ebbetsfield",
        normalPrice: 59000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1747034,
        goodsName: "로고 스웨트 셔츠 - 블랙 / H37067",
        price: 24900,
        brandName: "아디다스",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210113/1747034/1747034_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1747034",
        brandLinkUrl: "https://www.musinsa.com/brands/adidas",
        normalPrice: 79000,
        isSale: true,
        saleRate: 68,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1755605,
        goodsName: "Half  Zip-Up M-Logo Sweat  (JM5TSU838BK)",
        price: 69000,
        brandName: "지프",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210120/1755605/1755605_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1755605",
        brandLinkUrl: "https://www.musinsa.com/brands/jeep",
        normalPrice: 69000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1817394,
        goodsName: "[3-PACK]베이직 트래블러 피그먼트 스웨트셔츠",
        price: 57900,
        brandName: "트래블",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210226/1817394/1817394_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1817394",
        brandLinkUrl: "https://www.musinsa.com/brands/travel",
        normalPrice: 150000,
        isSale: true,
        saleRate: 61,
        isSoldOut: true,
        isExclusive: true,
      },
      {
        goodsNo: 1783595,
        goodsName: "Half  Zip-Up M-Logo Sweat  (JM5TSU838MW)",
        price: 58650,
        brandName: "지프",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210208/1783595/1783595_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1783595",
        brandLinkUrl: "https://www.musinsa.com/brands/jeep",
        normalPrice: 69000,
        isSale: true,
        saleRate: 15,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2190732,
        goodsName: "우먼즈 크롭 베어프렌즈 엠보자수 맨투맨 오트밀(FCB3TS355W)",
        price: 55300,
        brandName: "패블러스아카이브",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20211020/2190732/2190732_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2190732",
        brandLinkUrl: "https://www.musinsa.com/brands/fabulousarchive",
        normalPrice: 79000,
        isSale: true,
        saleRate: 30,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 2043085,
        goodsName: "[SET] 헤비웨이트 CGP 로손 트레이닝 셋업_멜란지그레이",
        price: 97900,
        brandName: "코드그라피",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210728/2043085/2043085_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2043085",
        brandLinkUrl: "https://www.musinsa.com/brands/codegraphy",
        normalPrice: 97900,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 947067,
        goodsName: "스웨트 셔츠 [블랙]",
        price: 17690,
        brandName: "무신사 스탠다드",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20190201/947067/947067_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/947067",
        brandLinkUrl: "https://www.musinsa.com/brands/musinsastandard",
        normalPrice: 20900,
        isSale: true,
        saleRate: 15,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2090646,
        goodsName:
          "N214USW901 스탠다드 벨룩스 세미 오버핏 맨투맨 티셔츠 CARBON BLACK",
        price: 69000,
        brandName: "내셔널지오그래픽",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210826/2090646/2090646_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2090646",
        brandLinkUrl: "https://www.musinsa.com/brands/nationalgeographic",
        normalPrice: 69000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1718760,
        goodsName: "[세트] 프레니 세트 4종(맨투맨MJMT7407 + 팬츠CJLP7442)",
        price: 59800,
        brandName: "더블유브이프로젝트",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20201210/1718760/1718760_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1718760",
        brandLinkUrl: "https://www.musinsa.com/brands/wvproject",
        normalPrice: 67800,
        isSale: true,
        saleRate: 12,
        isSoldOut: true,
        isExclusive: false,
      },
    ],
  },
};

const test3: Goods = {
  data: {
    list: [
      {
        goodsNo: 1778031,
        goodsName: "P.E.DEPT® YOGA BEGINNER CLASS NAVY",
        price: 36000,
        brandName: "피지컬 에듀케이션 디파트먼트",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210204/1778031/1778031_4_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1778031",
        brandLinkUrl: "https://www.musinsa.com/brands/physicaleducation",
        normalPrice: 72000,
        isSale: true,
        saleRate: 50,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1557508,
        goodsName: "베츠 어센틱 맨투맨 그레이",
        price: 47200,
        brandName: "이벳필드",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200820/1557508/1557508_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1557508",
        brandLinkUrl: "https://www.musinsa.com/brands/ebbetsfield",
        normalPrice: 59000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1747034,
        goodsName: "로고 스웨트 셔츠 - 블랙 / H37067",
        price: 24900,
        brandName: "아디다스",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210113/1747034/1747034_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1747034",
        brandLinkUrl: "https://www.musinsa.com/brands/adidas",
        normalPrice: 79000,
        isSale: true,
        saleRate: 68,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1776446,
        goodsName: "EMBROIDERY HANDSOME DAN CREWNECK GRAY",
        price: 48300,
        brandName: "예일",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210203/1776446/1776446_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1776446",
        brandLinkUrl: "https://www.musinsa.com/brands/yale",
        normalPrice: 69000,
        isSale: true,
        saleRate: 30,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1817394,
        goodsName: "[3-PACK]베이직 트래블러 피그먼트 스웨트셔츠",
        price: 57900,
        brandName: "트래블",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210226/1817394/1817394_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1817394",
        brandLinkUrl: "https://www.musinsa.com/brands/travel",
        normalPrice: 150000,
        isSale: true,
        saleRate: 61,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1783595,
        goodsName: "Half  Zip-Up M-Logo Sweat  (JM5TSU838MW)",
        price: 58650,
        brandName: "지프",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210208/1783595/1783595_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1783595",
        brandLinkUrl: "https://www.musinsa.com/brands/jeep",
        normalPrice: 69000,
        isSale: true,
        saleRate: 15,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2190732,
        goodsName: "우먼즈 크롭 베어프렌즈 엠보자수 맨투맨 오트밀(FCB3TS355W)",
        price: 55300,
        brandName: "패블러스아카이브",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20211020/2190732/2190732_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2190732",
        brandLinkUrl: "https://www.musinsa.com/brands/fabulousarchive",
        normalPrice: 79000,
        isSale: true,
        saleRate: 30,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 2043085,
        goodsName: "[SET] 헤비웨이트 CGP 로손 트레이닝 셋업_멜란지그레이",
        price: 97900,
        brandName: "코드그라피",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210728/2043085/2043085_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2043085",
        brandLinkUrl: "https://www.musinsa.com/brands/codegraphy",
        normalPrice: 97900,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 947067,
        goodsName: "스웨트 셔츠 [블랙]",
        price: 17690,
        brandName: "무신사 스탠다드",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20190201/947067/947067_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/947067",
        brandLinkUrl: "https://www.musinsa.com/brands/musinsastandard",
        normalPrice: 20900,
        isSale: true,
        saleRate: 15,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2090646,
        goodsName:
          "N214USW901 스탠다드 벨룩스 세미 오버핏 맨투맨 티셔츠 CARBON BLACK",
        price: 69000,
        brandName: "내셔널지오그래픽",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210826/2090646/2090646_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2090646",
        brandLinkUrl: "https://www.musinsa.com/brands/nationalgeographic",
        normalPrice: 69000,
        isSale: false,
        saleRate: 0,
        isSoldOut: true,
        isExclusive: false,
      },
    ],
  },
};

const test4: Goods = {
  data: {
    list: [
      {
        goodsNo: 2209409,
        goodsName:
          "N214USW950 폴리카터 스몰 로고 풀기모 맨투맨 티셔츠 CARBON BLACK",
        price: 79000,
        brandName: "내셔널지오그래픽",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20211101/2209409/2209409_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2209409",
        brandLinkUrl: "https://www.musinsa.com/brands/nationalgeographic",
        normalPrice: 79000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: false,
      },
      {
        goodsNo: 1563621,
        goodsName: "C 로고 맨투맨 블랙",
        price: 47200,
        brandName: "커버낫",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200826/1563621/1563621_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1563621",
        brandLinkUrl: "https://www.musinsa.com/brands/covernat",
        normalPrice: 59000,
        isSale: false,
        saleRate: 0,
        isSoldOut: true,
        isExclusive: false,
      },
      {
        goodsNo: 956939,
        goodsName: "1960 sweatshirts navy",
        price: 47000,
        brandName: "유니폼브릿지",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20190218/956939/956939_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/956939",
        brandLinkUrl: "https://www.musinsa.com/brands/uniformbridge",
        normalPrice: 59000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1557509,
        goodsName: "베츠 어센틱 맨투맨 블랙",
        price: 47200,
        brandName: "이벳필드",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200820/1557509/1557509_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1557509",
        brandLinkUrl: "https://www.musinsa.com/brands/ebbetsfield",
        normalPrice: 59000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2188843,
        goodsName: "[기모] 오버핏 트레이닝 셋업",
        price: 49900,
        brandName: "브렌슨",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20211020/2188843/2188843_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2188843",
        brandLinkUrl: "https://www.musinsa.com/brands/brenson",
        normalPrice: 69900,
        isSale: true,
        saleRate: 29,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2198120,
        goodsName: "[기모]Half  Zip-Up M-Logo Sweat  (JM5TSU738DA)",
        price: 58650,
        brandName: "지프",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20211026/2198120/2198120_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2198120",
        brandLinkUrl: "https://www.musinsa.com/brands/jeep",
        normalPrice: 69000,
        isSale: true,
        saleRate: 15,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1747035,
        goodsName: "로고 스웨트 셔츠 - 라이트 그레이 / H37068",
        price: 24900,
        brandName: "아디다스",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210113/1747035/1747035_3_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1747035",
        brandLinkUrl: "https://www.musinsa.com/brands/adidas",
        normalPrice: 79000,
        isSale: true,
        saleRate: 68,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 2134123,
        goodsName: "T-Logo Crewneck Heather Grey",
        price: 64800,
        brandName: "디스이즈네버댓",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20210915/2134123/2134123_1_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/2134123",
        brandLinkUrl: "https://www.musinsa.com/brands/thisisneverthat",
        normalPrice: 72000,
        isSale: false,
        saleRate: 0,
        isSoldOut: false,
        isExclusive: true,
      },
      {
        goodsNo: 1163604,
        goodsName: "클럽 맨투맨 그레이",
        price: 59000,
        brandName: "나이키",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20190923/1163604/1163604_2_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1163604",
        brandLinkUrl: "https://www.musinsa.com/brands/nike",
        normalPrice: 89000,
        isSale: true,
        saleRate: 34,
        isSoldOut: true,
        isExclusive: true,
      },
      {
        goodsNo: 1563623,
        goodsName: "C 로고 맨투맨 네이비",
        price: 47200,
        brandName: "커버낫",
        imageUrl:
          "https://image.msscdn.net/images/goods_img/20200826/1563623/1563623_4_500.jpg",
        linkUrl: "https://store.musinsa.com/app/goods/1563623",
        brandLinkUrl: "https://www.musinsa.com/brands/covernat",
        normalPrice: 59000,
        isSale: true,
        saleRate: 20,
        isSoldOut: false,
        isExclusive: false,
      },
    ],
  },
};
