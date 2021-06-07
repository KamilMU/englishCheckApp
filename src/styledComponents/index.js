import styled from 'styled-components';

export const Container =  styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 740px;

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

export const Line = styled.div`
  width: 350px;
  height: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
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
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
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