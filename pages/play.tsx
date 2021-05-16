import { useEffect } from "react";
import { useJitsi, joinConference } from "../lib/jitsi";

const Invalid = () => <div>Invalid request</div>;

const isValidName = (name) => name && name.length > 3;

const Play = () => {
  const name =
    typeof document !== "undefined" && document.location.hash.slice(1);

  const [{ connection, startStreamToConference }] = useJitsi();

  useEffect(() => {
    if (connection) {
      console.log("join conference");
      joinConference({ connection, name });
    }
  }, [connection, name]);

  return <div />;
};

export default Play;
