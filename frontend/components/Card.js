import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    color: ${pr => pr.$color};
    font-size: 3em;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1rem 0;

    
  }

`

export default function Card ({ title, text, imageURL, date }) {
    return (
      <StyledCard $color='#CD5C5C' className='card' >
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure 
            imageURL={imageURL}
            caption ={date}
            />
      </StyledCard>
    )
  }