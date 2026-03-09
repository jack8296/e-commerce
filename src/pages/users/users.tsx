import type { JSX } from "react";
import { useMemo, useState } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import Select from "../../components/select/select";
//react-query
import { useQuery } from "@tanstack/react-query";
//services
import { GetAllUsers } from "../../services/user/user.service";

const Users = (): JSX.Element => {
  const [userValue, setUserValue] = useState({
    search: "",
    filter: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUserValue((prev) => ({ ...prev, [name]: value }));
  };

  const {
    data: users,
    isLoading,
    error,
  } = useQuery<any[]>({
    queryKey: ["users"],
    queryFn: () => GetAllUsers(),
  });
  const filterAddress = useMemo(() => {
    if (!users || !Array.isArray(users)) return [];
    return [...new Set(users.map((user) => user.address.city))];
  }, [users]);

  const filteredUsers = useMemo(() => {
    if (!users || !Array.isArray(users)) return [];
    let filtered = [...users];
    if (userValue.search) {
      filtered = filtered.filter((user) => {
        return user.name.firstname
          .toLowerCase()
          .includes(userValue.search.toLowerCase());
      });
    }
    if (userValue.filter) {
      filtered = filtered.filter((user) => {
        return user.address.city
          .toLowerCase()
          .includes(userValue.filter.toLowerCase());
      });
    }
    return filtered;
  }, [userValue, users]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;
  return (
    <div className="user-container">
      <h1>Users Details</h1>
      <div className="user-filter">
        <CustomInput
          label="Search Users"
          type="text"
          name="search"
          value={userValue.search}
          onChange={handleInputChange}
        />
        <Select
          name="filter"
          data={filterAddress}
          placeHolder="Filter by Address"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Users;
