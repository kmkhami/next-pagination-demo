const pageSize = 10

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.body) {
    const data = req.body
    const offset = pageSize * (parseInt(data.page) - 1)

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
