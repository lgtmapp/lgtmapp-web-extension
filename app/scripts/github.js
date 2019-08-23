import domready from "domready";

domready(() => {
    const toolbar = document.querySelector("markdown-toolbar[for='pull_request_review_body']");

    const div = document.createElement("div");
    div.className = "d-inline-block";

    const btn = document.createElement("button");
    btn.innerText = "LGTM!";
    btn.onclick = insertLGTM;

    div.appendChild(btn);
    toolbar.appendChild(div);
});

async function insertLGTM(e) {
    e.preventDefault();

    const image = await fetchImage();
    const lgtm = ` ![LGTM](${image.src})`;
    const textarea = document.querySelector("#pull_request_review_body");
    textarea.value = textarea.value + lgtm;
}

async function fetchImage() {
    const host = "https://www.lgtm.app";
    try {
        const res = await fetch(`${host}/api/images/random`);
        const data = await res.json();
        return {
            id: data.id,
            src: `${host}/p/${data.id}`
        };
    } catch (err) {
        throw new Error(err);
    }
}