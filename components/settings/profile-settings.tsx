"use client"

import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ProfileSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Manage your personal information and preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-lightblue/20">
            <User className="h-8 w-8 text-primary-blue" />
          </div>
          <div>
            <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
              Change Avatar
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue="Sarah Johnson" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue="sarah.johnson@pharma.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select defaultValue="ci-lead">
            <SelectTrigger id="role" className="border-secondary-grayblue">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ci-lead">CI Lead</SelectItem>
              <SelectItem value="market-analyst">Market Analyst</SelectItem>
              <SelectItem value="product-manager">Product Manager</SelectItem>
              <SelectItem value="executive">Executive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select defaultValue="market-intelligence">
            <SelectTrigger id="department" className="border-secondary-grayblue">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market-intelligence">Market Intelligence</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="r-and-d">R&D</SelectItem>
              <SelectItem value="medical-affairs">Medical Affairs</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            defaultValue="CI Lead specializing in oncology markets with 8+ years of experience in competitive intelligence for pharmaceutical companies."
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  )
}

