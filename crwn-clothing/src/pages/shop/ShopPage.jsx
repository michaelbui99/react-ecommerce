import React, { useState, useEffect } from "react";
import CollectionPreview from "../../components/preview-collection/CollectionPreview.jsx";
import "./shop-page.styles.scss";
import SHOP_DATA from "./ShopData.js";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
