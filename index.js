import express from "express";
import { CashService } from "./mvc/controllers/services/cash.service";
import { ProductService } from "./mvc/controllers/services/product.service";
import { ProductController } from "./mvc/controllers/product.controller";
import { CouponController } from "./mvc/controllers/coupon.controller";
const app = express();

const productController = new ProductController();
const couponController = new CouponController();

//상품 구매하기
app.post("/product/buy", productController.buyProduct); //얘는 function이 아니라 메셔드(객체 안에 포함되어 있어서)
//상품 판매하기
app.post("/product/refund", productController.refundProduct);

app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3001);
