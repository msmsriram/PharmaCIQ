"use client"

import { Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PatentExpiryTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Patent Expirations</CardTitle>
        <CardDescription>Upcoming patent expirations for mCRPC treatments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-secondary-lightblue">
            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q3 2024</div>
              <div className="mt-1 text-sm font-medium">Enzalutamide (Xtandi) - Secondary Patent</div>
              <div className="mt-1 text-xs">Pfizer/Astellas - AR inhibitor formulation</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q1 2025</div>
              <div className="mt-1 text-sm font-medium">Abiraterone (Zytiga) - Method of Use</div>
              <div className="mt-1 text-xs">Johnson & Johnson - CYP17 inhibitor use in mCRPC</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q4 2025</div>
              <div className="mt-1 text-sm font-medium">Olaparib (Lynparza) - Composition</div>
              <div className="mt-1 text-xs">AstraZeneca - PARP inhibitor for BRCA-mutated mCRPC</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q2 2026</div>
              <div className="mt-1 text-sm font-medium">Darolutamide (Nubeqa) - Composition</div>
              <div className="mt-1 text-xs">Bayer - AR antagonist for non-metastatic CRPC</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

