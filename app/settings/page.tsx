import type { Metadata } from "next"
import SettingsHeader from "@/components/settings/settings-header"
import ProfileSettings from "@/components/settings/profile-settings"
import NotificationSettings from "@/components/settings/notification-settings"
import DisplaySettings from "@/components/settings/display-settings"
import ApiSettings from "@/components/settings/api-settings"

export const metadata: Metadata = {
  title: "Settings | Pharma CI Dashboard",
  description: "Configure your Pharma CI Dashboard settings",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SettingsHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <ProfileSettings />
          <NotificationSettings />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <DisplaySettings />
          <ApiSettings />
        </div>
      </main>
    </div>
  )
}

