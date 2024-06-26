import axios from "axios"
import { useEffect, useState } from "react"
import { get_account_service, login_account_service } from "../../../services/account-service"
import { router } from "@inertiajs/react"


export default function LoginPage() {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    get_account_service()
      .then(res => {
        if(res.role != 'admin'){
          router.visit('/cashier')
        }else{
          router.visit('/administrator/dashboard')
        }
      })
  }, []);
  async function loginSubmit(e) {
    e.preventDefault()
    try {
     await login_account_service(data)
     const result =  await get_account_service()
      setError('')
      if (result.role == 'admin') {
        router.visit('/administrator/dashboard')
      } else {
        router.visit('/cashier')
      }
      // 
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/images/logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="flex items-center justify-center text-red-500">
          {error}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setData({
                    ...data,
                    email: e.target.value
                  })}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-600 hover:text-red-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setData({
                    ...data,
                    password: e.target.value
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}
