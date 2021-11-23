export default function promiseClick(button) {
  button = document.body.closest('button');
 return button.addEventListener('click', (event) => {
   new Promise((resolve) => {
    resolve(event.type);
    })
  }, {once: true})
}
promiseClick(button).then((event) => console.log(event));