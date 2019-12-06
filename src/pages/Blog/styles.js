import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;

  #contentDiv {
    display: flex;
    /* adjust margins */
    margin: 23px 88px 10px 100px;
    /* border: 1px solid #dd3; */
    max-width: 100%;
    overflow-y: hidden;
  }

  #postsContainer {
    display: flex;
    flex-direction: column;
    max-width: 909px;
    width: 909px;
    max-height: 842px;
    margin-right: 32px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* ::-webkit-scrollbar-thumb {
      background: #ff0000;
    } */
  }

  #blogCard {
    display: flex;
    max-width: 904px;
    width: 100%;
    height: 284px;
    margin-top: 26px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background: #ffffff;
    border: 1px solid #50a1ff;
    box-sizing: border-box;
    border-radius: 5px;
  }

  #blogCardPhoto {
    display: flex;
    max-width: 426px;
    width: 100%;
    max-height: 282px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  #blogCardContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 398px;
    margin-left: 17px;
    margin-top: 25px;
  }

  #blogTitle {
    display: flex;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 42px;

    color: #140f26;
    opacity: 0.85;
  }

  #blogInfo {
    display: flex;
    margin-top: 10px;

    div {
      display: flex;
      align-items: center;
    }

    div + div {
      margin-left: 40px;
    }

    span {
      margin-left: 5px;

      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #006edb;
      opacity: 0.85;
    }
  }

  #blogText {
    margin-top: 22px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: #140f26;
    opacity: 0.8;
  }

  #blogSeparator {
    width: 413px;
    border: 1px solid #50a1ff;
    margin: 12px 0;
  }

  #blogStatus {
    display: flex;
    align-items: center;

    #blogStatusSeparator {
      width: 8px;
      height: 8px;
      background: #3a85d7;
      border-radius: 5px;
      margin: 0 6px;
    }

    span {
      font-style: italic;
      font-weight: normal;
      font-size: 15px;
      line-height: 24px;

      color: #006edb;
      opacity: 0.85;
    }
  }

  #inputCategoriesContainer {
    display: flex;
    flex-direction: column;

    max-width: 313px;
    width: 100%;
  }

  #inputSearch {
    display: flex;
    align-items: center;
    height: 60px;
    background: #ffffff;
    border: 1px solid #50a1ff;
    box-sizing: border-box;
    border-radius: 4px;

    input {
      width: 100%;
      border: none;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;

      color: #c2cfe0;

      ::placeholder {
        color: #c2cfe0;
      }
    }
  }

  #inputSearchIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin-left: 9px;
    margin-right: 13.79px;

    svg {
      font-size: 24px;
      color: #50a1ff;
    }
  }

  #categoriesDiv {
    display: flex;
    margin-top: 41px;
    max-width: 313px;
    width: 100%;
    min-height: 289px;

    background: #fff;
    border: 1px solid #6592fe;
    box-sizing: border-box;
    border-radius: 4px;
  }

  #categories {
    margin-top: 25px;
    margin-left: 64px;
    margin-bottom: 41px;

    ul {
      list-style: none;

      li:first-child {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;

        color: #373347;
      }

      li {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;

        color: #140f26;
      }

      #dots {
        width: 10px;
        height: 10px;
        background: #2684e0;
        border-radius: 5px;
        margin-left: -28px;
        margin-right: 18px;
      }
    }
  }
`;
