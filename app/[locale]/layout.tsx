import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import './css/globals.css'
import {unstable_setRequestLocale} from 'next-intl/server';

const locales = ['fa'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
 
export default async function LocaleLayout({children, params: {locale}} : {children:React.ReactNode, params:{locale:string}}) {
  let messages;
  messages = (await import(`../../messages/${locale}.json`)).default
  if (!locales.includes(locale as any)) notFound();
    unstable_setRequestLocale(locale);

 
  return (
    <html lang={locale}>
      <body dir='rtl'>
        <NextIntlClientProvider locale={locale}  messages={messages}>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}