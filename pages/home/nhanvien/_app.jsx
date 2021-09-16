import React from 'react';
import App, { Container } from 'next/app';
import sentry from '/utils/sentry'; // Đâu là file custom mình tạo ra
import Staff from '.';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
      sentry.captureException(error, { extra: errorInfo })
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <Staff>
            <Component {...pageProps} />

        </Staff>
    )
  }
}

export default MyApp;