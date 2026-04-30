/**
 * 그로퍼 세컨핸즈 — 물품 데이터
 *
 * 사진 추가 방법:
 *   1. images/ 폴더에 사진 파일을 넣으세요 (예: images/01-가죽스툴.jpg)
 *   2. 해당 항목의 image 값을 파일 경로로 변경하세요
 *      예: image: null  →  image: "images/01-가죽스툴.jpg"
 *
 * status 값:
 *   "available" = 판매중
 *   "sold"      = 판매완료
 */

const items = [
  { id: 1,  name: "가죽 스툴",          qty: 2, price: 150000,  note: null,                   status: "sold",      image: "images/01-Leather-Stool.jpg" },
  { id: 2,  name: "가죽 의자",          qty: 5, price: 250000,  note: null,                   status: "available", image: "images/02-Leather-Chair.jpg" },
  { id: 6,  name: "가죽 의자",          qty: 1, price: 250000,  note: null,                   status: "sold",      image: "images/02-Leather-Chair.jpg" },
  { id: 3,  name: "세발 의자",          qty: 1, price: 450000,  note: null,                   status: "available", image: "images/03-three-leg-chair.JPG" },
  { id: 7,  name: "세발 의자",          qty: 1, price: 450000,  note: null,                   status: "sold",      image: "images/03-three-leg-chair.JPG" },
  { id: 4,  name: "엘피장",             qty: 1, price: 1300000, note: null,                   status: "sold",      image: "images/04-Lp.jpg" },
  { id: 5,  name: "티비다이 하부장",    qty: 1, price: 2500000, note: null,                   status: "sold",      image: "images/05.-tv.JPG" },
  { id: 9,  name: "작업대 테이블",      qty: 1, price: 1300000, note: "작업대 수납장과 세트", status: "sold",      image: "images/09-Table.JPG" },
  { id: 10, name: "작업대 수납장",      qty: 1, price: 1000000, note: "작업대 테이블과 세트", status: "sold",      image: "images/10-Table SEt.JPG" },
  { id: 11, name: "릴선",               qty: 1, price: 50000,   note: null,                   status: "sold",      image: "images/05-reel.JPG" },
  { id: 12, name: "벽선반 4단 세트",    qty: 1, price: 3000000, note: "설치비 포함",           status: "available", image: "images/12-Wall-Shelve-4.jpg" },
  { id: 13, name: "벽선반 2단 세트",    qty: 1, price: 1000000, note: "설치비 포함",           status: "available", image: "images/13-Wall-Shelve-2.JPG" },
  { id: 14, name: "커피 테이블",        qty: 2, price: 1000000, note: null,                   status: "available", image: "images/14-Coffee-Table.jpg" },
  { id: 15, name: "쿠션 스툴",          qty: 1, price: 500000,  note: null,                   status: "available", image: "images/15-cushion.JPG" },
  { id: 32, name: "쿠션 스툴",          qty: 1, price: 500000,  note: null,                   status: "sold",      image: "images/15-cushion.JPG" },
  { id: 16, name: "위빙 스툴",          qty: 1, price: 250000,  note: null,                   status: "available", image: "images/16-Weaving-Stool.jpg" },
  { id: 17, name: "벽 거울",            qty: 1, price: 300000,  note: null,                   status: "sold",      image: "images/17-Mirror.jpg" },
  { id: 18, name: "달항아리 + 꽃",      qty: 1, price: 200000,  note: null,                   status: "sold",      image: "images/18-flower.JPG" },
  { id: 19, name: "카운터 책상",        qty: 1, price: 1200000, note: null,                   status: "available", image: null },
  { id: 21, name: "카운터 하부 수납장", qty: 1, price: 1500000, note: null,                   status: "sold",      image: "images/21-Counter-Book.jpg" },
  { id: 22, name: "카운터 상부책장",    qty: 1, price: 1000000, note: null,                   status: "sold",      image: "images/22-Counter-Book .jpg" },
  { id: 23, name: "카빙 수납장",        qty: 1, price: 1000000, note: null,                   status: "sold",      image: "images/23-carving-shelve.JPG" },
  { id: 25, name: "나비 액자",          qty: 4, price: 70000,   note: null,                   status: "available", image: "images/25-Butterfly.jpg" },
  { id: 26, name: "사각 단상",          qty: 4, price: 120000,  note: null,                   status: "available", image: null },
  { id: 27, name: "마름모 단상",        qty: 1, price: 120000,  note: null,                   status: "available", image: "images/27-.JPG" },
  { id: 31, name: "마름모 단상",        qty: 1, price: 120000,  note: null,                   status: "sold",      image: "images/27-.JPG" },
  { id: 28, name: "납작 받침대",        qty: 9, price: 80000,   note: null,                   status: "available", image: "images/28.JPG" },
  { id: 29, name: "기본 스툴",          qty: 1, price: 150000,  note: null,                   status: "available", image: null },
  { id: 30, name: "우드슬랩 테이블",    qty: 1, price: 5000000, note: null,                   status: "available", image: "images/30-slab-table.JPG" },
];
