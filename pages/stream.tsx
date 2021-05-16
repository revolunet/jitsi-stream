import React, { useState } from "react";
import jquery from "jquery";

import { useJitsi } from "../lib/jitsi";

const StartButton = () => {
  console.log("useJitsi", useJitsi);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState(null);
  const [{ connection, conference, startStreamToConference }] = useJitsi();
  const onClick = async () => {
    setReady(false);
    setMessage("loading...");
    const name = "test-sre";
    const newConference = await startStreamToConference(name);
    setReady(true);
    const url = `https://${document.location.hostname}/play#${name}`;
    setMessage(
      <div>
        Stream available at{" "}
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    );
  };
  return (
    <div>
      {!ready && (
        <button
          style={{
            fontSize: "2em",
          }}
          disabled={!connection}
          onClick={onClick}
        >
          Lancer une session
        </button>
      )}
      {message && <div>{message}</div>}
    </div>
  );
};

const Stream = () => (
  <div>
    <StartButton />
  </div>
);

export default Stream;
