import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productInfos } from "../components/ProductList";

export default function ProductDetailPage() {
  const navigate = useNavigate();
  //   const parameter = useParams();
  //   console.log("parameter", parameter);
  //  parameter
  //   {id: '1'}
  //   id
  //   :
  //   "1" ->이렇게 찍힘, 따라서 parameter가 객체형태로 찍히고, 숫자인 id를 넘겼지만 숫자가 아니라 string으로 받아 오는 것을 알수 있다.

  //1을 꺼내오기
  const { id } = useParams();
  console.log(id);
  console.log(productInfos[id]);
  //find써서 number
  const productInfo = productInfos.find((product) => product.id === Number(id));
  console.log(productInfo);
  return (
    <div>
      <h1>product Detail Page</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <ul>
        {/* <li>상품번호:{productInfos[id - 1].id}</li>
        <li>상품명:{productInfos[id - 1].name}</li>
        <li>판매자:{productInfos[id - 1].email}</li>
        <li>상세설명:{productInfos[id - 1].body}</li> */}
        <li>상품번호:{productInfo.id}</li>
        <li>상품명:{productInfo.name}</li>
        <li>판매자:{productInfo.email}</li>
        <li>상세설명:{productInfo.body}</li>
      </ul>
    </div>
  );
}
