import { useState, useEffect } from 'react'
import axios from 'axios'  
import CreatePlanModal from './CreatePlanModal.js'
import Loading from '../utility/LoadingAnimation'

export default function PaginatedTable() {
  const [plans, setPlans] = useState([])
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(0)
  const [loading, setLoading] = useState(false)
  const [modalCount, setModalCount] = useState(0)

  function plansRequest() {
    setLoading(true)
    setModalCount(0)
    axios.post('/api/plans/getall', {
      page: page
    }).then(resp => {
      setTimeout(() => {
        setPlans(resp.data.plans)
        setItems(resp.data.total)
        setLoading(false)
      }, 1000)
    })
  }
  
  useEffect(() => {
    plansRequest()
  }, [page]);

  if(!plans) {
    plansRequest()
  }

  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CreatePlanModal modalCount={modalCount} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Plans</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the plans in your account including their name, title, email and role.
          </p>
          <div className="min-w-full mt-2 justify-end content-end items-end place-content-end place-items-end grid grid-cols-1">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900"
              onClick={() => setModalCount(modalCount + 1)}
            >
              Create Plan
            </button>
          </div>
        </div>
      </div>
      <div className="-mx-4 mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Amount
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Update
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                ID
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {'$' + plan.amount}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {plan.name}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {plan.email_reports ? 'Yes' : 'No'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {plan.updated_at}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {plan.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{10*(page-1)+1}</span> to <span className="font-medium">{10*page > items ? items : 10*page}</span> of{' '}
              <span className="font-medium">{items}</span> results
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            <button
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => {
                  if(page > 1) {
                    setPage(page - 1)
                  }
                }
              }
            >
              Previous
            </button>
            <button
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => {
                  if(10*page < items) {
                    setPage(page + 1)
                  }
                }
              }
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
  