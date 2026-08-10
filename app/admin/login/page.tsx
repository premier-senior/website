import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/admin-auth"
import LoginForm from "@/components/admin/login-form"

export const metadata = {
  title: "Admin Login | Premier Senior Solutions",
}

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin")

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2 text-center text-balance">
          Admin Access
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Enter the password to view contact form leads.
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
