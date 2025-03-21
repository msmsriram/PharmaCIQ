"use client"

import { Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PipelineTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key mCRPC Milestones</CardTitle>
        <CardDescription>Upcoming clinical and regulatory milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-secondary-lightblue">
            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q2 2024</div>
              <div className="mt-1 text-sm font-medium">Pfizer's PF-07945 Phase 3 Data Readout</div>
              <div className="mt-1 text-xs">PARP inhibitor for mCRPC with BRCA mutations</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q3 2024</div>
              <div className="mt-1 text-sm font-medium">AstraZeneca's AZD5305 Phase 2 Results</div>
              <div className="mt-1 text-xs">Next-gen PARP inhibitor for mCRPC</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q4 2024</div>
              <div className="mt-1 text-sm font-medium">Novartis' 177Lu-PSMA-800 FDA Decision</div>
              <div className="mt-1 text-xs">Radioligand therapy for mCRPC</div>
            </div>

            <div className="relative mb-4 rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary-amber text-white">
                <Calendar className="h-3 w-3" />
              </div>
              <div className="text-xs text-muted-foreground">Q1 2025</div>
              <div className="mt-1 text-sm font-medium">Merck's MK-4280 Phase 3 Initiation</div>
              <div className="mt-1 text-xs">Anti-LAG3 immunotherapy for mCRPC</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

