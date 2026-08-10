import { cookies } from "next/headers"
import { createHash } from "crypto"

const COOKIE_NAME = "ps_admin_session"

function getExpectedToken(): string | null {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return null
  // Derive an opaque token from the password so the raw password is never stored in the cookie.
  return createHash("sha256").update(`ps-admin::${password}`).digest("hex")
}

/** Returns true if the current request carries a valid admin session cookie. */
export async function isAdmin(): Promise<boolean> {
  const expected = getExpectedToken()
  if (!expected) return false
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  return token === expected
}

/** Verifies a submitted password and, if valid, sets the admin session cookie. */
export async function signInAdmin(password: string): Promise<boolean> {
  const expectedPassword = process.env.ADMIN_PASSWORD
  const expectedToken = getExpectedToken()
  if (!expectedPassword || !expectedToken) return false
  if (password !== expectedPassword) return false

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, expectedToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return true
}

/** Clears the admin session cookie. */
export async function signOutAdmin(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/** True when the deployment has an ADMIN_PASSWORD configured. */
export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD)
}
