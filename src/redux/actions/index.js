const localEndpoint = "http://localhost:65533";
const remoteEndpoint = "https://yge.wvi.mybluehost.me/test/balm_ai-Backend";
export const apiURL =
  process.env.NODE_ENV === "production" ? remoteEndpoint : localEndpoint;
