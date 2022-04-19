import { useEffect, useState } from "react";

export const Timer = ({ starts, ends }) => {
//   console.log(starts);
  const [counter, setCounter] = useState(starts);
  const [ending, setEnding] = useState(ends);
   
  useEffect(() => {
    setCounter(starts);
  }, [starts]);
  console.log("c",counter)
  useEffect(() => {
    setEnding(ends);
  }, [ends]);
  console.log("e",ending)
//   console.log("ending", ending);

//   console.log(useState(starts));
  //   const [ender, setEnder] = useState(ends);
  //   console.log(useState(props.starts));
  const [show, setShow] = useState(false);
  //   console.log(counter);
  //   console.log(ender);

  useEffect(() => {
    var interval = null;
    if (show) {
      interval=setInterval(() => {
        if (counter >= ending) {
          setCounter(ending);
          setShow(false);
        } else {
          setCounter(counter + 1);
        }
      }, 1000);
    }
      
    return () => {
        // console.log("cleanup",1)
      clearInterval(interval);
    };
  }, [show, counter, ending]);

  // console.log(props.start,props.end)
  return (
    <div>
      <div> Counter:{counter} </div>

      <button onClick={() => setShow(!show)}>start</button>
    </div>
  );
};
