import React from 'react'
import { Content } from '../components/layout/Content'
import {Header, header} from '../components/layout/Header'


function Home() {
  return (
      <>
   <Header/>
   <Content/>
   
   <button Click={() => app.auth().signOut()}>Sign out</button>
   
   </>
    )  }


export default Home;