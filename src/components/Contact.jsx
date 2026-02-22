import { useState, useEffect } from 'react'

export default function Contact({ active }) {
  const [contactText, setContactText] = useState('')
  const contactString = 'Contact\u2197'

  useEffect(() => {
    if (active !== "contact") return

    if (contactText.length < contactString.length) {
      const timer = setTimeout(() => {
        setContactText(contactString.slice(0, contactText.length + 1))
      }, 25)
      return () => clearTimeout(timer)
    }
  }, [active, contactText])

  if (active !== "contact") return null

  return (
    <div className="absolute bottom-[var(--content-y)] right-[var(--content-x)] text-[var(--fg)] space-y-2 text-right">
      {contactText && (
        <a
          href="https://linktr.ee/infinituxs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via Linktree (opens in new tab)"
          className="block text-[clamp(0.7rem,1vw,0.95rem)] font-normal hover:opacity-50 transition-opacity z-20 glitch-text"
          data-text={contactText}
        >
          {contactText}
          {contactText.length < contactString.length && <span className="cursor-blink">|</span>}
        </a>
      )}
    </div>
  )
}

