"use client"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function DisplaySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Display Settings</CardTitle>
        <CardDescription>Customize the appearance of your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Theme</Label>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 justify-start gap-2 border-secondary-grayblue">
              <Sun className="h-4 w-4" />
              Light
            </Button>
            <Button variant="outline" size="sm" className="flex-1 justify-start gap-2 border-secondary-grayblue">
              <Moon className="h-4 w-4" />
              Dark
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 justify-start gap-2 border-primary-blue bg-primary-blue text-white"
            >
              System
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="density">Display Density</Label>
          <Select defaultValue="comfortable">
            <SelectTrigger id="density" className="border-secondary-grayblue">
              <SelectValue placeholder="Select density" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">Compact</SelectItem>
              <SelectItem value="comfortable">Comfortable</SelectItem>
              <SelectItem value="spacious">Spacious</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Default mCRPC Dashboard View</Label>
          <RadioGroup defaultValue="overview">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="overview" id="overview" />
              <Label htmlFor="overview">mCRPC Overview</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="competitors" id="competitors" />
              <Label htmlFor="competitors">mCRPC Competitors</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="market" id="market" />
              <Label htmlFor="market">mCRPC Market Analysis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pipeline" id="pipeline" />
              <Label htmlFor="pipeline">mCRPC Pipeline</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-primary-blue">Additional Settings</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animations">Enable Animations</Label>
              <p className="text-xs text-muted-foreground">Show animations for charts and transitions</p>
            </div>
            <Switch id="animations" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-refresh">Auto-Refresh Data</Label>
              <p className="text-xs text-muted-foreground">Automatically refresh dashboard data</p>
            </div>
            <Switch id="auto-refresh" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

