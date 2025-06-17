"use client";

import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import useAdminStore from "@/store/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const UserDetailsPage = () => {
  const { id } = useParams();
  const { selectedUser, loading, error, fetchUserById } = useAdminStore();

  useEffect(() => {
    if (id) {
      fetchUserById(id as string);
    }
  }, [id, fetchUserById]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-[200px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[280px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!selectedUser) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">User not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Full Name
              </h3>
              <p className="text-lg">{selectedUser.fullName}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Email
              </h3>
              <p className="text-lg">{selectedUser.email}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Account Number
              </h3>
              <p className="text-lg">{selectedUser.accountNumber}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Balance
              </h3>
              <p className="text-lg">${selectedUser.balance.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Role
              </h3>
              <p className="text-lg capitalize">{selectedUser.role}</p>
            </div>
            <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                    Security Pin
                </h3>
                <p className="text-lg">
                    {selectedUser.securityPin}
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailsPage;
