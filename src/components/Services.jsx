import {
  VideoCameraIcon,
  HomeIcon,
  FireIcon,
  ArrowPathRoundedSquareIcon,
  SunIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Smart Homes',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HomeIcon,
  },
  {
    name: 'CCTV',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Electric Vehicle Charging',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: BoltIcon,
  },
  {
    name: 'LED Lighting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SunIcon,
  },
  {
    name: 'Fire Alarms',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: FireIcon,
  },
  {
    name: 'Re-Wires',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowPathRoundedSquareIcon,
  },
]

export default function Example() {
  return (
    <div className="relative bg-base-200 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-base-content/50">Our Services</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          How we help you
        </p>
        <p className="mx-auto mt-5 max-w-prose text-lg text-gray-500 ">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-base-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-logo-gradient p-3 shadow-lg">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
