"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import useAdminStore from "@/store/adminStore";
// import useUserStore from "@/store/userStore";
import { ArrowLeft, Eye, Pencil, Search, Trash2 } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  fullName: string;
  email: string;
  accountNumber: string;
  balance: number;
  role: string;
  securityPin: string;
  password?: string;
  _id: string;
}

interface UserState {
  topUpAmount: string;
  isToppingUp: boolean;
  isUpdating: boolean;
}

const UsersPage = () => {
  const {
    users,
    loading,
    error,
    fetchUsers,
    updateUser,
    deleteUser,
    topUpUserBalance,
  } = useAdminStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userStates, setUserStates] = useState<Record<string, UserState>>({});
  // const { profile } = useUserStore();
  // const router = useRouter();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Initialize user states when users are loaded
  useEffect(() => {
    const newUserStates: Record<string, UserState> = {};
    users.forEach((user) => {
      newUserStates[user.accountNumber] = {
        topUpAmount: "",
        isToppingUp: false,
        isUpdating: false,
      };
    });
    setUserStates(newUserStates);
  }, [users]);

  // Update user
  const handleUpdateUser = async (id: string, data: Partial<User>) => {
    try {
      setUserStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], isUpdating: true },
      }));
      await updateUser(id, data);
      toast.success("User updated successfully");
      setIsEditing(false);
    } catch {
      toast.error("Failed to update user");
    } finally {
      setUserStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], isUpdating: false },
      }));
    }
  };

  // Delete user
  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
    } catch {
      toast.error("Failed to delete user");
    }
  };

  // Top up user balance
  const handleTopUp = async (id: string, amount: number) => {
    try {
      setUserStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], isToppingUp: true },
      }));
      await topUpUserBalance(id, amount);
      toast.success("Balance topped up successfully");
      setUserStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], topUpAmount: "", isToppingUp: false },
      }));
    } catch {
      toast.error("Failed to top up balance");
      setUserStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], isToppingUp: false },
      }));
    }
  };

  // Update top up amount for a specific user
  const handleTopUpAmountChange = (id: string, amount: string) => {
    setUserStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], topUpAmount: amount },
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
        <Breadcrumb />
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
          Users Management
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-xs focus:border-blue-500 focus:outline-none md:text-base"
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
                  Security PIN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Password
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    </div>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
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
                      <div className="font-mono text-sm text-gray-500">
                        {user.securityPin}
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
                      <div className="font-mono text-sm text-gray-500">
                        {user.password}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => {
                            setSelectedUser({
                              ...user,
                              _id: user.accountNumber,
                            });
                            setIsViewing(true);
                          }}
                          className="text-green-600 hover:text-green-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedUser({
                              ...user,
                              _id: user.accountNumber,
                            });
                            setIsEditing(true);
                          }}
                          disabled={userStates[user.accountNumber]?.isUpdating}
                          className="text-blue-600 hover:text-blue-900 disabled:opacity-50"
                          title="Edit User"
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
                          title="Delete User"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="Amount"
                            value={
                              userStates[user.accountNumber]?.topUpAmount || ""
                            }
                            onChange={(e) =>
                              handleTopUpAmountChange(
                                user.accountNumber,
                                e.target.value,
                              )
                            }
                            className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm"
                          />
                          <button
                            onClick={() => {
                              const amount =
                                userStates[user.accountNumber]?.topUpAmount;
                              if (amount) {
                                handleTopUp(
                                  user.accountNumber,
                                  parseFloat(amount),
                                );
                              }
                            }}
                            disabled={
                              userStates[user.accountNumber]?.isToppingUp
                            }
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
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
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

      {/* User Details Modal */}
      {isViewing && selectedUser && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">User Details</h2>
              <button
                onClick={() => setIsViewing(false)}
                className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Users
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Full Name
                    </p>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedUser.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedUser.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Account Number
                    </p>
                    <p className="mt-1 font-mono text-sm text-gray-900">
                      {selectedUser.accountNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Security PIN
                    </p>
                    <p className="mt-1 font-mono text-sm text-gray-900">
                      {selectedUser.securityPin}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Account Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Current Balance
                    </p>
                    <p
                      className={`mt-1 text-lg font-semibold ${selectedUser.balance < 0 ? "text-red-600" : "text-green-600"}`}
                    >
                      ${selectedUser.balance?.toFixed(2) || "0.00"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <span
                      className={`mt-1 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        selectedUser.role === "admin"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {selectedUser.role || "user"}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">User ID</p>
                    <p className="mt-1 font-mono text-sm text-gray-900">
                      {selectedUser._id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">User Password</p>
                    <p className="mt-1 font-mono text-sm text-gray-900">
                      {selectedUser.password}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsViewing(false);
                  setSelectedUser({
                    ...selectedUser,
                    _id: selectedUser.accountNumber,
                  });
                  setIsEditing(true);
                }}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Edit User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
