import Styled from 'styled-components'

type Props = {
  shouldChangeColor?: boolean
}

const StyledBaru = Styled.div<Props>`
  margin-top: 1rem;
  background-color: ${props => props.shouldChangeColor ? 'blue' : 'red'};
  
`

export {StyledBaru}