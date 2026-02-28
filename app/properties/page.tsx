import { Suspense } from 'react';
import Propertyhai from '@/components/UX/propertyhai';
import { getAllProperties } from '@/lib/property-service';

export const dynamic = 'force-dynamic'

export default async function PropertiesPage() {
  const projects = await getAllProperties()

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-700 shadow-sm">
            Loading properties...
          </div>
        </div>
      }
    >
        <Propertyhai projects={projects} />
    </Suspense>
  );
}
