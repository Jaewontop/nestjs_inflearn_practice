import { CashService } from "./services/cash.service";
import { ProductService } from "./services/product.service";

export class ProductController {
  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = () => {
    //1. 가진 돈 검증
    // const cashService = new CashService();//강하게 의존하고 있음
    const hasMoney = this.cashService.checkValue();
    //2. 판매 여부 검증
    // const productService = new ProductService();
    const isSoldOut = this.productService.checkSoldout();
    //3. 상품 구매 코드
    if (hasMoney && !isSoldOut) {
      res.send("상품 구매 완료");
    }
  };
  refundProduct = () => {
    //1. 판매 여부 검증
    // const productService = new ProductService();
    const isSoldOut = this.productService.checkSoldout();
    //2. 상품 환불 코드
    if (isSoldOut) {
      res.send("상품 환불 완료");
    }
  };
}
