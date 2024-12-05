'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <PromotionFormModalStack id={id} />;
}

const PromotionFormModalStack = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
};
