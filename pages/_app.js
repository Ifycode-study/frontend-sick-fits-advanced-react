import Page from '../components/Page';

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