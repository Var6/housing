import { Suspense } from 'react';
import Propertyhai from '@/components/UX/propertyhai';

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading properties...</div>}>
        <Propertyhai/>
    </Suspense>
  );
}
