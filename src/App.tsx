import groupPhoto from "./assets/salamandre/img-groupe-salamandre.jpg"
import gillesPhoto from "./assets/salamandre/gilles.jpg"
import geraldPhoto from "./assets/salamandre/gerald.jpg"
import stephanePhoto from "./assets/salamandre/stephane.jpg"
import mathieuPhoto from "./assets/salamandre/mathieu.jpg"
import { useConcerts } from "./concerts"

const links = {
  youtube: "https://www.youtube.com/@SalamandreRock",
  spotify: "https://open.spotify.com/artist/7wx1LTeikQoPCTpx2syzVA",
  deezer: "https://www.deezer.com/en/album/71379512",
  soundcloud: "https://soundcloud.com/salamandre-rock",
  instagram: "https://www.instagram.com/salamandrerock",
  facebook: "https://fr-fr.facebook.com/salamandrerock/",
  contact: "mailto:groupe@salamandrerock.com",
}

const members = [
  {
    name: "Gilles",
    role: "Guitare & chant",
    aside: "Humoriste dans sa salle de bain",
    photo: gillesPhoto,
  },
  {
    name: "Gérald",
    role: "Batterie & chœurs",
    aside: "Danseur de claquettes quand il n’est pas au jardin",
    photo: geraldPhoto,
  },
  {
    name: "Stéphane",
    role: "Basse",
    aside: "Explorateur de saveurs",
    photo: stephanePhoto,
  },
  {
    name: "Mathieu",
    role: "Trompette & chœurs",
    aside: "Bûcheron canadien à ses heures perdues",
    photo: mathieuPhoto,
  },
]

