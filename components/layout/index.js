import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import PageNavbar from '../shared/navbar'

const DContainer = styled.div`
overflow: hidden;
margin: 1rem;
padding: 1rem;
display: flex;
border-radius: 0.1rem;
flex-flow: row wrap;
justify-content: center;
align-items: center;
align-content: center


@media all and (max-width: 800px) {
  overflow:hidden;
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
  height: 60rem;
  display: flex;
  border-radius: 0.8rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center
}

@media all and (max-width: 500px) {
  overflow:hidden;
  overflow: hidden;
  margin: 0.4rem;
  padding: 0.4rem;
  height: 40rem;
  display: flex;
  border-radius: 0.8rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center
}

`

const DCard = styled.div`
border-radius:0.2rem;
flex: 1 1 100%;
align-self: center;

@media all and (max-width: 800px){
  border-radius:0.2rem;
  flex: 1 1 auto;
  align-self: center;
}

@media all and (max-width: 500px){
  border-radius:0.2rem;
  flex: 1 1 auto;
  align-self: center;
}
`


const Layout = (props) => {
    const id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const numoftask = localStorage.getItem('num')


    const me = {
        id,
        name,
        numoftask
    }



    return (
        <>
            <PageNavbar />
            <Container maxWidth="md">
                <DContainer>
                    <DCard>
                        {props.children}
                    </DCard>
                </DContainer>
            </Container>
        </>
    )

}

export default Layout