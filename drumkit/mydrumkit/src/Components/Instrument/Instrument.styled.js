import styled from 'styled-components';


export const StyledButton = styled.div`
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    width: 8rem;
    display: flex;   
    justify-content: center;
  
`;