"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import RetroLoading from "./RetroLoading"

export default function     LoadingWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {children}
      {isLoading && (
        <div>
          <RetroLoading />
        </div>
      )}
    </>
  )
}