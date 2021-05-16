import React, { useState, useEffect } from "react";
import defaultConnectionOptions from "./connection.options";

//const JitsiMeetJS = window.JitsiMeetJS;

//console.log("JitsiMeetJS", JitsiMeetJS);

//JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.INFO);

const defaultInitOptions = {
  disableAudioLevels: true,
  width: 700,
  height: 700
};

export const streamToConference = ({ connection, name }) => {
  const conference = connection.initJitsiConference(name, {
    startAudioMuted: true,
    startVideoMuted: true
  });
  return new Promise(async (resolve) => {
    const localTracks = await JitsiMeetJS.createLocalTracks({
      devices: ["desktop"]
    });
    conference.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, () => {
      console.log("CONFERENCE_JOINED");
      conference.addTrack(localTracks[0]);
      resolve(conference);
    });
    conference.join();
  });
};

const loadJitsi = ({ initOptions, connectionOptions }) => {
  console.log("init", initOptions);
  JitsiMeetJS.init({
    ...initOptions,
    parentNode: document.querySelector("#meet")
  });
  return new Promise((resolve, reject) => {
    const connection = new JitsiMeetJS.JitsiConnection(
      null,
      null,
      connectionOptions
    );
    const onConnectionSuccess = (...args) => {
      console.log("onConnectionSuccess", args);
      resolve(connection);
    };
    const onConnectionFailed = (...args) => {
      console.log("onConnectionFailed", args);
      reject(args);
    };
    connection.addEventListener(
      JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
      onConnectionSuccess
    );
    connection.addEventListener(
      JitsiMeetJS.events.connection.CONNECTION_FAILED,
      onConnectionFailed
    );
    console.log("connect");
    connection.connect();
  });
};

export const joinConference = ({connection, name}) => {
  const conference = connection.initJitsiConference(name, {
    startAudioMuted: true,
    startVideoMuted: true,
  });
  return new Promise(async (resolve) => {
    const trackAddedHandler = (track) => {
      console.log("trackAddedHandler", track);
      const target = document.querySelector("#largeVideo");
      //@ts-expect-error
      target.style.display="block";
      track.attach(target);
    };
    const trackRemovedHandler = (...args) =>
      console.log("trackRemovedHandler", args);
    conference.on(JitsiMeetJS.events.conference.TRACK_ADDED, trackAddedHandler);
    conference.on(
      JitsiMeetJS.events.conference.TRACK_REMOVED,
      trackRemovedHandler
    );
    conference.on(JitsiMeetJS.events.conference.USER_LEFT, (...args) => {
      console.log("USER_LEFT", args);
    });
    // register event handler for successful joining of the conference
    conference.on(
      JitsiMeetJS.events.conference.CONFERENCE_JOINED,
      (...args) => {
        console.log("CONFERENCE_JOINED", args);
        console.log("conference", conference);
        // conference.addTrack(localTracks[0]);
        resolve({ conference });
      }
    );
    // join the conference
    conference.join();
  });
};

type UseJitstiArgs = {
  initOptions?: Record<string, any>
  connectionOptions?: Record<string, any>
}

export const useJitsi = ({ initOptions=defaultInitOptions, connectionOptions=defaultConnectionOptions }: UseJitstiArgs={}) => {
  const [conference, setConference] = useState(null);
  const [connection, setConnection] = useState(null);

  const startStreamToConference = async (name) => {
    console.log("startStreamToConference", name);
    if (connection) {
      const conference = await streamToConference({ connection, name });
      setConference(conference);
      return conference;
    }
  };

  const onUserLeft = (...args) => console.log("onUserLeft", args);

  useEffect(() => {
    const start = async () => {
      console.log("load jitsi");
      setConference(null);
      const connection = await loadJitsi({ initOptions, connectionOptions });
      console.log("connection", connection);
      setConnection(connection);
      // @ts-expect-error
      connection.addEventListener(
        JitsiMeetJS.events.connection.USER_LEFT,
        onUserLeft
      );
    };

    start();
  }, [initOptions, connectionOptions]);

  return [{ connection, conference, startStreamToConference }];
};
