import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;
`;

// export const TextBlock = styled.p`
//   color: gray;
//   font-size: 0.75rem;
//   font-weight: bold;
// `;

export const TextBlock = styled.p(({ isPrimary }) => ({
  color: 'gray',
  fontSize: '0.75rem',
  fontWeight: isPrimary ? 'bold' : 'normal',
}));

export const CurvyText = styled(TextBlock)`
  font-style: italic;

  color: ${({ isPrimary }) => (isPrimary ? 'red' : 'inherit')};
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;
  background-color: gray;
  color: white;
  font-weight: bold;
`;
