// src/app/dashboard/settings/page.tsx

import { SettingsForm } from "@/components/_dashbaord/settings/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">AI Assistant Settings</h1>
      <SettingsForm />
    </div>
  )
}