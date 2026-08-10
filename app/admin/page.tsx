import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/admin-auth"
import { getLeads } from "@/app/actions/leads"
import { logoutAdmin } from "@/app/actions/admin"
import LeadsTable from "@/components/admin/leads-table"

export const metadata = {
  title: "Leads | Premier Senior Solutions Admin",
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login")

  const leads = await getLeads()

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-5">
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Contact Leads</h1>
            <p className="text-sm text-muted-foreground">
              {leads.length} {leads.length === 1 ? "lead" : "leads"} submitted through the contact form.
            </p>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="rounded border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <LeadsTable leads={leads} />
      </div>
    </main>
  )
}
