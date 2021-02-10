import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const now = new Date().toISOString()
  console.log({ now })
  res.status(200).json({ now })
}
