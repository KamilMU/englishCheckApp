import styled from 'styled-components';

export const Container =  styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 740px;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const Lines =  styled.div`
  margin-bottom: 10px;
`;

export const DropLine = styled.div`
  width: 60%;
  height: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  padding: 4px;
  display: flex;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 20px;
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

export const Image =  styled.img`
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
  margin-right: 12px;
`;

export const Text = styled.h1`
  font-weight: 500;
`;

export const ResultText = styled.h2`
  font-weight: 300;
`;