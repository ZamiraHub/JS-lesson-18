// const title=window.document.getElementsByTagName('h1)
// const text=document.getElementsByClassName('text')
// const hi=document.getElementById('hi')

const title=document.querySelectorAll('h1')
const text=document.querySelectorAll('.text')
const hi=document.querySelector('#hi')

// console.log(title[0]);
// console.log(text);
// console.log(hi);
//innerContent//innerText//innerHtml
title[1].textContent.content="<i>My students</i>"
title[1].innerText="My students"
title[1].innerHTML="<i> My student</i>s "
text[0].style.color="red"
text[0].style.backgroundColor="grey"
text[0].innerHTML="I'm a new text.Hello"
console.log(text[0]);



