"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how you receive notifications and alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-primary-blue">Email Notifications</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-competitor">mCRPC Competitor Updates</Label>
              <p className="text-xs text-muted-foreground">Receive notifications about mCRPC competitor activities</p>
            </div>
            <Switch id="email-competitor" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-pipeline">mCRPC Pipeline Changes</Label>
              <p className="text-xs text-muted-foreground">Receive notifications about mCRPC pipeline updates</p>
            </div>
            <Switch id="email-pipeline" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-patent">mCRPC Patent Alerts</Label>
              <p className="text-xs text-muted-foreground">
                Receive notifications about mCRPC patent filings and expirations
              </p>
            </div>
            <Switch id="email-patent" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-news">mCRPC News Alerts</Label>
              <p className="text-xs text-muted-foreground">Receive notifications about mCRPC industry news</p>
            </div>
            <Switch id="email-news" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-primary-blue">In-App Notifications</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-competitor">Competitor Updates</Label>
              <p className="text-xs text-muted-foreground">Show notifications about competitor activities</p>
            </div>
            <Switch id="app-competitor" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-pipeline">Pipeline Changes</Label>
              <p className="text-xs text-muted-foreground">Show notifications about pipeline updates</p>
            </div>
            <Switch id="app-pipeline" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-patent">Patent Alerts</Label>
              <p className="text-xs text-muted-foreground">Show notifications about patent filings and expirations</p>
            </div>
            <Switch id="app-patent" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-news">News Alerts</Label>
              <p className="text-xs text-muted-foreground">Show notifications about industry news</p>
            </div>
            <Switch id="app-news" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

