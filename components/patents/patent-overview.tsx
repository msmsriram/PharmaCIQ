"use client"

import { BarChart, Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PatentOverview({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>mCRPC Patent Overview</CardTitle>
            <CardDescription>
              Patent landscape for metastatic Castration-Resistant Prostate Cancer treatments
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
              <div className="text-3xl font-bold text-primary-amber">87</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Total Patents</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">12</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">Expiring 2024-25</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">23</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">New (Last 12 Mo)</div>
            </div>
            <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
              <div className="text-3xl font-bold text-primary-amber">8</div>
              <div className="mt-1 text-sm font-medium text-primary-blue">In Litigation</div>
            </div>
          </div>

          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <h3 className="mb-3 text-sm font-medium text-primary-blue">Patents by Technology Area</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>AR Targeting Compounds</span>
                  <span className="font-medium text-primary-amber">32%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "32%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>PARP Inhibitors</span>
                  <span className="font-medium text-primary-amber">24%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "24%" }} />
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
                  <span>Immunotherapy Approaches</span>
                  <span className="font-medium text-primary-amber">15%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "15%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Other Technologies</span>
                  <span className="font-medium text-primary-amber">11%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary-amber" style={{ width: "11%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart className="h-10 w-10 text-primary-blue" />
              <h3 className="mt-4 text-lg font-medium">Patent Landscape Visualization</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Interactive patent visualization would be displayed here
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

