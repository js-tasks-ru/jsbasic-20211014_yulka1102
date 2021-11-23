export default function promiseClick(button) {
 return button.addEventListener('click', (event) => {
   new Promise((resolve) => {
     setTimeout(() => resolve(event.type), 2000);
    })
  }, {once: true})
}
promiseClick(button)
  .then((event) => console.log(event));