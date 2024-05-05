let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
//  let removeFriend = document.querySelector("#remove")

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Red";
    btn.innerHTML = "Add Friend"
    flag = 0;
  }
});

//  removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red"
//  })
