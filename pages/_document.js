import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="description" content="Portafolio de Juan F. Larrotta Bernal" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}