import React from "react";
import { Helmet } from "react-helmet";

const Meta = () => {
  return (
    <>
      <Helmet>
        <title>KDEVMOBILE | Home</title>
        <meta
          name="description"
          content="Chúng tôi bán những sản phẩm tốt với giá rẻ"
        />
        <meta
          name="keyword"
          content="Điện thoại, Mua điện thoại, Điện thoại giá rẻ"
        />
      </Helmet>
    </>
  );
};

export default Meta;
