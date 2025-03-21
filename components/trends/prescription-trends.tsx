"use client"

import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for prescription trends
const prescriptionData = {
  categories: [
    "Total Prescriptions (Monthly)",
    "New Prescriptions (Monthly)",
    "Refill Prescriptions (Monthly)",
    "Market Share (%)",
    "Growth Rate (YoY %)",
    "Average Duration (Months)",
    "Discontinuation Rate (%)",
    "Combination Use Rate (%)",
    "Physician Preference Score (1-10)",
  ],
  products: [
    {
      name: "Enzalutamide (Xtandi)",
      values: ["12,450", "2,850", "9,600", "28.5%", "+5.2%", "11.3", "18.5%", "42.3%", "8.2"],
    },
    {
      name: "Abiraterone (Zytiga)",
      values: ["10,320", "2,120", "8,200", "23.6%", "+2.8%", "10.5", "22.1%", "38.7%", "7.8"],
    },
    {
      name: "Darolutamide (Nubeqa)",
      values: ["5,780", "1,650", "4,130", "13.2%", "+15.3%", "9.2", "16.8%", "35.2%", "8.5"],
    },
    {
      name: "Olaparib (Lynparza)",
      values: ["4,250", "1,320", "2,930", "9.7%", "+18.7%", "8.5", "24.3%", "28.5%", "7.9"],
    },
  ],
}

export default function PrescriptionTrends() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <CardTitle>mCRPC Prescription Trends</CardTitle>
            <CardDescription>Analysis of prescription patterns for mCRPC treatments</CardDescription>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] border-secondary-grayblue">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="eu">Europe</SelectItem>
                <SelectItem value="asia">Asia Pacific</SelectItem>
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
                {prescriptionData.products.map((product) => (
                  <TableHead key={product.name}>{product.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptionData.categories.map((category, index) => (
                <TableRow key={category}>
                  <TableCell className="font-medium">{category}</TableCell>
                  {prescriptionData.products.map((product) => (
                    <TableCell key={`${product.name}-${category}`}>{product.values[index]}</TableCell>
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

