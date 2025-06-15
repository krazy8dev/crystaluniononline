"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { config } from "@/config";
import { axiosInstance } from "@/utils/axiosInstance";
import { Pencil, Trash2, Search } from "lucide-react";

interface User {
  id: string;
  fullName: string;
  email: string;
  accountNumber: string;
  balance: number;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [topUpAmount, setTopUpAmount] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        config.api.endpoints.admin.users,
      );
      // Ensure we're setting an array
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error("Failed to load users");
      console.error("Error fetching users:", error);
      setUsers([]); // Set empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Get user by ID
//   const fetchUserById = async (id: string) => {
//     try {
//       const response = await axiosInstance.get(
//         config.api.endpoints.admin.getUserById(id),
//       );
//       setSelectedUser(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch user details");
//       console.error("Error fetching user:", error);
//     }
//   };

  // Update user
  const handleUpdateUser = async (id: string, data: Partial<User>) => {
    try {
      await axiosInstance.patch(
        config.api.endpoints.admin.updateUser(id),
        data,
      );
      toast.success("User updated successfully");
      fetchUsers(); // Refresh the list
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update user");
      console.error("Error updating user:", error);
    }
  };

  // Delete user
  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await axiosInstance.delete(config.api.endpoints.admin.deleteUser(id));
      toast.success("User deleted successfully");
      fetchUsers(); // Refresh the list
    } catch (error) {
      toast.error("Failed to delete user");
      console.error("Error deleting user:", error);
    }
  };

  // Top up user balance
  const handleTopUp = async (id: string, amount: number) => {
    try {
      await axiosInstance.post(config.api.endpoints.admin.topUpUser(id), {
        amount,
      });
      toast.success("Balance topped up successfully");
      fetchUsers(); // Refresh the list
      setTopUpAmount("");
    } catch (error) {
      toast.error("Failed to top up balance");
      console.error("Error topping up balance:", error);
    }
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.accountNumber?.includes(searchQuery),
  );

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Account Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    </div>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4 text-4xl">👥</div>
                      <h3 className="text-lg font-medium text-gray-900">
                        No Users Found
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        There are currently no users in the system.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.fullName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {user.accountNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        ${user.balance?.toFixed(2) || "0.00"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {user.role || "user"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setIsEditing(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="Amount"
                            value={topUpAmount}
                            onChange={(e) => setTopUpAmount(e.target.value)}
                            className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm"
                          />
                          <button
                            onClick={() => {
                              if (topUpAmount) {
                                handleTopUp(user.id, parseFloat(topUpAmount));
                              }
                            }}
                            className="ml-2 rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
                          >
                            Top Up
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit User Modal */}
      {isEditing && selectedUser && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-bold">Edit User</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleUpdateUser(selectedUser.id, {
                  fullName: formData.get("fullName") as string,
                  role: formData.get("role") as string,
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={selectedUser.fullName}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  name="role"
                  defaultValue={selectedUser.role}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
