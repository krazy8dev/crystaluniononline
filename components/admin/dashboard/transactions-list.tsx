"use client";

import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/ui/breadcrumb";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
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
        selectedTransaction,
        loading,
        error,
        fetchPendingTransactions,
        fetchTransactionById,
        updateTransactionStatus,
    } = useAdminStore();

    const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

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

    const handleViewDetails = async (id: string) => {
        setSelectedId(id);
        await fetchTransactionById(id);
        setIsDetailsOpen(true);
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

    const getTypeColor = (typeDescription: string) => {
        switch (typeDescription?.toLowerCase()) {
            case "credit":
                return "bg-green-100 text-green-800";
            case "debit":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount);
    };

    const formatDate = (date: string) => {
        return format(new Date(date), "MMM dd, yyyy HH:mm");
    };

    const getTransactionType = (type: string) => {
        switch (type) {
            case "SAME_BANK":
                return "Same Bank";
            case "OTHER_BANK":
                return "Other Bank";
            case "INTERNATIONAL":
                return "International";
            case "TOPUP":
                return "Top Up";
            case "ADMIN_TOPUP":
                return "Admin Top Up";
            default:
                return type.replace("_", " ");
        }
    };

    const filteredTransactions = selectedStatus === "ALL"
        ? pendingTransactions
        : pendingTransactions.filter(t => t.status === selectedStatus);

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
                        <option value="ALL">All Transactions</option>
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
                                Date
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
                                Reference
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
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {formatDate(transaction.createdAt)}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <div className="space-y-1">
                                        <div className="font-medium">{getTransactionType(transaction.type)}</div>
                                        {transaction.typeDescription && (
                                            <Badge className={getTypeColor(transaction.typeDescription)}>
                                                {transaction.typeDescription}
                                            </Badge>
                                        )}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    {formatAmount(transaction.amount)}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <div>
                                        <div className="font-medium">{transaction.sender.fullName}</div>
                                        <div className="text-gray-500">{transaction.sender.email}</div>
                                        <div className="text-gray-500">{transaction.sender.accountNumber}</div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 font-mono">
                                    {transaction.reference}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <div className="mt-1">
                                        <Badge className={getStatusColor(transaction.status)}>
                                            {transaction.status}
                                        </Badge>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleViewDetails(transaction._id)}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            View
                                        </button>
                                        <select
                                            value={transaction.status}
                                            onChange={(e) => handleStatusUpdate(transaction._id, e.target.value)}
                                            className="rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                            disabled={transaction.status === "COMPLETED"}
                                        >
                                            <option value="PENDING">Pending</option>
                                            <option value="COMPLETED">Completed</option>
                                            <option value="FAILED">Failed</option>
                                            <option value="CANCELLED">Cancelled</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                        <DialogTitle>Transaction Details</DialogTitle>
                    </DialogHeader>
                    {selectedTransaction && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Transaction ID</p>
                                    <p className="mt-1 font-mono text-sm">{selectedTransaction._id}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Reference</p>
                                    <p className="mt-1 font-mono text-sm">{selectedTransaction.reference}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Date</p>
                                    <p className="mt-1">{formatDate(selectedTransaction.createdAt)}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Type</p>
                                    <p className="mt-1">{getTransactionType(selectedTransaction.type)}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Amount</p>
                                    <p className="mt-1">{formatAmount(selectedTransaction.amount)}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Status</p>
                                    <div className="mt-1">
                                        <Badge className={getStatusColor(selectedTransaction.status)}>
                                            {selectedTransaction.status}
                                        </Badge>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Balance After</p>
                                    <p className={`mt-1 ${selectedTransaction.balance < 0 ? "text-red-600" : "text-green-600"}`}>
                                        {formatAmount(selectedTransaction.balance)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Purpose</p>
                                    <p className="mt-1">{selectedTransaction.purpose}</p>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Sender Details</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Name</p>
                                        <p className="mt-1">{selectedTransaction.sender.fullName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="mt-1">{selectedTransaction.sender.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Account Number</p>
                                        <p className="mt-1 font-mono">{selectedTransaction.sender.accountNumber}</p>
                                    </div>
                                </div>
                            </div>

                            {selectedTransaction.recipient && (
                                <div className="border-t pt-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Recipient Details</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedTransaction.recipient.firstName && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">First Name</p>
                                                <p className="mt-1">{selectedTransaction.recipient.firstName}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.lastName && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Last Name</p>
                                                <p className="mt-1">{selectedTransaction.recipient.lastName}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.email && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Email</p>
                                                <p className="mt-1">{selectedTransaction.recipient.email}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Account Number</p>
                                            <p className="mt-1 font-mono">{selectedTransaction.recipient.accountNumber}</p>
                                        </div>
                                        {selectedTransaction.recipient.bankName && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Bank Name</p>
                                                <p className="mt-1">{selectedTransaction.recipient.bankName}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.bankRouteNumber && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Bank Route Number</p>
                                                <p className="mt-1">{selectedTransaction.recipient.bankRouteNumber}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.city && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">City</p>
                                                <p className="mt-1">{selectedTransaction.recipient.city}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.country && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Country</p>
                                                <p className="mt-1">{selectedTransaction.recipient.country}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.swiftBic && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">SWIFT/BIC</p>
                                                <p className="mt-1 font-mono">{selectedTransaction.recipient.swiftBic}</p>
                                            </div>
                                        )}
                                        {selectedTransaction.recipient.iban && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">IBAN</p>
                                                <p className="mt-1 font-mono">{selectedTransaction.recipient.iban}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TransactionsList; 