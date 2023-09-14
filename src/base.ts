import axios from "axios";

const baseUrl = "https://52fa0596-5e91-4e7c-b2a8-bb3d4b8b66c7.mock.pstmn.io";

export const post = (
  endpoint: string,
  body: object,
  apiKey: string,
  options?: object
) => {
  const url = `${baseUrl}${endpoint}`;
  const headers = {
    "Content-Type": "application.json",
    "api-key": apiKey,
  };
  const config = {
    ...options,
    headers,
  };
  const loader = document.createElement("div");
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.zIndex = "999999999";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.overflow = "hidden";
  loader.style.zIndex = "999999999";
  loader.style.backgroundColor = "999999999";
  document.body.appendChild(loader);

  return axios.post(url, body, config).then((response) => {
    if (response) {
      const { data } = response.data;
      const ifrm = document.createElement("iframe");
      ifrm.setAttribute(
        "src",
        `https://earnest-taffy-8a7df4.netlify.app/paymentdetails/${data.reference}`
      );
      ifrm.setAttribute("id", "woodcore--frame-id");
      ifrm.setAttribute("allowfullscreen", "true");
      ifrm.setAttribute("frameborder", "0");
      ifrm.setAttribute("title", "woodcore payment");
      ifrm.setAttribute(
        "sandbox",
        "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
      );
      ifrm.setAttribute("allowusermedia", "true");
      ifrm.style.width = "100%";
      ifrm.style.height = "100%";
      ifrm.style.zIndex = "999999999";
      ifrm.style.position = "fixed";
      ifrm.style.top = "0";
      ifrm.style.left = "0";
      ifrm.style.overflow = "hidden";
      ifrm.style.zIndex = "999999999";
      document.body.appendChild(ifrm);
      const iframeDoc = ifrm.contentDocument || ifrm.contentWindow.document;
      const tw = iframeDoc.createElement("script");
      tw.setAttribute("src", "https://cdn.tailwindcss.com");
      tw.onload = function () {
        iframeDoc.body.innerHTML = iframeDoc.body.innerHTML; //re render
      };
      iframeDoc.head.appendChild(tw);
    } else throw new Error();
  });
};
