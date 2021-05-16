export default {
  hosts: {
    domain: "beta.meet.jit.si",
    muc: "conference.beta.meet.jit.si",
    focus: "focus.beta.meet.jit.si"
  },
  disableSimulcast: false,
  resolution: 720,
  constraints: {
    video: {
      height: {
        ideal: 720,
        max: 720,
        min: 180
      },
      width: {
        ideal: 1280,
        max: 1280,
        min: 320
      }
    }
  },
  analytics: {},
  enableP2P: true,
  p2p: {
    enabled: true,
    preferredCodec: "VP9",
    disableH264: true,
    useStunTurn: true
  },
  useStunTurn: true,
  useTurnUdp: true,
  bosh: "https://beta.meet.jit.si/http-bind",
  websocket: "wss://beta.meet.jit.si/xmpp-websocket",
  websocketKeepAliveUrl: "https://beta.meet.jit.si/_unlock",
  clientNode: "http://jitsi.org/jitsimeet",
  desktopSharing: "ext",
  chromeExtensionId: "kglhbbefdnlheedjiejgomgmfplipfeb",
  desktopSharingSources: ["screen", "window"],
  enableCalendarIntegration: true,
  desktopSharingChromeExtId: "kglhbbefdnlheedjiejgomgmfplipfeb",
  desktopSharingChromeSources: ["screen", "window", "tab"],
  enableLipSync: false,
  enableSaveLogs: true,
  disableRtx: false,
  enableScreenshotCapture: false,
  channelLastN: 20,
  lastNLimits: {
    "5": 20,
    "30": 15,
    "50": 10,
    "70": 5,
    "90": 2
  },
  videoQuality: {
    preferredCodec: "VP9",
    maxBitratesVideo: {
      VP8: {
        low: 200000,
        standard: 500000,
        high: 1500000
      },
      VP9: {
        low: 100000,
        standard: 300000,
        high: 1200000
      }
    }
  },
  useNewBandwidthAllocationStrategy: true,
  startBitrate: "800",
  disableAudioLevels: false,
  stereo: false,
  forceJVB121Ratio: -1,
  enableTalkWhileMuted: true,
  enableNoAudioDetection: true,
  enableNoisyMicDetection: true,
  enableOpusRed: true,
  enableClosePage: true,
  disableLocalVideoFlip: false,
  hiddenDomain: "recorder.beta.meet.jit.si",
  longTasksStatsInterval: 10000,
  transcribingEnabled: true,
  liveStreamingEnabled: true,
  fileRecordingsEnabled: true,
  fileRecordingsServiceEnabled: false,
  fileRecordingsServiceSharingEnabled: false,
  requireDisplayName: false,
  enableWelcomePage: true,
  isBrand: false,
  callStatsID: "549114654",
  callStatsSecret: "teSaRC3EjkMe:OR5A7uDh06AhIg287rbyA5jyzDg=",
  callStatsCustomScriptUrl:
    "https://api.callstats.io/static/callstats-ws.min.js",
  dialInNumbersUrl: "https://web-cdn.jitsi.net/beta/phoneNumberList.json",
  dialInConfCodeUrl: "https://api.jitsi.net/conferenceMapper",
  dialOutCodesUrl: "https://api.jitsi.net/countrycodes",
  dialOutAuthUrl: "https://api.jitsi.net/authorizephone",
  peopleSearchUrl: "https://api.jitsi.net/directorySearch",
  inviteServiceUrl: "https://api.jitsi.net/conferenceInvite",
  inviteServiceCallFlowsUrl: "https://api.jitsi.net/conferenceinvitecallflows",
  peopleSearchQueryTypes: ["user", "conferenceRooms"],
  startAudioMuted: 9,
  startVideoMuted: 9,
  enableUserRolesBasedOnToken: false,
  enableLayerSuspension: true,
  enableForcedReload: true,
  feedbackPercentage: 100,
  prejoinPageEnabled: true,
  moderatedRoomServiceUrl: "https://moderated.jitsi.net",
  enableInsecureRoomNameWarning: true,
  hepopAnalyticsUrl: "",
  hepopAnalyticsEvent: {
    product: "lib-jitsi-meet",
    subproduct: "beta-meet-jit-si",
    name: "jitsi.page.load.failed",
    action: "page.load.failed",
    actionSubject: "page.load",
    type: "page.load.failed",
    source: "page.load",
    attributes: {
      type: "operational",
      source: "page.load"
    },
    server: "beta.meet.jit.si"
  },
  deploymentInfo: {
    environment: "beta-meet-jit-si",
    envType: "stage",
    releaseNumber: "1692",
    shard: "beta-eu-west-2b-s3",
    region: "eu-west-2",
    userRegion: "eu-west-2",
    crossRegion: 0
  },
  e2eping: {
    pingInterval: -1
  },
  abTesting: {},
  testing: {
    capScreenshareBitrate: 1
  },
  confID: "beta.meet.jit.si/sre",
  applicationName: "Jitsi Meet"
};
