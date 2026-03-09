import { useCallback, useMemo, useState, type JSX } from "react";
//react-query
import { useQuery } from "@tanstack/react-query";
//components
import CustomInput from "../../components/input/custom.Input";
import Select from "../../components/select/select";
import Table from "../../components/table/table";
//types
import { type ProductsValues } from "../../types/types";
import { type RootState } from "../../app/store/store";

//services
import { allProducts } from "../../services/products/products";
//redux
import { useSelector, useDispatch } from "react-redux";
//features
import { setFilterData } from "../../features/products/product.slice";

const Products = (): JSX.Element => {
  const priceData: string[] = ["Low", "High"];
  const filterData: string[] = ["Accending", "Decending"];
  const dispatch = useDispatch();
  const filterDataFromRedux = useSelector((state: RootState) => state.product);
  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch(setFilterData({ name, value }));
    },
    [dispatch],
  );
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: allProducts,
  });

  const productCategories = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    return [
      ...new Set(products.map((product: ProductsValues) => product.category)),
    ];
  }, [products]);

  const filterDatas = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    let filteredProducts = [...products];
    if (filterDataFromRedux.title) {
      filteredProducts = filteredProducts.filter((product: ProductsValues) =>
        product.title
          .toLocaleLowerCase()
          .includes(filterDataFromRedux.title.toLocaleLowerCase()),
      );
    }
    if (filterDataFromRedux.category) {
      filteredProducts = filteredProducts.filter((product: ProductsValues) =>
        product.category
          .toLocaleLowerCase()
          .includes(filterDataFromRedux.category.toLocaleLowerCase()),
      );
    }
    if (filterDataFromRedux.filterBy) {
      if (filterDataFromRedux.filterBy === "Accending") {
        filteredProducts.sort(
          (a: ProductsValues, b: ProductsValues) =>
            Number(a.price) - Number(b.price),
        );
      }
      if (filterDataFromRedux.filterBy === "Decending") {
        filteredProducts.sort(
          (a: ProductsValues, b: ProductsValues) =>
            Number(b.price) - Number(a.price),
        );
      }
    }
    if (filterDataFromRedux.price) {
      if (filterDataFromRedux.price === "Low") {
        filteredProducts = filteredProducts.filter(
          (product: ProductsValues) => Number(product.price) < 100,
        );
      }
      if (filterDataFromRedux.price === "High") {
        filteredProducts = filteredProducts.filter(
          (product: ProductsValues) => Number(product.price) >= 100,
        );
      }
    }
    return filteredProducts;
  }, [products, filterDataFromRedux]);
  return (
    <div className="products-container">
      <h2>Products Details</h2>
      <div className="product-filter">
        <div className="search">
          <CustomInput
            label="Title"
            type="text"
            name="title"
            value={filterDataFromRedux?.title}
            onChange={handleChangeValue}
          />
        </div>
        <div className="filter-by-category">
          <Select
            onChange={handleChangeValue}
            data={productCategories}
            name="category"
            placeHolder="Select a Category"
          />
        </div>
        <div className="filter-by-acen">
          <Select
            onChange={handleChangeValue}
            data={filterData}
            name="filterBy"
            placeHolder="Filter by "
          />
        </div>
        <div className="filter-by-price">
          <Select
            onChange={handleChangeValue}
            data={priceData}
            name="price"
            placeHolder="Filter by Price "
          />
        </div>
      </div>
      <div className="product-details">
        <h3>Products table</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching products</p>
        ) : filterDatas.length > 0 ? (
          <Table data={filterDatas ?? []} />
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
