import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import './css/globals.css'

export function generateStaticParams() {
  return [{locale: 'fa'}];
}
 
export default async function LocaleLayout({children, params: {locale}} : {children:React.ReactNode, params:{locale:string}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body dir='rtl'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}