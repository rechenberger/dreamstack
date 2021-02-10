import { useRouter } from 'next/dist/client/router'

export const useParams = () => {
  const router = useRouter()
  return router.query
}
