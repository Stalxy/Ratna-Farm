import { Headset } from 'lucide-react'

export default function ChatCS() {
  return (
    <a
      href="https://wa.me/6282129818323"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      <span className="rounded-xl bg-zodiac px-3 py-1.5 font-jakarta text-xs font-semibold text-white shadow-lg">
        Tanya CS Ratna Farm 👋
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pelorous text-white shadow-lg">
        <Headset size={22} />
      </span>
    </a>
  )
}