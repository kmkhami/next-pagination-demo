const pageSize = 10

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  if (req.body) {
    const data = req.body
    const offset = pageSize * (data.page - 1)

    const plans = await prisma.plans.findMany({
        skip: offset,
        take: pageSize
      })

    const total = await prisma.plans.count()

    const responseObject = {
      plans: plans,
      total: total
    }

    res.status(200).json(responseObject)
  } else {
    // Not Signed in
    res.status(401)
  }
  await prisma.$disconnect()
  res.end()
}
