"use client";

import PrivateRoute from "@/components/PrivateRoute";
import BeADonorForm from "@/components/BeADonorForm";

export default function BeADonorPage() {
  return (
    <PrivateRoute>
      <BeADonorForm />
    </PrivateRoute>
  );
}
