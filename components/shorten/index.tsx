import React, { useCallback, useState } from 'react'
import ShortenItem from './ShortenItem'
import clsx from 'clsx'
import { validURL } from '@/utils/validUrl'
import { useShorten } from '@/hooks/index'

export function Shorten() {
  const [error, setError] = useState('')
  const [userInput, setUserInput] = useState('')
  const [isValid, setIsValid] = useState(false)
  const { fetchData, shortenedItem } = useShorten()

  const handleChange = useCallback((value: string) => {
    const res = validURL(value)
    setIsValid(res)
    res ? setError('') : setError('Please enter a valid URL')
    setUserInput(value)
  }, [])

  const handleFetchData = useCallback(async () => {
    if (!isValid) {
      setError('Please enter a valid url')
      return
    }
    fetchData(userInput)
  }, [fetchData, isValid, userInput])

  return (
    <section id="shorten" className="relative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <form
          id="link-form"
          className="relative -mt-20 flex w-full flex-col space-y-4 rounded-lg bg-violet-600 p-10 md:flex-row md:space-y-0 md:space-x-3 "
        >
          <input
            type="url"
            className="flex-1 rounded-lg border-2 p-3 placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            value={userInput}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            type="button"
            className="focus:outline-non rounded-lg bg-cyan-400 px-10 py-3 text-white hover:bg-cyan-200"
            onClick={() => {
              handleFetchData()
            }}
          >
            Shorten It!
          </button>
          <div
            id="err-msg"
            className={clsx(
              'absolute bottom-2 left-7 rounded-sm border-2 border-red-900 bg-white px-2 text-sm italic text-red-900',
              error ? '' : 'hidden'
            )}
          >
            {error}
          </div>
        </form>
        {shortenedItem && <ShortenItem {...shortenedItem} />}
      </div>
    </section>
  )
}
