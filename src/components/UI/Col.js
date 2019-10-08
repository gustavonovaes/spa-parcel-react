import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
  flex-basis: 100%;
  width: 100%;
  margin-top: 10px;
  
  @media (min-width: 800px) {
    flex: 1 0 40%;
    max-width: 50%;
    margin-top: 20px;

    + div {
      margin-left: 20px;
    }
  }
`;