import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import { MODAL_CONTAINER_ID, UVAVINO_BODY } from '~/config';
import i18nextConfig from '../../next-i18next.config';

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head />
      <body id={UVAVINO_BODY}>
        <div id={MODAL_CONTAINER_ID} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
