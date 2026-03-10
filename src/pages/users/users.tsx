import type { JSX } from "react";
import { useMemo, useState } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import Select from "../../components/select/select";
import Table from "../../components/common/table";
//react-query
import { useQuery } from "@tanstack/react-query";
//services
import { GetAllUsers } from "../../services/user/user.service";
//icons
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Users = (): JSX.Element => {
  const [userValue, setUserValue] = useState({
    search: "",
    filter: "",
  });
  const headers = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Address",
    "Zipcode",
    "Password",
    "Actions",
  ];
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
      <div className="user-table">
        <h3>Users table</h3>
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          <Table headers={headers}>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.name.firstname} ${user.name.lastname}`}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{`${user.address.city}, ${user.address.street}`}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.password}</td>
                <td className="action-btn">
                  <span className="action-btn__edit">
                    <FaEdit />
                  </span>
                  <span className="action-btn__delete">
                    <MdDeleteForever />
                  </span>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
};

export default Users;
