const plans = [
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 1},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 2},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 3},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 4},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 5},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 6},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 7},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 8},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 9},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 10},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 11},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 12},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 13},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 14},
  { Amount: '100.00', Name: 'Gold', EmailAddress: 'fake.name@example.com', Email: 'No' , Id: 15},
]

const pageSize = 10

export default async (req, res) => {
  if (req.body) {
    const data = req.body
    const offset = pageSize * (data.page - 1)

    const responseObject = {
      plans: plans.slice(offset, offset + pageSize),
      total: 15
    }


    res.status(200).json(responseObject)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}