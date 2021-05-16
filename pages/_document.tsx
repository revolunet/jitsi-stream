import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://meet.jit.si/libs/lib-jitsi-meet.min.js"></script>
          <script>JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.INFO);</script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="meet"></div>
          <div id="largeVideoWrapper">
            <video autoPlay={true} id="largeVideo" playsInline={true}></video>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
