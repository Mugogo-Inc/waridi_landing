import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://waridiwellnessspa.com'),
  title: 'Waridi Wellness Spa | Luxury Oceanfront Spa at Game Fish Lounge, Nungwi',
  description:
    'Discover Waridi Wellness Spa at Game Fish Lounge in Nungwi, Zanzibar. Opening December 2026 with stunning beach views, warm herbal oil massages, and free Nungwi transport. Claim 20% early bird discount.',
  keywords:
    'Waridi Wellness Spa, Spa at Game Fish Lounge, Nungwi Spa, Massage Zanzibar, Warm Herbal Oil Massage, Free Transport Nungwi Spa, Zanzibar Wellness',
  openGraph: {
    title: 'Waridi Wellness Spa | Opening December 2026 in Nungwi',
    description:
      'Experience beachside wellness with stunning views, warm herbal massages, and free Nungwi pickup. Claim 20% off today!',
    url: 'https://waridiwellnessspa.com',
    siteName: 'Waridi Wellness Spa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-beach.png',
        width: 1200,
        height: 630,
        alt: 'Waridi Wellness Spa beachfront at Nungwi, Zanzibar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waridi Wellness Spa | Nungwi, Zanzibar',
    description: 'Luxury beachfront spa opening December 2026. Claim 20% early bird offer.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': 'https://waridiwellnessspa.com/#spa',
      name: 'Waridi Wellness Spa',
      alternateName: 'Waridi Wellness Spa at Game Fish Lounge',
      url: 'https://waridiwellnessspa.com',
      description:
        'Luxury beachside wellness spa at Game Fish Lounge in Nungwi, Zanzibar. Featuring breathtaking ocean views, warm herbal oil massages, and complimentary Nungwi transport.',
      telephone: '+255776583434',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'At Game Fish Lounge, Beachfront',
        addressLocality: 'Nungwi',
        addressRegion: 'Zanzibar',
        addressCountry: 'TZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-5.7265',
        longitude: '39.2998',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '09:00',
        closes: '19:00',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'Nungwi, Zanzibar' },
      knowsAbout: [
        'Warm Herbal Oil Massage',
        'Oceanfront Spa Nungwi',
        'Free Nungwi Transport Spa',
        'Zanzibar Wellness Rituals',
      ],
      sameAs: [
        'https://www.instagram.com/waridiwellness.spa',
        'https://www.tiktok.com/@waridiwellness',
      ],
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': 'http://www.mnaranicinnamonspa.com/#spa',
      name: 'Mnarani Cinnamon Spa',
      url: 'http://www.mnaranicinnamonspa.com/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nungwi',
        addressRegion: 'Zanzibar',
        addressCountry: 'TZ',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Playfair Display + Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
