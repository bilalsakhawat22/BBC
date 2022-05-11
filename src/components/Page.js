import React, { useContext } from 'react'
import styled from 'styled-components'
// import { useQueryParam, NumberParam, StringParam } from 'use-query-params';
// import Footer from '../Footer/Footer'
// import TopBar from '../TopBar/'
// import NavBar from '../NavBar'
// import { AccountContext } from '../../contexts/Account/AccountContext';


const Page= ({ 
  className = 'main', 
  children 
}) => {
//   const { accountUser } = useContext(AccountContext)
  return (
    <>
    <Main className={className}>
            {/* <NavBar/> */}
            <Background className='background' />

            {/* <Content className='styledMain'> */}
                { children }
            {/* { accountUser ? (
                <>
                {children}
                </>
            ) : (
                <>
                <div>Connect your Wallet</div> 
                </>
            )}      */}
            {/* </Content> */}
            {/* <Footer /> */}
        </Main>
    </>
  )
}
export default Page



export const Center = ({ 
    className = 'center', 
    children 
}) => {
    return (
        <CenterColumn className={className}>
            <CenterInner>
                {children}
            </CenterInner>
        </CenterColumn>
    )
}


const Background = styled.div `
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    //background-color: white;
    z-index: -1;
    background: #000428;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, black, black);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, black, black); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    /* Created with https://www.css-gradient.com */
    //background-color: #000000;
    //background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    //background: #422c7f;
    //background: -webkit-radial-gradient(center, #228ba5, #422c7f);
    //background: -moz-radial-gradient(center, #228ba5, #422c7f);
    //background: radial-gradient(ellipse at center, #228ba5, #422c7f);
`

const Main = styled.div`
  position: relative;
//   overflow: hidden;
  //padding-top: 20px;
  color: white;
  padding-bottom: 120px;
`

const Content = styled.div`
    z-index: 5;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0}px);  
`


const CenterColumn = styled.div `
    max-width: 800px;
    width: 100%;
    margin:auto;
`

const CenterInner = styled.div `
    margin: 20px;
`