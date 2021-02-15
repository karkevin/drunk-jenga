import './App.css';
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import {useState, setState} from 'react';

const ruleList = [
  "question queen",
  "question queen",
  "question queen",
  "question queen",
  "everyone drink",
  "Everyone except you finish their drink",
  "pick someone to play with their opposite hand for the rest of the game",
  "finish your drink",
  "take a shot for each person playing the game",
  "Emily drinks",
  "take 2 shots and give 2 shots",
  "put piece back and pull a different one",
  "take another block with eyes closed",
  "next player takes 2 blocks",
  "take a shot",
  "take a shot",
  "give a shot",
  "give a shot",
  "drink every time you swear",
  "twerk for 30 seconds or take 3 shots",
  "rock, paper scissors with someone else. loser drinks",
  "would you rather? losing team takes 1 shot",
  "remove 2 articles of clothing or take 3 shots",
  "remove 2 articles of clothing or take 3 shots",
  "skip the next turn",
  "skip the next turn",
  "take another turn",
  "neighbours drink",
  "body shot",
  "body shot",
  "place a bet to who will knock over the tower. if you're wrong, finish drink when the time comes",
  "mystery shot - close your eyes and take a shot poured for you",
  "mystery shot - close your eyes and take a shot poured for you",
  "call your mom or take 3 shots",
  "drive",
  "drive",
  "categories",
  "on 3 - point to the person who is least drunk. that person takes 4 shots",
  "dare or drink",
  "dare or drink",
  "take 2 shots",
  "take 2 shots",
  "next player takes 2 blocks",
  "mate",
  "mate",
  "finish your drink",
  "drink for every letter in your name",
  "anyone over 21 drinks",
  ]

function App() {

  const [rules, setRules] = useState(ruleList);
  const [value, setValue] = useState("");
  const [rule, setRule] = useState("");

  const [show, setShow] = useState(false);

  const shuffleRules = (e) => {
    e.preventDefault();
    var newRules = shuffleArray(ruleList);
    setRules(newRules);
  }
  
  const formChange = (e) => {
    setValue(e.target.value);
  }

  const setIndex = (e) => {
    e.preventDefault();
    var ind = parseInt(value);
    if (ind < 1 || ind > 48 || Number.isNaN(ind)) {
      setRule("Invalid number");
      return;
    }

    setRule(rules[ind - 1]);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      <div className="flex" style={{paddingTop: "20px"}}>
        <h1 style={{display: "inline", marginRight: "10px"}}>Drunk</h1>
        <img src={process.env.PUBLIC_URL + '/jenga.png'} width="100px" /> 
      </div>
      <div className="flex" style={{marginTop: "150px"}}>
        <h2 style={{maxWidth: "700px"}}>{rule}</h2>
      </div>
      <div className="flex" style={{marginTop: "150px"}}>
        <InputGroup className="mb-3" style={{maxWidth: "500px"}}>
          <FormControl
            placeholder="Number between 1 - 48"
            onChange={formChange}
          />
        </InputGroup>
        <div style={{margin: "0 0 16px 5px"}}>
          <Button variant="primary" onClick={setIndex}>Go!</Button>
        </div>
      </div>
      <div style={{marginTop: "50px"}}>
        <Button variant="primary" onClick={shuffleRules} style={{marginRight: "10px"}}>Shuffle</Button>
        <Button variant="secondary" onClick={() => {setShow(true)}}>Show Rules</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>{rules.map((rule, i) => {
          return <p key={i}>{i + 1}. {rule} </p>; 
        })}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array; 
}

export default App;
