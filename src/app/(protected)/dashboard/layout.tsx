import { cookies } from "next/headers"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    // redirect("/login") など
  }

  return <>{children}</>
}
