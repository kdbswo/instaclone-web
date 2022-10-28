import styled from "styled-components";

const SFromError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px 1px 0px;
`;

function FormError({ message }) {
  return message === "" || !message ? null : <SFromError>{message}</SFromError>;
}

export default FormError;
