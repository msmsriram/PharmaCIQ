"use client"

import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SettingsHeader() {
  const handleSaveChanges = () => {
    // In a real implementation, this would save all settings
    console.log("Saving mCRPC dashboard settings")
    // Show a success message
    alert("mCRPC dashboard settings saved successfully")
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center">
        <h1 className="text-xl font-semibold">mCRPC Dashboard Settings</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="h-8 bg-primary-amber hover:bg-primary-amber/90 text-white"
          onClick={handleSaveChanges}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </header>
  )
}

