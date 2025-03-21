"use client"

import { Copy, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function ApiSettings() {
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Settings</CardTitle>
        <CardDescription>Manage API keys and external data sources</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="api-key">API Key</Label>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowApiKey(!showApiKey)}>
              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showApiKey ? "Hide" : "Show"} API key</span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Input
              id="api-key"
              type={showApiKey ? "text" : "password"}
              value="sk_live_51NXcGhKj8aIJsUdkfjdkfjdkfjdkfjdkfjdkfjdkfj"
              readOnly
              className="font-mono"
            />
            <Button variant="outline" size="icon" className="h-10 w-10 flex-shrink-0 border-secondary-grayblue">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy API key</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            This API key provides access to the PharmaCIQ API for mCRPC data integration.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-primary-blue">mCRPC External Data Sources</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="clinicaltrials">ClinicalTrials.gov (mCRPC)</Label>
              <p className="text-xs text-muted-foreground">Connect to ClinicalTrials.gov API for mCRPC trials</p>
            </div>
            <Switch id="clinicaltrials" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="pubmed">PubMed (mCRPC)</Label>
              <p className="text-xs text-muted-foreground">Connect to PubMed API for mCRPC publications</p>
            </div>
            <Switch id="pubmed" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="uspto">USPTO Patent Database (mCRPC)</Label>
              <p className="text-xs text-muted-foreground">Connect to USPTO API for mCRPC patents</p>
            </div>
            <Switch id="uspto" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="news">News API (mCRPC)</Label>
              <p className="text-xs text-muted-foreground">Connect to News API for mCRPC news</p>
            </div>
            <Switch id="news" defaultChecked />
          </div>
        </div>

        <div className="pt-2">
          <Button variant="outline" className="w-full border-secondary-grayblue">
            Regenerate API Key
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

