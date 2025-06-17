"use client";

import useAdminStore from "@/store/adminStore";
import { Pencil, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  fullName: string;
  email: string;
  accountNumber: string;
  balance: number;
  role: string;
}

interface UserState {
  topUpAmount: string;
  isToppingUp: boolean;
  isUpdating: boolean;
}

const UsersPage = () => {
  const { users, loading, error, fetchUsers, updateUser, deleteUser, topUpUserBalance } = useAdminStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userStates, setUserStates] = useState<Record<string, UserState>>({});

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Initialize user states when users are loaded
  useEffect(() => {
    const newUserStates: Record<string, UserState> = {};
    users.forEach(user => {
      newUserStates[user.accountNumber] = {
        topUpAmount: "",
        isToppingUp: false,
        isUpdating: false
      };
    });
    setUserStates(newUserStates);
  }, [users]);

  // Update user
  const handleUpdateUser = async (id: string, data: Partial<User>) => {
    try {
      setUserStates(prev => ({
        ...prev,
        [id]: { ...prev[id], isUpdating: true }
      }));
      await updateUser(id, data);
      toast.success("User updated successfully");
      setIsEditing(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to update user");
    } finally {
      setUserStates(prev => ({
        ...prev,
        [id]: { ...prev[id], isUpdating: false }
      }));
    }
  };

  // Delete user
  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete user");
    }
  };

  // Top up user balance
  const handleTopUp = async (id: string, amount: number) => {
    try {
      setUserStates(prev => ({
        ...prev,
        [id]: { ...prev[id], isToppingUp: true }
      }));
      await topUpUserBalance(id, amount);
      toast.success("Balance topped up successfully");
      setUserStates(prev => ({
        ...prev,
        [id]: { ...prev[id], topUpAmount: "", isToppingUp: false }
      }));
    } catch (error: any) {
      toast.error(error.message || "Failed to top up balance");
      setUserStates(prev => ({
        ...prev,
        [id]: { ...prev[id], isToppingUp: false }
      }));
    }
  };

  // Update top up amount for a specific user
  const handleTopUpAmountChange = (id: string, amount: string) => {
    setUserStates(prev => ({
      ...prev,
      [id]: { ...prev[id], topUpAmount: amount }
    }));
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.accountNumber?.includes(searchQuery),
  );

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-red-500">
        Error: {error}
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
              {loading ? (
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
                  <tr key={user.accountNumber} className="hover:bg-gray-50">
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
                        className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${user.role === "admin"
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
                          disabled={userStates[user.accountNumber]?.isUpdating}
                          className="text-blue-600 hover:text-blue-900 disabled:opacity-50"
                        >
                          {userStates[user.accountNumber]?.isUpdating ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                          ) : (
                            <Pencil className="h-4 w-4" />
                          )}
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.accountNumber)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="Amount"
                            value={userStates[user.accountNumber]?.topUpAmount || ""}
                            onChange={(e) => handleTopUpAmountChange(user.accountNumber, e.target.value)}
                            className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm"
                          />
                          <button
                            onClick={() => {
                              const amount = userStates[user.accountNumber]?.topUpAmount;
                              if (amount) {
                                handleTopUp(user.accountNumber, parseFloat(amount));
                              }
                            }}
                            disabled={userStates[user.accountNumber]?.isToppingUp}
                            className="ml-2 rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600 disabled:opacity-50"
                          >
                            {userStates[user.accountNumber]?.isToppingUp ? (
                              <div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            ) : (
                              "Top Up"
                            )}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-bold">Edit User</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleUpdateUser(selectedUser.accountNumber, {
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
                  disabled={userStates[selectedUser.accountNumber]?.isUpdating}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {userStates[selectedUser.accountNumber]?.isUpdating ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Saving...</span>
                    </div>
                  ) : (
                    "Save Changes"
                  )}
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
