"use server"

import { redirect } from "next/navigation"
import { signInAdmin, signOutAdmin, isAdminConfigured } from "@/lib/admin-auth"

export async function loginAdmin(_prev: unknown, formData: FormData): Promise<{ error?: string }> {
  if (!isAdminConfigured()) {
    return { error: "Admin password is not configured. Set the ADMIN_PASSWORD environment variable." }
  }
  const password = String(formData.get("password") ?? "")
  const ok = await signInAdmin(password)
  if (!ok) {
    return { error: "Incorrect password." }
  }
  redirect("/admin")
}

export async function logoutAdmin() {
  await signOutAdmin()
  redirect("/admin/login")
}
