"use client"

import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for patent landscape
const landscapeData = {
  categories: [
    "Total Patents",
    "Patents Filed (Last 5 Years)",
    "Patents Expiring (Next 5 Years)",
    "Composition of Matter Patents",
    "Method of Use Patents",
    "Formulation Patents",
    "Patents in Litigation",
    "Average Patent Life Remaining (Years)",
    "Patent Family Size (Avg)",
  ],
  competitors: [
    {
      name: "Pfizer/Astellas",
      values: ["18", "7", "3", "5", "8", "5", "2", "8.3", "12"],
    },
    {
      name: "Johnson & Johnson",
      values: ["15", "4", "4", "3", "7", "5", "3", "6.5", "9"],
    },
    {
      name: "AstraZeneca",
      values: ["12", "6", "1", "4", "5", "3", "0", "10.2", "11"],
    },
  ],
}

export default function PatentLandscape() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <CardTitle>mCRPC Patent Landscape</CardTitle>
            <CardDescription>Comparative analysis of patent portfolios for mCRPC treatments</CardDescription>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select defaultValue="top3">
              <SelectTrigger className="w-[180px] border-secondary-grayblue">
                <SelectValue placeholder="Select companies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top3">Top 3 Companies</SelectItem>
                <SelectItem value="top5">Top 5 Companies</SelectItem>
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
                {landscapeData.competitors.map((competitor) => (
                  <TableHead key={competitor.name}>{competitor.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {landscapeData.categories.map((category, index) => (
                <TableRow key={category}>
                  <TableCell className="font-medium">{category}</TableCell>
                  {landscapeData.competitors.map((competitor) => (
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

