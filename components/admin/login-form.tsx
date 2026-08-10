"use client"

import { useActionState } from "react"
import { loginAdmin } from "@/app/actions/admin"

const initialState: { error?: string } = {}

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState)

  return (
    <form action={formAction} className="bg-card rounded-lg shadow-sm p-6 md:p-8">
      <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Enter admin password"
        className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
        required
        autoFocus
      />

      {state?.error && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full px-10 py-3 font-bold text-sm tracking-wider text-primary-foreground bg-primary rounded-xl transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "SIGNING IN..." : "SIGN IN"}
      </button>
    </form>
  )
}
