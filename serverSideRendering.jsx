import React from 'https://esm.sh/react';
import { renderToString } from 'https://esm.sh/react-dom/server';
import {serve} from './dependencies.ts';

export default function App ({pathname}){

  return (
    <>
      {
        pathname === '/login' &&
        <h1>Login</h1>
      }
      {
        pathname === '/' &&
        <h1>home</h1>
      }
    </>
  )
}

serve(req => {
  const {url } = req;
  const {pathname} = new URL(url)
  const app = renderToString(<App pathname={pathname} />);

  return new Response(app, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  })
}, {port: 8000})