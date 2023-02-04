import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
type Props = {
  url: string
  shortenedLink: string
}

const ShortenItem = ({ url, shortenedLink }: Props) => {
  const notify = () =>
    toast('🦄 Copied to clipboard', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
        <p className="text-center font-bold text-veryDarkViolet md:text-left">
          {url}
        </p>
        <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div className="font-bold text-cyan-400">{shortenedLink}</div>
          <CopyToClipboard text={shortenedLink} onCopy={notify}>
            <button className="rounded-lg bg-cyan-400 p-2 px-8 text-white hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </CopyToClipboard>
        </div>{' '}
      </div>
    </>
  )
}

export default ShortenItem
