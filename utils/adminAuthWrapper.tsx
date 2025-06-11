// 'use client'


// import useAuthStore from "@/store/authstore";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


// interface AdminAuthWrapperProps{
//     children: React.ReactNode
// }
// const AdminAuthWrapper = ({ children }: AdminAuthWrapperProps) => {
//     const { user, isLoading } = useAuthStore();
//     const router = useRouter();
  
//     useEffect(() => {
//       if (!isLoading && (!user || !user.isAdmin)) {
//         router.push('/admin/login');
//       }
//     }, [user, isLoading]);
  
//     if (isLoading) {
//       return <LoadingSpinner />;
//     }
  
//     // Only render children if user is admin
//     return user?.isAdmin ? children : null;
//   };
  