import { Suspense } from 'react';
import Propertyhai from '@/components/UX/propertyhai';
import { getAllProperties } from '@/lib/property-service';

export default async function PropertiesPage() {
  const projects = await getAllProperties()

  return (
    <Suspense fallback={<div className="p-6">Loading properties...</div>}>
        <Propertyhai projects={projects} />
    </Suspense>
  );
}
