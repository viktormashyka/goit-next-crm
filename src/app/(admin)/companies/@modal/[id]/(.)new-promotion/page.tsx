'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { id } = await params;
      setId(id);
    }
    fetchData();
  }, [params]);

  if (!id) return null;

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