export default function App() {
  const concerts = useConcerts()
  return (
    <main className="poster-site">
      <header className="poster-header">
        <nav className="poster-nav" aria-label="Navigation principale">
          <a
            className="poster-mark"
            href="#accueil"
            aria-label="Salamandre, accueil"
          >
            S<span>A</span>L
          </a>
          <div className="poster-nav-links">
            <a href="#groupe">Le groupe</a>
            <a href="#ecouter">Écouter / voir</a>
            <a href="#concerts">Concerts</a>
          </div>
          <a className="poster-book" href="#contact">
            Contact / booking ↗
          </a>
        </nav>
        <div className="poster-mobile-links">
          <a href="#groupe">Groupe</a>
          <a href="#ecouter">Écouter / voir</a>
          <a href="#concerts">Concerts</a>
        </div>
      </header>

      <section className="poster-hero" id="accueil">
        <div className="poster-kicker">
          Rock cuivré · textes en français · Lyon
        </div>
        <h1 className="poster-title">
          <span>Salamandre</span>
        </h1>
        <div className="poster-photo print-photo">
          <img
            src={groupPhoto}
            alt="Salamandre en concert, guitare et trompette au premier plan"
          />
        </div>
        <p className="poster-side-note">
          Peter Pan électriques depuis un certain temps déjà
        </p>
        <div className="poster-burst" aria-hidden="true">
          <span>100%</span>
          <small>vivant</small>
        </div>
        <p className="poster-manifesto">
          Une poignée de chanson, une sauce cuivrée et de la dérision servie
          très fort.
        </p>
        <a className="poster-cta" href={links.youtube} target="_blank" rel="noopener noreferrer">
          Voir le groupe en action <span>▶</span>
        </a>
      </section>

      <section className="poster-strip" aria-label="Liens d’écoute">
        <span>Branchez ici →</span>
        <a href={links.spotify} target="_blank" rel="noopener noreferrer">Spotify</a>
        <a href={links.deezer} target="_blank" rel="noopener noreferrer">Deezer</a>
        <a href={links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href={links.soundcloud} target="_blank" rel="noopener noreferrer">SoundCloud</a>
      </section>

      <section className="band-intro" id="groupe">
        <div className="section-stamp">
          <span>01</span>
          <p>La joyeuse bande</p>
        </div>
        <div className="band-heading">
          <h2>
            Pas sages.
            <br />
            Mais appliqués.
          </h2>
          <p>
            Quatre musiciens, des mots en français et un goût prononcé pour le jeu
            en direct. Une espèce en voie d’extinction, mais assumée.
          </p>
        </div>
        <blockquote>
          « Le virus de la musique ne nous a pas quittés, alors on continue à
          griffonner des mots et des accords. »
        </blockquote>
      </section>

      <section className="member-wall" aria-label="Les membres de Salamandre">
        {members.map((member, index) => (
          <article className={`member member-${index + 1}`} key={member.name}>
            <div className="member-photo print-photo">
              <img src={member.photo} alt={`${member.name}, ${member.role}`} />
            </div>
            <div className="member-copy">
              <span>0{index + 1}</span>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <small>{member.aside}</small>
            </div>
          </article>
        ))}
      </section>

      <section className="media-section" id="ecouter">
        <div className="media-head">
          <div className="section-stamp section-stamp-light">
            <span>02</span>
            <p>Dans les oreilles</p>
          </div>
          <h2>
            Montez
            <br />
            le son.
          </h2>
          <p>
            À écouter chez soi. À regarder de près. À vivre beaucoup trop près
            de la scène.
          </p>
        </div>
        <div className="media-list">
          <a href={links.spotify} target="_blank" rel="noopener noreferrer">
            <span>01</span>
            <strong>Spotify</strong>
            <b>Écouter ↗</b>
          </a>
          <a href={links.deezer} target="_blank" rel="noopener noreferrer">
            <span>02</span>
            <strong>Deezer</strong>
            <b>Écouter ↗</b>
          </a>
          <a href={links.youtube} target="_blank" rel="noopener noreferrer">
            <span>03</span>
            <strong>YouTube</strong>
            <b>Regarder ↗</b>
          </a>
          <a href={links.soundcloud} target="_blank" rel="noopener noreferrer">
            <span>04</span>
            <strong>SoundCloud</strong>
            <b>Écouter ↗</b>
          </a>
        </div>
        <div className="media-cutout print-photo" aria-hidden="true">
          <img src={mathieuPhoto} alt="" />
        </div>
        <p className="media-scribble">Avec du cuivre dedans !</p>
      </section>

      <section className="concert-section" id="concerts">
        <div className="concert-copy">
          <div className="section-stamp">
            <span>03</span>
            <p>Sur la route</p>
          </div>
          <h2>
            Prochain
            <br />
            vacarme.
          </h2>
        </div>
        <div className="concert-board">
          {concerts.length === 0 ? (
            <p>La programmation sera affichée ici dès qu’elle sera confirmée.</p>
          ) : (
            <ul className="concert-list">
              {concerts.map((c) => {
                const content = (
                  <>
                    <time dateTime={c.date.toLocaleDateString("sv-SE")}>
                      <b>{c.date.toLocaleDateString("fr-FR", { day: "2-digit" })}</b>
                      {c.date
                        .toLocaleDateString("fr-FR", { month: "short", year: "2-digit" })
                        .replace(".", "")}
                    </time>
                    <span>
                      <strong>{c.city}</strong>
                      {c.venue && <small>{c.venue}</small>}
                    </span>
                    {c.url && <em>Billets ↗</em>}
                  </>
                )
                const key = c.date.getTime() + c.city + c.venue
                return (
                  <li key={key}>
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
          <a href={links.contact}>Programmer Salamandre ↗</a>
        </div>
        <p className="concert-aside">
          Notre terrain de jeux préféré : plug (in baby) and play !
        </p>
      </section>

      <footer className="poster-footer" id="contact">
        <div className="footer-topline">
          <span>04 — Contact / booking</span>
          <span>Lyon · France</span>
        </div>
        <div className="footer-main">
          <h2>
            On se fait
            <br />
            une scène ?
          </h2>
          <div className="footer-contact">
            <p>Concert, festival, média ou simplement un petit mot :</p>
            <a href={links.contact}>groupe@salamandrerock.com ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Salamandre · Rock en français, sauce cuivrée</p>
          <div>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </main>
  )
}
