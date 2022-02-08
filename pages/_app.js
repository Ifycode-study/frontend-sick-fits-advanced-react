import Page from '../components/Page';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
//import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Component refers to the function component in index.js, sell.js etc.

export default function MyApp({ Component, pageProps }) {
    //console.log(Component);
    //console.log(pageProps);
    return (
        <Page cool='Test prop: from _app.js'>
            <Component {...pageProps} />
        </Page>
    );
}