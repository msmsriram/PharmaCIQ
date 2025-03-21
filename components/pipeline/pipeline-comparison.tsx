"use client"

import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for pipeline comparison
const comparisonData = {
  categories: [
    "Phase 1 Products",
    "Phase 2 Products",
    "Phase 3 Products",
    "Expected Approvals (2024-2025)",
    "AR-Targeting Agents",
    "PARP Inhibitors",
    "Radioligand Therapies",
    "Immunotherapies",
    "Novel Mechanisms",
  ],
  competitors: [
    {
      name: "Pfizer",
      values: ["2", "3", "2", "1", "1", "2", "0", "1", "3"],
    },
    {
      name: "Novartis",
      values: ["1", "2", "3", "2", "0", "1", "3", "1", "1"],
    },
    {
      name: "AstraZeneca",
      values: ["2", "4", "1", "1", "2", "3", "0", "2", "0"],
    },
  ],
}

export default function PipelineComparison() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <CardTitle>mCRPC Pipeline Comparison</CardTitle>
            <CardDescription>Side-by-side comparison of key competitor pipelines for mCRPC</CardDescription>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select defaultValue="top3">
              <SelectTrigger className="w-[180px] border-secondary-grayblue">
                <SelectValue placeholder="Select competitors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top3">Top 3 Competitors</SelectItem>
                <SelectItem value="top5">Top 5 Competitors</SelectItem>
                <SelectItem value="custom">Custom Selection</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
              <Filter className="mr-2 h-4 w-4" />
              Metrics
            </Button>
            <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Metric</TableHead>
                {comparisonData.competitors.map((competitor) => (
                  <TableHead key={competitor.name}>{competitor.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.categories.map((category, index) => (
                <TableRow key={category}>
                  <TableCell className="font-medium">{category}</TableCell>
                  {comparisonData.competitors.map((competitor) => (
                    <TableCell key={`${competitor.name}-${category}`}>{competitor.values[index]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

