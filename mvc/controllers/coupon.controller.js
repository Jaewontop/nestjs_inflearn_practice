export class CouponController {
  constructor(cashService) {
    this.cashService = cashService;
  }
  buyCoupon = () => {
    //1. 가진 돈 검증
    // const cashService = new CashService();
    const hasMoney = this.cashService.checkValue(); //return true or false

    //2. 쿠폰 구매 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료");
    }
  };
}
