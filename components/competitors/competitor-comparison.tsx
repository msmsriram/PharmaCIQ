"use client"

import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for competitor comparison
const comparisonData = {
  categories: [
    "mCRPC Market Share",
    "mCRPC Revenue (billions)",
    "mCRPC R&D Spending (billions)",
    "mCRPC Pipeline Products",
    "Key mCRPC Mechanisms",
    "mCRPC Geographic Presence",
    "mCRPC Patent Expirations (next 5 years)",
    "Recent mCRPC Acquisitions",
  ],
  competitors: [
    {
      name: "Novartis",
      values: [
        "18.5%",
        "$51.9",
        "$9.5",
        "150+",
        "Oncology, Immunology, Neuroscience",
        "Global (100+ countries)",
        "12",
        "3",
      ],
    },
    {
      name: "Pfizer",
      values: [
        "16.2%",
        "$81.3",
        "$8.4",
        "95+",
        "Vaccines, Oncology, Rare Disease",
        "Global (125+ countries)",
        "8",
        "2",
      ],
    },
    {
      name: "Merck",
      values: ["12.3%", "$59.3", "$13.6", "70+", "Oncology, Vaccines, Diabetes", "Global (140+ countries)", "5", "1"],
    },
  ],
}

export default function CompetitorComparison() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <CardTitle>mCRPC Competitor Comparison</CardTitle>
            <CardDescription>Side-by-side comparison of key mCRPC competitors</CardDescription>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select defaultValue="top3">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select competitors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top3">Top 3 Competitors</SelectItem>
                <SelectItem value="top5">Top 5 Competitors</SelectItem>
                <SelectItem value="direct">Direct Competitors</SelectItem>
                <SelectItem value="custom">Custom Selection</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="mr-2 h-4 w-4" />
              Metrics
            </Button>
            <Button variant="outline" size="sm" className="h-8">
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

