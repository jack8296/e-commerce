import type { JSX } from "react";
import { useCallback, useMemo, useState, use } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import Select from "../../components/select/select";
import Table from "../../components/common/table";
import DeleteModal from "../../components/modal/delete/deleteModal";
import CustomButton from "../../components/button/custm.button";
//react-query
import { useQuery } from "@tanstack/react-query";
//services
import {
  GetAllUsers,
  DeleteSingleUser,
} from "../../services/user/user.service";
//icons
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";

//react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

//types
import type { EditUserValues } from "../../types/types";

const Users = (): JSX.Element => {
  const [userValue, setUserValue] = useState({
    search: "",
    filter: "",
  });
  const [editUserValue, setEditUserValue] = useState<EditUserValues>({
    username: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState<number>(0);
  const [userEditOpen, setUserEditOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
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

  const handleOpenDeleteModal = useCallback(
    (id: number) => {
      setIsDeleteModalOpen(true);
      setUserId(id);
    },
    [isDeleteModalOpen],
  );

  const handleEditValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditUserValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: (id: number) => DeleteSingleUser(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });

  const handleDeleteUser = useCallback(() => {
    deleteUser(userId);
    setIsDeleteModalOpen(false);
  }, [deleteUser]);

  const handleOpenEdit = useCallback((id: number) => {
    setUserEditOpen(true);
    setUserId(id);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;
  return (
    <>
      <DeleteModal
        title="Are you sure want to delete this user?"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      >
        <div className="delete-action">
          <CustomButton
            variant="danger"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="title">Cancel</span>
            <span className="icon">
              <MdOutlineCancel />
            </span>
          </CustomButton>
          <CustomButton
            variant="secondary"
            onClick={handleDeleteUser}
            disabled={isPending}
          >
            <span className="title">Delete</span>
            <span className="icon">
              <MdDeleteForever />
            </span>
          </CustomButton>
        </div>
      </DeleteModal>
      <DeleteModal
        title="Are you sure to update this user?"
        isOpen={userEditOpen}
        setIsOpen={setUserEditOpen}
      >
        <h1 className="addUser-title">Add User</h1>
        <div className="addUser-form">
          <div className="addUser-form__input">
            <CustomInput
              label="Name"
              type="text"
              name="username"
              value={editUserValue.username}
              onChange={handleEditValue}
            />
          </div>
          <div className="addUser-form__input">
            <CustomInput
              label="Email"
              type="email"
              name="email"
              value={editUserValue.username}
              onChange={handleEditValue}
            />
          </div>
          <div className="addUser-form__input">
            <CustomInput
              label="Password"
              type="password"
              name="password"
              value={editUserValue.password}
              onChange={handleEditValue}
            />
          </div>
          <div className="addUser-form-action">
            <div className="addUser-form-action__cancel">
              <CustomButton variant="danger" type="button" onClick={() => {}}>
                <span className="title">Cancel</span>
                <span className="icon">
                  <ImCross />
                </span>
              </CustomButton>
            </div>
            <div className="addUser-form-action__submit">
              <CustomButton
                variant="secondary"
                type="submit"
                onClick={() => {}}
              >
                <span className="title">Add User</span>
                <span className="icon">
                  <FaSave />
                </span>
              </CustomButton>
            </div>
          </div>
        </div>
      </DeleteModal>
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
                    <span
                      className="action-btn__edit"
                      onClick={() => handleOpenEdit(user.id)}
                    >
                      <FaEdit />
                    </span>
                    <span
                      className="action-btn__delete"
                      onClick={() => handleOpenDeleteModal(user.id)}
                    >
                      <MdDeleteForever />
                    </span>
                  </td>
                </tr>
              ))}
            </Table>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
