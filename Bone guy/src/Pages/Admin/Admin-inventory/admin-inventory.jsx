import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../../../Components/Admin-content-card/Admin-product-card.jsx";

const AdminProductsInventory = () => {
  const [admin_products, setAdminProducts] = useState([]);
  const [sub_categories, setAdminSubCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [critical_products, setCriticalProducts] = useState([]);
  const [extremely_critical_products, setExtremelyCriticalProducts] = useState([]);
  const [out_of_stock, setOutOfStock] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchAdminProducts = useCallback(async () => {
    try {
      console.log("fetching products in admin inventory");
      const admin_products_response = await axios.get("http://localhost:4000/api/product/");
      if(admin_products_response.data.length === 0) {
        console.error("admin products array is empty");
      } else {
        setAdminProducts(admin_products_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finished fetching products in admin inventory");
      setLoading(false);
    }
  }, []);

  const fetchAdminSubCategories = useCallback(async () => {
    try {
      const admin_sub_categories_response = await axios.get("http://localhost:4000/api/subcategory/");
      // console.log("this is subcategories in admin product: ", admin_sub_categories_response);
      if(admin_sub_categories_response.data.length === 0) {
        console.error("admin subcategories array is empty");
      } else {
        setAdminSubCategories(admin_sub_categories_response.data.subCategories); //it is sent like this from the backend .subCategories
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAdminTags = useCallback(async () => {
    try {
      const admin_tags_response = await axios.get("http://localhost:4000/api/tag/");
      // console.log("this is tags in admin product: ", admin_tags_response);
      if(admin_tags_response.data.length === 0) {
        console.error("admin tags array is empty");
      } else {
        setTags(admin_tags_response.data.tags); //it is sent like this from the backend .tags
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdminProducts();
    fetchAdminSubCategories();
    fetchAdminTags();
    setOutOfStock([]);
    setExtremelyCriticalProducts([]);
    setCriticalProducts([]);
  }, []);

  useEffect(() => {
    for (let i = 0 ; i < admin_products.length ; i++) {
      if (admin_products[i].quantity === 0) {
        setOutOfStock((prev) =>
          [...prev, admin_products[i]]
        );
        console.log("added to o o s", out_of_stock);
        continue
      }
      else if (admin_products[i].quantity < 12) {
        setExtremelyCriticalProducts((prev) =>
          [...prev, admin_products[i]]
        );
        console.log("added to e c0", extremely_critical_products);
        continue
      }
      else if (admin_products[i].quantity < 24) {
        setCriticalProducts((prev) =>
        [...prev, admin_products[i]]
        );
        console.log("added to critical: ", critical_products);
        continue
      }
    }
  }, [admin_products]);

  return(
    <section className="admin-product-inventory">
      {
        !loading ? (<div>
            {out_of_stock.length > 0 && (<section className="admin-product-out-of-stock">Out of Stock:
              {out_of_stock.map((product, index) => {
                return <ProductCard key={index} sub_categories={[]} tags={[]} product={product} setProductEditStatus={null} product_edit_status={false} handleProductDelete={null} fetchAdminProducts={fetchAdminProducts}/>
              })}
            </section>)}
            <br/>
            {extremely_critical_products.length > 0 && (<section className="admin-product-extremely-critical">Less Than 12 Items Left:
              {extremely_critical_products.map((product, index) => {
                return <ProductCard key={index} sub_categories={[]} tags={[]} product={product} setProductEditStatus={null} product_edit_status={false} handleProductDelete={null} fetchAdminProducts={fetchAdminProducts}/>
              })}
            </section>)}
            <br/>
            {critical_products.length > 0 && (<section className="admin-product-critical">Less Than 24 Items Left:
              {critical_products.map((product, index) => {
                return <ProductCard key={index} sub_categories={[]} tags={[]} product={product} setProductEditStatus={null} product_edit_status={false} handleProductDelete={null} fetchAdminProducts={fetchAdminProducts} show_buttons={false}/>
              })}
            </section>)}
        </div>
        ) : (<p className="loading">Loading Products</p>)
      }
    </section>
  )};

export default AdminProductsInventory;