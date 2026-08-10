"use client"

import { useState, useTransition } from "react"
import type { Lead } from "@/lib/db/schema"
import { updateLeadStatus, deleteLead } from "@/app/actions/leads"

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
]

function statusClasses(status: string) {
  switch (status) {
    case "contacted":
      return "bg-primary/10 text-primary border-primary/30"
    case "closed":
      return "bg-muted text-muted-foreground border-border"
    default:
      return "bg-secondary text-secondary-foreground border-border"
  }
}

function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [filter, setFilter] = useState<string>("all")
  const [isPending, startTransition] = useTransition()

  const visible = filter === "all" ? leads : leads.filter((l) => l.status === filter)

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    closed: leads.filter((l) => l.status === "closed").length,
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: "all", label: "All" },
          { key: "new", label: "New" },
          { key: "contacted", label: "Contacted" },
          { key: "closed", label: "Closed" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === tab.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:border-primary/50"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 opacity-70">{counts[tab.key as keyof typeof counts]}</span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-12 text-center text-muted-foreground">
          No leads to show.
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map((lead) => (
            <article
              key={lead.id}
              className="rounded-lg border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-bold text-foreground">{lead.name}</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <a href={`mailto:${lead.email}`} className="hover:text-primary hover:underline">
                      {lead.email}
                    </a>
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="hover:text-primary hover:underline">
                        {lead.phone}
                      </a>
                    )}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusClasses(
                    lead.status,
                  )}`}
                >
                  {lead.status}
                </span>
              </div>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                {lead.message}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">{formatDate(lead.createdAt)}</span>
                <div className="flex items-center gap-2">
                  <label htmlFor={`status-${lead.id}`} className="sr-only">
                    Update status for {lead.name}
                  </label>
                  <select
                    id={`status-${lead.id}`}
                    value={lead.status}
                    disabled={isPending}
                    onChange={(e) => {
                      const status = e.target.value
                      startTransition(() => updateLeadStatus(lead.id, status))
                    }}
                    className="rounded border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary"
                  >
                    {STATUS_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      if (confirm(`Delete lead from ${lead.name}? This cannot be undone.`)) {
                        startTransition(() => deleteLead(lead.id))
                      }
                    }}
                    disabled={isPending}
                    className="rounded border border-border px-3 py-1.5 text-sm text-destructive transition-colors hover:border-destructive/50 hover:bg-destructive/5 disabled:opacity-60"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
