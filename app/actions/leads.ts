"use server"

import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { desc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { isAdmin } from "@/lib/admin-auth"
import { sendLeadNotification } from "@/lib/email"

type SubmitResult = { ok: true } | { ok: false; error: string }

export async function submitLead(formData: {
  name: string
  email: string
  phone: string
  message: string
}): Promise<SubmitResult> {
  const name = formData.name?.trim()
  const email = formData.email?.trim()
  const phone = formData.phone?.trim()
  const message = formData.message?.trim()

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  try {
    const safeName = name.slice(0, 200)
    const safeEmail = email.slice(0, 200)
    const safePhone = phone ? phone.slice(0, 50) : null
    const safeMessage = message.slice(0, 5000)

    await db.insert(leads).values({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      message: safeMessage,
    })

    // Notify the business admin. Email failures must not break submission.
    await sendLeadNotification({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      message: safeMessage,
    })

    return { ok: true }
  } catch (error) {
    console.log("[v0] submitLead error:", error)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}

// --- Admin-only reads/writes below ---

export async function getLeads() {
  if (!(await isAdmin())) throw new Error("Unauthorized")
  return db.select().from(leads).orderBy(desc(leads.createdAt))
}

export async function updateLeadStatus(id: number, status: string) {
  if (!(await isAdmin())) throw new Error("Unauthorized")
  const allowed = ["new", "contacted", "closed"]
  if (!allowed.includes(status)) throw new Error("Invalid status")
  await db.update(leads).set({ status }).where(eq(leads.id, id))
  revalidatePath("/admin")
}

export async function deleteLead(id: number) {
  if (!(await isAdmin())) throw new Error("Unauthorized")
  await db.delete(leads).where(eq(leads.id, id))
  revalidatePath("/admin")
}
