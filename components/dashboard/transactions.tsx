"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getInitials } from "@/lib/utils";
import useTransactionStore from "@/store/transactionStore";
import useUserStore from "@/store/userStore";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Breadcrumb from "../ui/breadcrumb";

const Transactions = () => {
  const { profile } = useUserStore();
  const { getTransactions, getTransactionById, transactions, selectedTransaction, isLoading, error } = useTransactionStore();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const handleViewDetails = async (id: string) => {
    setSelectedId(id);
    await getTransactionById(id);
    setIsDetailsOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "cancelled":
        return "bg-gray-100 text-gray-800";
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

  const initials = getInitials(profile?.fullName ?? "");

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <div className="md:max-w-7xl w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Transaction History
          </h1>
          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading transactions...</span>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            <p>{error}</p>
          </div>
        )}

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow key={transaction._id}>
                    <TableCell>{formatDate(transaction.createdAt)}</TableCell>
                    <TableCell className="capitalize">{transaction.type.toLowerCase().replace("_", " ")}</TableCell>
                    <TableCell>{formatAmount(transaction.amount)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {transaction.recipient?.accountNumber || "N/A"}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => handleViewDetails(transaction._id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Transaction Details</DialogTitle>
            </DialogHeader>
            {selectedTransaction && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Transaction ID</p>
                    <p className="mt-1">{selectedTransaction._id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date</p>
                    <p className="mt-1">{formatDate(selectedTransaction.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Type</p>
                    <p className="mt-1 capitalize">{selectedTransaction.type.toLowerCase().replace("_", " ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Amount</p>
                    <p className="mt-1">{formatAmount(selectedTransaction.amount)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <p className="mt-1">
                      <Badge className={getStatusColor(selectedTransaction.status)}>
                        {selectedTransaction.status}
                      </Badge>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Sender</p>
                    <p className="mt-1">{selectedTransaction.sender.fullName}</p>
                    <p className="text-sm text-gray-500">{selectedTransaction.sender.email}</p>
                    <p className="text-sm text-gray-500">{selectedTransaction.sender.accountNumber}</p>
                  </div>
                  {selectedTransaction.recipient && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Recipient</p>
                      <p className="mt-1">{selectedTransaction.recipient.accountNumber}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            This site provides information about and access to services offered
            by the Institution and all its respective affiliates or partners.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ©2022 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
