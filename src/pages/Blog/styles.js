import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  #contentDiv {
    display: flex;
    margin: 23px auto 0 100px;
    /* border: 1px solid #d33; */
    width: 100%;
    /* height: 900px; */
  }

  #postsContainer {
    display: flex;
    flex-direction: column;
    max-width: 909px;
    width: 100%;
    max-height: 842px;
    /* border: 1px solid #d33; */
    overflow-y: scroll;
  }

  #inputCategoriesContainer {
    display: flex;
    margin-left: 30px;
    max-width: 303px;
    width: 100%;
    /* height: 100%; */
    /* border: 1px solid #d33; */
  }
`;
