import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 540px;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const Lines = styled.div`
  margin-bottom: 10px;
`;

export const DropLine = styled.div`
  width: 60%;
  height: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  padding: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  word-break: break-all;
  line-height: 1.6;
  margin-bottom: 50px;

  &:after {
    content: '';
    height: .7px;
    position: absolute;
    background: black;
    width: 100%;
    top: 73px;
    left: 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60%;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  width: 40%;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: white;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;

const myImage = 'http://simpleicon.com/wp-content/uploads/user1.png';

export const Image = styled.img`
  max-width: 30%;
  src: http://simpleicon.com/wp-content/uploads/user1.png;
`;

Image.defaultProps = {
  src: myImage,
};

export const WordsToTranslate = styled.div`
  width: 37%;
  height: 40px;
  font-size: 12px;
  font-weight: 300;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const WordToTranslate = styled.div`
  margin-right: 7px;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Item = styled.div`
  font-weight: 300;
  font-size: 12px;
  margin-right: 6px;
  margin-bottom: 4px;
  background-color: #F0F0F0;
  padding: 3px 8px;
  border-radius: 3px;
`;

export const Tittle = styled.h1`
  font-weight: 300;
`;

export const ResultText = styled.h2`
  font-weight: 300;
`;