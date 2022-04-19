import { useState } from "react";
import { Button } from "./components/Button";
// import Button from "@mui/material/Button";
import { Flex } from "./components/Flex";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <h1>theme is {theme}</h1>
      <Button theme={theme} onClick={()=>{
        setTheme(theme==="light" ? "dark" : "light")
      }}>Change Theme</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <Button color="primary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
     
      <Flex>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Flex>
    </div>
  );
}

export default App;
