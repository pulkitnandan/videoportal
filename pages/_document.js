import Document, { Head, Main, NextScript } from 'next/document';
import NavigationBar from '../components/NavigationBar'

export default class MyDocument extends Document {
      render (){
    return (
      <html>
        <Head>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        </Head>
        <body>
        <div  className="container">
          <Main />
          <NextScript />
        </div>
        </body>
      </html>
    )
      }
}