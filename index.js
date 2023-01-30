import express from "express";
import { CashService } from "./cash";
import { ProductService } from "./product";
const app = express();

//상품 구매하기
app.post("/product/buy", (req, res) => {
  //1. 가진 돈 검증
  const cashService = new CashService();
  const hasMoney = cashService.checkValue(); //return true or false
  //2. 판매 여부 검증
  const productService = new ProductService();
  const isSoldOut = productService.checkSoldout();
  //3. 상품 구매 코드
  if (hasMoney && !isSoldOut) {
    res.send("상품 구매 완료");
  }
});
//상품 판매하기
app.post("/product/refund", (req, res) => {
  //1. 판매 여부 검증
  const productService = new ProductService();
  const isSoldOut = productService.checkSoldout();
  //2. 상품 환불 코드
  if (isSoldOut) {
    res.send("상품 환불 완료");
  }
});

app.listen(3001);
