import Page from '../components/Page';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
//import 'nprogress/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Component refers to the function component in index.js, sell.js etc.

function MyApp({ Component, pageProps, apollo }) {
    //console.log(Component);
    //console.log(pageProps);
    //console.log(apollo);
    return (
        <ApolloProvider client={apollo}>
            <Page cool='Test prop: from _app.js'>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    );
}

//Tell appollo to fetch queries in all children Components
MyApp.getInitialProps = async function({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);