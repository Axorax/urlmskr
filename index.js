const params = new URLSearchParams(window.location.search);

if (params.get("r") && params.get("r").toLowerCase().endsWith(" reveal")) {
  const url = params.get("r").slice(0, -7);
  document.head.innerHTML += '<link rel="stylesheet" href="./style.css">';
  document.body.innerHTML = `
    <div id="electric-surge"></div>

    <div class="reveal center">
        <div>
            <div class="top">This URL redirects to:</div>
            <div class="destination">${window.atob(url)}</div>
        </div>
    </div>  
  `;

  document.body.appendChild(
    Object.assign(document.createElement("script"), { src: "./script.js" }),
  );
} else if (params.get("r")) {
  window.location.replace(window.atob(params.get("r")));
} else if (params.get("t")) {
  document.body.innerHTML = `
    <p>${window.atob(params.get("t"))}</p>
  `;

  document.head.innerHTML += `
    <style>
      :root {
        color-scheme: dark;
      }

      * {
        margin: 0;
        padding: 0;
        color: #fff;
      }

      html {
        background: linear-gradient(to top, #171515, #242323) no-repeat center center / cover;
        height: 100dvh;
        overflow-x: hidden;
        }
        
      p {
        padding: 0.9rem 1.2rem;
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        word-wrap: break-word;
      }
    </style>
  `;
} else {
  window.location.replace("https://axorax.github.io/urlmskr/create");
}
