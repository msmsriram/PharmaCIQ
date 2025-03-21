"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SearchFilters() {
  const [sourceFilters, setSourceFilters] = useState({
    clinical: true,
    patents: true,
    publications: true,
    news: true,
  })

  const [treatmentFilters, setTreatmentFilters] = useState({
    ar: true,
    parp: true,
    radioligand: true,
    immunotherapy: true,
    chemotherapy: true,
  })

  const [companyFilters, setCompanyFilters] = useState({
    pfizer: true,
    jnj: true,
    astrazeneca: true,
    novartis: true,
    bayer: true,
  })

  const handleSourceChange = (id: string) => {
    setSourceFilters({
      ...sourceFilters,
      [id]: !sourceFilters[id as keyof typeof sourceFilters],
    })
  }

  const handleTreatmentChange = (id: string) => {
    setTreatmentFilters({
      ...treatmentFilters,
      [id]: !treatmentFilters[id as keyof typeof treatmentFilters],
    })
  }

  const handleCompanyChange = (id: string) => {
    setCompanyFilters({
      ...companyFilters,
      [id]: !companyFilters[id as keyof typeof companyFilters],
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Filters</CardTitle>
        <CardDescription>Refine your mCRPC search results</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-medium text-primary-blue">Source Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="clinical"
                  checked={sourceFilters.clinical}
                  onCheckedChange={() => handleSourceChange("clinical")}
                />
                <Label htmlFor="clinical">mCRPC Clinical Trials</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="patents"
                  checked={sourceFilters.patents}
                  onCheckedChange={() => handleSourceChange("patents")}
                />
                <Label htmlFor="patents">mCRPC Patents</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="publications"
                  checked={sourceFilters.publications}
                  onCheckedChange={() => handleSourceChange("publications")}
                />
                <Label htmlFor="publications">mCRPC Publications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="news" checked={sourceFilters.news} onCheckedChange={() => handleSourceChange("news")} />
                <Label htmlFor="news">mCRPC News</Label>
              </div>
            </div>
          </div>

          {/* Treatment Type section with similar changes */}
          <div>
            <h3 className="mb-2 text-sm font-medium text-primary-blue">Treatment Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="ar" checked={treatmentFilters.ar} onCheckedChange={() => handleTreatmentChange("ar")} />
                <Label htmlFor="ar">AR Inhibitors for mCRPC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="parp"
                  checked={treatmentFilters.parp}
                  onCheckedChange={() => handleTreatmentChange("parp")}
                />
                <Label htmlFor="parp">PARP Inhibitors for mCRPC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="radioligand"
                  checked={treatmentFilters.radioligand}
                  onCheckedChange={() => handleTreatmentChange("radioligand")}
                />
                <Label htmlFor="radioligand">Radioligand Therapies for mCRPC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="immunotherapy"
                  checked={treatmentFilters.immunotherapy}
                  onCheckedChange={() => handleTreatmentChange("immunotherapy")}
                />
                <Label htmlFor="immunotherapy">Immunotherapies for mCRPC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="chemotherapy"
                  checked={treatmentFilters.chemotherapy}
                  onCheckedChange={() => handleTreatmentChange("chemotherapy")}
                />
                <Label htmlFor="chemotherapy">Chemotherapies for mCRPC</Label>
              </div>
            </div>
          </div>

          {/* Company section with similar changes */}
          <div>
            <h3 className="mb-2 text-sm font-medium text-primary-blue">Company</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pfizer"
                  checked={companyFilters.pfizer}
                  onCheckedChange={() => handleCompanyChange("pfizer")}
                />
                <Label htmlFor="pfizer">Pfizer/Astellas (mCRPC)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="jnj" checked={companyFilters.jnj} onCheckedChange={() => handleCompanyChange("jnj")} />
                <Label htmlFor="jnj">Johnson & Johnson (mCRPC)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="astrazeneca"
                  checked={companyFilters.astrazeneca}
                  onCheckedChange={() => handleCompanyChange("astrazeneca")}
                />
                <Label htmlFor="astrazeneca">AstraZeneca (mCRPC)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="novartis"
                  checked={companyFilters.novartis}
                  onCheckedChange={() => handleCompanyChange("novartis")}
                />
                <Label htmlFor="novartis">Novartis (mCRPC)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bayer"
                  checked={companyFilters.bayer}
                  onCheckedChange={() => handleCompanyChange("bayer")}
                />
                <Label htmlFor="bayer">Bayer (mCRPC)</Label>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

