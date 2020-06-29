import React, { useState, useEffect } from "react";

const APIUrl = "https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1";

const Reddit = () => {
    const [joke, setJoke] = useState({})

    const getJoke = () => {
        fetch(APIUrl)
            .then((response) => response.json())
            .then((json) => setJoke(json.data.children[0].data))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        getJoke();
    }, []);

    return joke ? ( <div className="reddit" >
        <h3><p>{joke.title}</p></h3>
        <h4><p>{joke.selftext}</p></h4>
    </div>
    ) : (
      <></>
    );
}

export default Reddit;
