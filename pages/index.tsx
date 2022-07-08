import React, { useState } from "react";

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
    const url = `${document.location.protocol}//${document.location.hostname}:${document.location.port}/play#${name}`;
    setMessage(
      <div style={{ fontSize: "2em" }}>
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
    <p style={{ marginTop: "20%", textAlign: "center" }}>
      <StartButton />
    </p>
  </div>
);

export default Stream;
