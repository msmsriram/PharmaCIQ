"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, Check, Filter, FlaskRoundIcon as Flask, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample data for mCRPC pipeline tracker
const pipelineData = [
  {
    id: 1,
    product: "ARV-110",
    company: "Arvinas",
    mechanism: "PROTAC AR degrader",
    phase: "Phase 3",
    status: "On track",
    estimatedApproval: "Q3 2025",
    notes: "Promising results in patients who progressed on enzalutamide/abiraterone",
  },
  {
    id: 2,
    product: "Talazoparib",
    company: "Pfizer",
    mechanism: "PARP inhibitor",
    phase: "Phase 3",
    status: "On track",
    estimatedApproval: "Q1 2025",
    notes: "For mCRPC with BRCA1/2 or ATM mutations",
  },
  {
    id: 3,
    product: "177Lu-PSMA-617",
    company: "Novartis",
    mechanism: "Radioligand therapy",
    phase: "Phase 3",
    status: "Accelerated",
    estimatedApproval: "Q4 2024",
    notes: "Targeting PSMA-expressing mCRPC cells",
  },
  {
    id: 4,
    product: "Sabizabulin",
    company: "Veru",
    mechanism: "Microtubule disruptor",
    phase: "Phase 3",
    status: "On track",
    estimatedApproval: "Q2 2025",
    notes: "Novel oral cytoskeleton disruptor",
  },
  {
    id: 5,
    product: "AMG 509",
    company: "Amgen",
    mechanism: "STEAP1 x CD3 BiTE",
    phase: "Phase 2",
    status: "On track",
    estimatedApproval: "Q4 2026",
    notes: "Bispecific T-cell engager for mCRPC",
  },
  {
    id: 6,
    product: "CC-94676",
    company: "BMS",
    mechanism: "AR degrader",
    phase: "Phase 2",
    status: "Delayed",
    estimatedApproval: "Q1 2027",
    notes: "Delayed due to safety signals in early trials",
  },
  {
    id: 7,
    product: "AZD5305",
    company: "AstraZeneca",
    mechanism: "Next-gen PARP inhibitor",
    phase: "Phase 2",
    status: "On track",
    estimatedApproval: "Q3 2026",
    notes: "Improved selectivity over first-gen PARP inhibitors",
  },
  {
    id: 8,
    product: "MK-4280",
    company: "Merck",
    mechanism: "Anti-LAG3 antibody",
    phase: "Phase 2",
    status: "On track",
    estimatedApproval: "Q2 2027",
    notes: "Combination with pembrolizumab for mCRPC",
  },
]

export default function PipelineTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(pipelineData)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredData(pipelineData)
    } else {
      const filtered = pipelineData.filter(
        (item) =>
          item.product.toLowerCase().includes(query) ||
          item.company.toLowerCase().includes(query) ||
          item.mechanism.toLowerCase().includes(query),
      )
      setFilteredData(filtered)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>mCRPC Pipeline Tracker</CardTitle>
            <CardDescription>Monitor competitor drug development pipelines for mCRPC</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Phase</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Phase 1</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Phase 2</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Phase 3</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>NDA/Approval</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>On track</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Delayed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Accelerated</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Flask className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products, companies, or mechanisms..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="hidden md:table-cell">Mechanism</TableHead>
                <TableHead>Phase</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden lg:table-cell">Est. Approval</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell className="hidden max-w-[200px] truncate md:table-cell">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-default">{item.mechanism}</TooltipTrigger>
                        <TooltipContent>
                          <p>{item.mechanism}</p>
                          <p className="mt-1 text-xs">{item.notes}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-secondary-grayblue text-primary-blue">
                      {item.phase}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.status === "On track" && <Check className="mr-1 h-4 w-4 text-emerald-500" />}
                      {item.status === "Delayed" && <AlertCircle className="mr-1 h-4 w-4 text-amber-500" />}
                      {item.status === "Accelerated" && (
                        <Badge className="bg-primary-amber hover:bg-primary-amber/90 text-white">{item.status}</Badge>
                      )}
                      {item.status !== "Accelerated" && item.status}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">{item.estimatedApproval}</TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                      <X className="h-6 w-6 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">No results found for "{searchQuery}"</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

