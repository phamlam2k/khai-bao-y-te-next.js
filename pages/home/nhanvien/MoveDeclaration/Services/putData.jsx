export default function postData(url, data) {
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log("err"));
}
