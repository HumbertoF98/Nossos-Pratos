import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    padding-top: 20px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
  }

  img {
    align-self: flex-start;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
