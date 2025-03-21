"use client"

import { CalendarDays, ExternalLink, FileText, FlaskRoundIcon as Flask, Newspaper, ScrollText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for search results
const searchResultsData = [
  {
    id: 1,
    title: "Phase 3 Trial of 177Lu-PSMA-617 in Patients with Metastatic Castration-Resistant Prostate Cancer",
    source: "ClinicalTrials.gov",
    date: "Updated Jan 15, 2024",
    url: "#",
    type: "Clinical Trial",
    icon: Flask,
    excerpt:
      "This phase 3 trial studies the efficacy and safety of 177Lu-PSMA-617 in patients with metastatic castration-resistant prostate cancer who have progressed after prior treatment with androgen receptor pathway inhibitors and taxane-based chemotherapy.",
  },
  {
    id: 2,
    title: "Olaparib for Metastatic Castration-Resistant Prostate Cancer with DNA Repair Gene Aberrations",
    source: "New England Journal of Medicine",
    date: "Published Dec 10, 2023",
    url: "#",
    type: "Publication",
    icon: ScrollText,
    excerpt:
      "This study evaluated the efficacy and safety of the PARP inhibitor olaparib in patients with metastatic castration-resistant prostate cancer who had disease progression while receiving a new hormonal agent and who had alterations in genes with a role in homologous recombination repair.",
  },
  {
    id: 3,
    title: "Methods of treating prostate cancer with PARP inhibitors",
    source: "USPTO",
    date: "Filed Jun 22, 2022",
    url: "#",
    type: "Patent",
    icon: FileText,
    excerpt:
      "This patent describes methods for treating metastatic castration-resistant prostate cancer using PARP inhibitors in combination with androgen receptor pathway inhibitors in patients with specific genetic mutations.",
  },
  {
    id: 4,
    title: "Pfizer announces positive PARP inhibitor data in BRCA-mutated mCRPC patients",
    source: "FiercePharma",
    date: "Published Jan 18, 2024",
    url: "#",
    type: "News",
    icon: Newspaper,
    excerpt:
      "Pfizer today announced positive results from its Phase 3 trial evaluating its PARP inhibitor in patients with BRCA1/2 or ATM-mutated metastatic castration-resistant prostate cancer who had previously received androgen receptor-directed therapy.",
  },
  {
    id: 5,
    title:
      "Combination of Androgen Receptor Inhibition with PARP Inhibition in Metastatic Castration-Resistant Prostate Cancer",
    source: "Journal of Clinical Oncology",
    date: "Published Nov 05, 2023",
    url: "#",
    type: "Publication",
    icon: ScrollText,
    excerpt:
      "This study investigated the efficacy and safety of combining androgen receptor inhibition with PARP inhibition in patients with metastatic castration-resistant prostate cancer, regardless of DNA damage repair defects.",
  },
]

export default function SearchResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
        <CardDescription>Found 127 results for "PARP inhibitor mCRPC"</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {searchResultsData.map((result) => (
            <div key={result.id} className="rounded-lg border border-secondary-grayblue/30 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-muted p-2">
                  <result.icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-primary-blue">{result.title}</h4>
                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <ExternalLink className="h-3 w-3" />
                      <span className="sr-only">Open link</span>
                    </a>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{result.source}</span>
                    <span className="mx-1">•</span>
                    <CalendarDays className="mr-1 h-3 w-3" />
                    <span>{result.date}</span>
                    <span className="mx-1">•</span>
                    <Badge variant="outline" className="text-xs border-secondary-grayblue text-primary-blue">
                      {result.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full border-secondary-grayblue">
            Load More Results
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

