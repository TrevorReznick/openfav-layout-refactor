import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()

interface Props {
  children: ReactNode // Specifica il tipo di children
}

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
