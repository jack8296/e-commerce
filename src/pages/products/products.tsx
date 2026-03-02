import { useCallback, useState, type JSX } from "react";
//react-query
import { useQuery } from "@tanstack/react-query";
//components
import CustomInput from "../../components/input/custom.Input";
import Select from "../../components/select/select";
import Table from "../../components/table/table";
//types
import { type FilterData, type TableProps } from "../../types/types";
//services
import { allProducts } from "../../services/products/products";

const Products = (): JSX.Element => {
  const [filterDatas, setFilterDatas] = useState<FilterData>({
    title: "",
    category: "",
    filterBy: "",
    price: "",
  });
  const data: string[] = ["men", "women"];
  const priceData: string[] = ["Low", "High"];
  const filterData: string[] = ["Accending", "Decending"];

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFilterDatas((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: allProducts,
  });
  return (
    <div className="products-container">
      <h2>Products Details</h2>
      <div className="product-filter">
        <div className="search">
          <CustomInput
            label="Title"
            type="text"
            name="title"
            value={filterDatas?.title}
            onChange={handleChangeValue}
          />
        </div>
        <div className="filter-by-category">
          <Select
            onChange={handleChangeValue}
            data={data}
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
        ) : (
          <Table data={(products as object[]) || []} />
        )}
      </div>
    </div>
  );
};

export default Products;
