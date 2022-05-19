import { getCssText } from '@/styles/stitches.config';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

const FONTS = `
  @font-face {
    font-family: 'Supreme';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Supreme-Regular.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Supreme';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Supreme-Italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Supreme';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/Supreme-Bold.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Supreme';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/Supreme-BoldItalic.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Junicode';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/junicode-italic-webfont.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'JunicodeCondensed';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/junicode-boldcondensed-webfont.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'JunicodeCondensed';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/junicode-bolditaliccondensed-webfont.woff2') format('woff2');
  }
`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href={`/fonts/Supreme-Regular.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`/fonts/junicode-boldcondensed-webfont.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`/fonts/junicode-bolditaliccondensed-webfont.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: FONTS,
            }}
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
