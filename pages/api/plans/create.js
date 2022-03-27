import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.body) {
    const data = req.body
    data.amount = parseInt(data.amount, 10)
    data.day = '1'
    data.merchant_id = '12345'
    data.metadata = {}
    data.email_reports = data.email_reports === 'Yes'


    const plan = await prisma.plans.create({
      data: data
    })

    res.status(200).json(plan)
  } else {
    // Not Signed in
    res.status(401)
  }
  await prisma.$disconnect()
  res.end()
}