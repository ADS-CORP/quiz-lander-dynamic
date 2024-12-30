import { NextApiRequest, NextApiResponse } from 'next'

const BACKEND_URL = 'https://quiz-widget-backend-685730230e63.herokuapp.com/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query
  const apiPath = Array.isArray(path) ? path.join('/') : path
  
  try {
    const response = await fetch(`${BACKEND_URL}/${apiPath}`, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    })

    const data = await response.json()
    res.status(response.status).json(data)
  } catch (error) {
    console.error('Proxy error:', error)
    res.status(500).json({ error: 'Failed to proxy request' })
  }
}
