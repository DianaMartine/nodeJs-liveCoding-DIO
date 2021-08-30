function eventLoop() {
  var a = 1;
  var b = 2;
  var c = 3;

  console.log(a);

  setTimeout(() => {
    console.log(b);
  }, 1);

  console.log(c);
}

eventLoop();
