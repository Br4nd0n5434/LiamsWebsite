import React from 'react'
import { PhoneIcon, PlayCircleIcon, RectangleGroupIcon, MapPinIcon, ClipboardDocumentListIcon } from '@heroicons/react/20/solid'

const callsToAction = [
    { name: 'Find Us', href: '#', icon: MapPinIcon },
    { name: 'Contact Us', href: '#', icon: PhoneIcon },
    { name: 'Get a Quote', href: '#', icon: ClipboardDocumentListIcon },
  ]

const CTA = () => {
  return (
    <div className="bg-gray-50 cta">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                {callsToAction.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CTA