import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { ChakraProvider, Flex, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import '@/styles/main.css';

const meta = {
  title: 'Next.js Subscription Starter',
  description: 'Brought to you by Vercel, Stripe, and Supabase.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://subscription-starter.vercel.app',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black loading">
        <SupabaseProvider>
          <ChakraProvider>
            <Stack justifyContent="space-between" className="min-h-screen">
              <Flex direction="column">
                <Navbar />
                <Flex w="full" justifyContent={'center'}>
                  <Flex w="full" maxW="6xl">
                    {children}
                  </Flex>
                </Flex>
              </Flex>
              <Footer />
            </Stack>
          </ChakraProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
