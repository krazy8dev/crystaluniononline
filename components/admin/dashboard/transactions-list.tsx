"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { getInitials } from "@/lib/utils";
import useAdminStore from "@/store/adminStore";
import useUserStore from "@/store/userStore";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const TransactionsList = () => {
    const { profile } = useUserStore();
    const {
        pendingTransactions,
        loading,
        error,
        fetchPendingTransactions,
        updateTransactionStatus,
    } = useAdminStore();

    const [selectedStatus, setSelectedStatus] = useState<string>("PENDING");

    useEffect(() => {
        fetchPendingTransactions();
    }, [fetchPendingTransactions]);

    const handleStatusUpdate = async (transactionId: string, newStatus: string) => {
        try {
            await updateTransactionStatus(transactionId, newStatus);
            toast.success("Transaction status updated successfully");
        } catch {
            toast.error("Failed to update transaction status");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "COMPLETED":
                return "bg-green-100 text-green-800";
            case "PENDING":
                return "bg-yellow-100 text-yellow-800";
            case "FAILED":
                return "bg-red-100 text-red-800";
            case "CANCELLED":
                return "bg-gray-100 text-gray-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <Breadcrumb />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
                    {getInitials(profile?.fullName ?? "")}
                </div>
            </div>
            <hr className="my-4" />

            <div className="mb-6">
                <h2 className="mb-4 text-2xl font-semibold">Transactions List</h2>
                <div className="flex items-center space-x-4">
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="PENDING">Pending</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="FAILED">Failed</option>
                        <option value="CANCELLED">Cancelled</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Transaction ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Sender
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Recipient
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {pendingTransactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {transaction._id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {transaction.type}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    ${transaction.amount.toFixed(2)}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <div>
                                        <div className="font-medium">{transaction.sender.fullName}</div>
                                        <div className="text-gray-500">{transaction.sender.email}</div>
                                        <div className="text-gray-500">{transaction.sender.accountNumber}</div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {transaction.recipient?.accountNumber || "N/A"}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {format(new Date(transaction.createdAt), "MMM dd, yyyy HH:mm")}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                                            transaction.status
                                        )}`}
                                    >
                                        {transaction.status}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <select
                                        value={transaction.status}
                                        onChange={(e) => handleStatusUpdate(transaction._id, e.target.value)}
                                        className="rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                    >
                                        <option value="PENDING">Pending</option>
                                        <option value="COMPLETED">Completed</option>
                                        <option value="FAILED">Failed</option>
                                        <option value="CANCELLED">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsList; 