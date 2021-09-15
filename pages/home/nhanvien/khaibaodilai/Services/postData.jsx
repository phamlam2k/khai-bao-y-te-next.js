
import 'react-toastify/dist/ReactToastify.css';
export default function postData(url, data, handleSuccess, handleError) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(handleSuccess)
    .catch(handleError);
}
