import Head from 'next/head'

type Props = {
  title: String
}

const foo = "bla";

export default function Home({ title = "React Avançado" }: Props) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
         {title}
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
