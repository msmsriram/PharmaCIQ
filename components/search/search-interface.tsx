"use client"

import type React from "react"

import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchInterface() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would trigger the search
    console.log("Searching for mCRPC keywords")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>mCRPC Intelligence Search</CardTitle>
        <CardDescription>
          Search across clinical trials, patents, publications, and news for mCRPC insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="keyword">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger value="keyword" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Keyword Search
            </TabsTrigger>
            <TabsTrigger
              value="semantic"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Semantic Search
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Advanced Search
            </TabsTrigger>
          </TabsList>
          <TabsContent value="keyword" className="space-y-4">
            <div className="mt-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder='Search for mCRPC keywords (e.g., "PARP inhibitor mCRPC clinical trial")'
                    className="w-full pl-8"
                  />
                </div>
                <Button type="submit" className="bg-primary-amber hover:bg-primary-amber/90 text-white">
                  Search
                </Button>
              </form>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-7 border-secondary-grayblue">
                  PARP inhibitor
                </Button>
                <Button variant="outline" size="sm" className="h-7 border-secondary-grayblue">
                  Androgen receptor
                </Button>
                <Button variant="outline" size="sm" className="h-7 border-secondary-grayblue">
                  Radioligand therapy
                </Button>
                <Button variant="outline" size="sm" className="h-7 border-secondary-grayblue">
                  PSMA
                </Button>
                <Button variant="outline" size="sm" className="h-7 border-secondary-grayblue">
                  Immunotherapy
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="semantic" className="h-[120px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm text-muted-foreground">Semantic search interface would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="advanced" className="h-[120px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm text-muted-foreground">Advanced search interface would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

