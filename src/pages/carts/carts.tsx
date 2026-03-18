import { useMemo, type JSX } from "react";
//components
import Table from "../../components/common/table";
//services
import { getAllCarts } from "../../services/carts/cart.service";
//react-query
import { useQuery } from "@tanstack/react-query";
//types
import { type FlatCart } from "../../types/types";

const Carts = (): JSX.Element => {
  const headers = ["id", "productId", "quantity", "userId"];
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carts"],
    queryFn: getAllCarts,
  });

  const filterData = useMemo<FlatCart[]>(() => {
    if (!data) return [];

    return data.reduce<FlatCart[]>((acc, item) => {
      const mapped: FlatCart[] = item.products.map((p) => ({
        productId: p.productId,
        quantity: p.quantity,
        userId: item.userId,
        id: item.id,
      }));
      acc.push(...mapped);
      return acc;
    }, []);
  }, [data]);

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div className="carts-container">
      <h2>Carts Details</h2>
      {filterData.length < 0 ? (
        <p>Carts not found</p>
      ) : (
        <Table headers={headers}>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            filterData.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.productId}</td>
                <td>{data.quantity}</td>
                <td>{data.userId}</td>
              </tr>
            ))
          )}
        </Table>
      )}
    </div>
  );
};

export default Carts;
