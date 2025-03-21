"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, Check, FileText, Filter, X } from "lucide-react"

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

// Sample data for mCRPC patent tracker
const patentData = [
  {
    id: 1,
    number: "US10,XXX,XXX",
    title: "Androgen receptor degradation compounds",
    company: "Arvinas",
    filingDate: "Mar 15, 2018",
    expiryDate: "Mar 15, 2038",
    status: "Active",
    type: "Composition of Matter",
  },
  {
    id: 2,
    number: "US9,XXX,XXX",
    title: "Methods of treating prostate cancer with PARP inhibitors",
    company: "AstraZeneca",
    filingDate: "Jun 22, 2016",
    expiryDate: "Jun 22, 2036",
    status: "Active",
    type: "Method of Use",
  },
  {
    id: 3,
    number: "US8,XXX,XXX",
    title: "Radioligand conjugates targeting PSMA",
    company: "Novartis",
    filingDate: "Sep 10, 2015",
    expiryDate: "Sep 10, 2035",
    status: "Active",
    type: "Composition of Matter",
  },
  {
    id: 4,
    number: "US11,XXX,XXX",
    title: "Bispecific antibodies for prostate cancer treatment",
    company: "Amgen",
    filingDate: "Nov 05, 2019",
    expiryDate: "Nov 05, 2039",
    status: "Active",
    type: "Composition of Matter",
  },
  {
    id: 5,
    number: "US7,XXX,XXX",
    title: "Enzalutamide and methods of use",
    company: "Pfizer/Astellas",
    filingDate: "Aug 13, 2010",
    expiryDate: "Aug 13, 2027",
    status: "Litigation",
    type: "Composition of Matter",
  },
  {
    id: 6,
    number: "US8,XXX,XXX",
    title: "Abiraterone acetate formulations",
    company: "Johnson & Johnson",
    filingDate: "Feb 28, 2012",
    expiryDate: "Feb 28, 2032",
    status: "Litigation",
    type: "Formulation",
  },
  {
    id: 7,
    number: "US10,XXX,XXX",
    title: "Selective androgen receptor modulators",
    company: "Bayer",
    filingDate: "Jul 19, 2017",
    expiryDate: "Jul 19, 2037",
    status: "Active",
    type: "Composition of Matter",
  },
  {
    id: 8,
    number: "US9,XXX,XXX",
    title: "Combination therapy for prostate cancer",
    company: "Merck",
    filingDate: "Apr 03, 2016",
    expiryDate: "Apr 03, 2036",
    status: "Active",
    type: "Method of Use",
  },
]

export default function PatentTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(patentData)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredData(patentData)
    } else {
      const filtered = patentData.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.company.toLowerCase().includes(query) ||
          item.number.toLowerCase().includes(query),
      )
      setFilteredData(filtered)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>mCRPC Patent Tracker</CardTitle>
            <CardDescription>Monitor patents related to mCRPC treatments</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Litigation</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Expired</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Composition of Matter</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Method of Use</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Formulation</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <FileText className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patents by title, company, or number..."
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
                <TableHead>Patent Number</TableHead>
                <TableHead className="hidden md:table-cell">Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="hidden lg:table-cell">Filing Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.number}</TableCell>
                  <TableCell className="hidden max-w-[200px] truncate md:table-cell">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-default">{item.title}</TooltipTrigger>
                        <TooltipContent>
                          <p>{item.title}</p>
                          <p className="mt-1 text-xs">Type: {item.type}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell className="hidden lg:table-cell">{item.filingDate}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.status === "Active" && <Check className="mr-1 h-4 w-4 text-emerald-500" />}
                      {item.status === "Litigation" && (
                        <Badge className="bg-primary-amber hover:bg-primary-amber/90 text-white">{item.status}</Badge>
                      )}
                      {item.status === "Expired" && <AlertCircle className="mr-1 h-4 w-4 text-rose-500" />}
                      {item.status !== "Litigation" && item.status}
                    </div>
                  </TableCell>
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

