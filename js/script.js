// TYPEWRITER EFFECT

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 90
});

typewriter.typeString("<strong>Desenvolvedor frontend<strong>")
  .pauseFor(1000)
  .deleteChars(23)
  .typeString("<strong>UI designer<strong>")
  .pauseFor(2000)
  .deleteChars(12)
  .start();

   // AOS Animation
   AOS.init(
    {
      duration: 1200,
      once: true,
    }
  );