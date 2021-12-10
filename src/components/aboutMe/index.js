export default function AboutMe() {
const today = new Date();
const age = Number(today.getFullYear()) - 1999;

return(
      <fieldset className="about-me">
      <legend style={{ color: "chartreuse", fontSize: 18 }}>
        About Me
      </legend>
      <div class="body-about-me">
        <p> Hello, there!</p>
        <p> My name is Newton Perazzo and I'm {age} years old. </p>
        <p> I'm from Feira de Santana, Bahia, Brazil. </p>
        <p>
          I study Information System's at UNIFACS college since 2019 and
          I'll finish It in 2022.
        </p>
        <p>
          I love code and I love to make systems. To me, It's both work and
          hobby.
        </p>
        <p>
          Thank you for your visit! Feel free to send me a message on my
          social networks!
        </p>
      </div>
    </fieldset>
)
}