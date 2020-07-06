export default function local(key) {
  if (localStorage.getItem(key)) {
    const arr = JSON.parse(localStorage.getItem('contacts'));
    return arr;
  }
}
