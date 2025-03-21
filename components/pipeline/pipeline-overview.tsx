"use client"

import { BarChart, Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PipelineOverview({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>mCRPC Pipeline Overview</CardTitle>
            <CardDescription>
              Current status of metastatic Castration-Resistant Prostate Cancer pipelines
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">42</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Total Products</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">8</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Phase 1</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">15</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Phase 2</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">19</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Phase 3</div>
            </div>
          </div>

          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <h3 className="mb-3 text-sm font-medium text-primary-blue">Pipeline by Mechanism of Action</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Androgen Receptor Inhibitors</span>
                  <span className="font-medium text-primary-amber">28%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "28%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>PARP Inhibitors</span>
                  <span className="font-medium text-primary-amber">22%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "22%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Radioligand Therapies</span>
                  <span className="font-medium text-primary-amber">18%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "18%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Immunotherapies</span>
                  <span className="font-medium text-primary-amber">15%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "15%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Other Mechanisms</span>
                  <span className="font-medium text-primary-amber">17%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "17%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart className="h-10 w-10 text-primary-blue" />
              <h3 className="mt-4 text-lg font-medium">Pipeline Visualization</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Interactive pipeline visualization would be displayed here
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

