import React from 'react';
import { Container, List, Lines, Image, Line, Button } from './styledComponents';
const styles = require('./App.css').default;

const App = () => {
  const [englishWords] = React.useState('She is eating an apple and they are eating bread');
  const [russianWords] = React.useState(['ест', 'Она', 'а', 'они', 'хлеб', 'едят', 'яблоко,']);

  return (
    <Container>
      <h1>Translate this sentence</h1>
      <div className={styles.main}>
        <Image src="http://simpleicon.com/wp-content/uploads/user1.png" alt="" />
        <div className={styles.wordsToTranslate}>{englishWords}</div>
      </div>

      <Lines>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Lines>

      <List>
        <li>Она</li>
        <li>ест</li>
        <li>а</li>
        <li>яблоко,</li>
        <li>они</li>
        <li>едят</li>
        <li>хлеб</li>
      </List>

      <Button>Check</Button>
    </Container>
  )
}

export default App
