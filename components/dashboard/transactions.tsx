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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Transactions = () => {
  const { profile } = useUserStore();
  const {
    getAllTransactions,
    getTransactionById,
    transactions,
    selectedTransaction,
    isLoading,
    error,
  } = useTransactionStore();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [, setSelectedId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  const handleViewDetails = async (id: string) => {
    try {
      setSelectedId(id);
      await getTransactionById(id);
      setIsDetailsOpen(true);
    } catch {
      // console.error("Failed to fetch transaction details:", error);
      toast.error("Failed to fetch transaction details");
    }
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

  // const getTransactionType = (type: string) => {
  //   switch (type) {
  //     case "SAME_BANK":
  //       return "Same Bank";
  //     case "OTHER_BANK":
  //       return "Other Bank";
  //     case "INTERNATIONAL":
  //       return "International";
  //     case "TOPUP":
  //       return "Top Up";
  //     case "ADMIN_TOPUP":
  //       return "Admin Top Up";
  //     default:
  //       return type.replace("_", " ");
  //   }
  // };

  const initials = getInitials(profile?.fullName ?? "");

  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800"
          onClick={() => router.push("/dashboard/account-details")}
        >
          {initials}
        </div>
      </div>

      <div className="flex items-center justify-between">
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
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          <p>{error}</p>
        </div>
      )}

      <div className="overflow-hidden rounded-lg border bg-white shadow">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Date</TableHead>
                <TableHead className="whitespace-nowrap">Type</TableHead>
                <TableHead className="whitespace-nowrap">Amount</TableHead>
                <TableHead className="whitespace-nowrap">Status</TableHead>
                <TableHead className="whitespace-nowrap">Reference</TableHead>
                <TableHead className="whitespace-nowrap">Balance</TableHead>
                <TableHead className="text-right whitespace-nowrap">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                      <span className="text-gray-500">
                        Loading transactions...
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : transactions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-8 text-center text-gray-500"
                  >
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow key={transaction._id}>
                    <TableCell className="whitespace-nowrap">
                      {formatDate(transaction.createdAt)}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium whitespace-nowrap">
                          {/* {(transaction.type)} */}
                        </div>
                        {transaction.typeDescription && (
                          <Badge
                            className={getTypeColor(
                              transaction.typeDescription,
                            )}
                          >
                            {transaction.typeDescription}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatAmount(transaction.amount)}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm whitespace-nowrap">
                      {transaction.reference}
                    </TableCell>
                    <TableCell
                      className={`whitespace-nowrap ${
                        transaction.balance < 0
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {formatAmount(transaction.balance)}
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      <button
                        onClick={() => handleViewDetails(transaction._id)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
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
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Transaction ID
                  </p>
                  <p className="mt-1 font-mono text-sm break-all">
                    {selectedTransaction._id}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Reference</p>
                  <p className="mt-1 font-mono text-sm break-all">
                    {selectedTransaction.reference}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="mt-1">
                    {formatDate(selectedTransaction.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Type</p>
                  {/* <p className="mt-1">
                    {(selectedTransaction.type)}
                  </p> */}
                    {selectedTransaction.typeDescription && (
                          <Badge
                            className={getTypeColor(
                              selectedTransaction.typeDescription,
                            )}
                          >
                    {selectedTransaction.typeDescription}
                  </Badge>
                )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="mt-1">
                    {formatAmount(selectedTransaction.amount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="mt-1">
                    <Badge
                      className={getStatusColor(selectedTransaction.status)}
                    >
                      {selectedTransaction.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Balance After
                  </p>
                  <p
                    className={`mt-1 ${selectedTransaction.balance < 0 ? "text-red-600" : "text-green-600"}`}
                  >
                    {formatAmount(selectedTransaction.balance)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Purpose</p>
                  <p className="mt-1">{selectedTransaction.purpose}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="mb-4 font-medium text-gray-900">
                  Sender Details
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1">
                      {selectedTransaction.sender.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 break-all">
                      {selectedTransaction.sender.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Account Number
                    </p>
                    <p className="mt-1 font-mono">
                      {selectedTransaction.sender.accountNumber}
                    </p>
                  </div>
                </div>
              </div>

              {selectedTransaction.recipient && (
                <div className="border-t pt-4">
                  <h4 className="mb-4 font-medium text-gray-900">
                    Recipient Details
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedTransaction.recipient.firstName && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          First Name
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.firstName}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.lastName && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Last Name
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.lastName}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.email && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <p className="mt-1 break-all">
                          {selectedTransaction.recipient.email}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Account Number
                      </p>
                      <p className="mt-1 font-mono">
                        {selectedTransaction.recipient.accountNumber}
                      </p>
                    </div>
                    {selectedTransaction.recipient.bankName && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Bank Name
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.bankName}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.bankRouteNumber && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Bank Route Number
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.bankRouteNumber}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.city && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          City
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.city}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.country && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Country
                        </p>
                        <p className="mt-1">
                          {selectedTransaction.recipient.country}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.swiftBic && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          SWIFT/BIC
                        </p>
                        <p className="mt-1 font-mono">
                          {selectedTransaction.recipient.swiftBic}
                        </p>
                      </div>
                    )}
                    {selectedTransaction.recipient.iban && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          IBAN
                        </p>
                        <p className="mt-1 font-mono">
                          {selectedTransaction.recipient.iban}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="text-sm text-gray-600">
        <p>
          This site provides information about and access to services offered by
          the Institution and all its respective affiliates or partners.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          ©2022 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Transactions;
