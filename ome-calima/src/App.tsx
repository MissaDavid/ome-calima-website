import './App.css'
import img1 from './assets/IMG-20250901-WA0001.jpg'
import img2 from './assets/IMG-20250901-WA0003.jpg'
import img3 from './assets/IMG-20250908-WA0001.jpg'
import img4 from './assets/IMG-20250908-WA0002.jpg'

function App() {
  const showForm = (formType: 'self' | 'gift') => {
    // Toggle active states on buttons
    const selfTab = document.getElementById('self-tab');
    const giftTab = document.getElementById('gift-tab');
    const selfForm = document.getElementById('self-form');
    const giftForm = document.getElementById('gift-form');

    if (formType === 'self') {
      selfTab?.classList.add('active');
      giftTab?.classList.remove('active');
      selfTab?.setAttribute('aria-selected', 'true');
      giftTab?.setAttribute('aria-selected', 'false');
      selfForm?.classList.add('active');
      giftForm?.classList.remove('active');
      selfForm?.removeAttribute('hidden');
      giftForm?.setAttribute('hidden', 'true');
    } else {
      giftTab?.classList.add('active');
      selfTab?.classList.remove('active');
      giftTab?.setAttribute('aria-selected', 'true');
      selfTab?.setAttribute('aria-selected', 'false');
      giftForm?.classList.add('active');
      selfForm?.classList.remove('active');
      giftForm?.removeAttribute('hidden');
      selfForm?.setAttribute('hidden', 'true');
    }
  };
  return (
    <div className="app" lang="fr" id="top">
      {/* Skip link for screen reader users */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <header role="banner">
        <div className="hero-content">
          <img
            src={img4}
            alt="Calimendi character in cosmic starry background"
            className="hero-character"
          />
          <div className="hero-text">
            <h1>Calimendi - Univers des Ome Calima</h1>
            <p className="subtitle">
              Bienvenue dans l'Univers des Ome Calima et de leurs précieux Calimendi.
            </p>
          </div>
        </div>

        <nav role="navigation" aria-label="Navigation principale">
          <ul className="nav-menu">
            <li><a href="#legend">Légende</a></li>
            <li><a href="#adoption">Adoption</a></li>
            <li><a href="#about">Qui suis-je</a></li>
            <li><a href="#gallery">Galerie</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        <section id="legend" aria-labelledby="legend-title">
          <h2 id="legend-title">La légende des Calimendi</h2>

          <div className="lore-content">
            <p className="intro-text">
              Il existe, dans les plis discrets du monde, un peuple que l'on aperçoit rarement mais que l'on appelle les Ome Calima, « le petit peuple lumineux »
            </p>

            <p>
              Ils ne vivent pas en un seul lieu, mais apparaissent partout où la magie du lien se tisse. Dans une vallée, au détour d'un voyage, à l'aube d'une naissance ou même au creux d'une promesse, leur présence se révèle.
            </p>

            <p className="highlight-text">
              Lorsque deux cœurs s'attachent, lorsqu'un souvenir devient assez fort pour traverser le temps, surgissent les Calimendi, « ceux qui viennent de la Lumière ».
            </p>

            <p>
              Petits compagnons hauts comme trois pommes, ils portent en eux l'écho de ce qui unit : l'amour inconditionnel entre un parent et son enfant, l'énergie d'une amitié élévatrice, le symbole d'un chemin parcouru lors d'un voyage.
            </p>

            <p className="philosophy-text">
              Un Calimendi n'efface rien : il prolonge. Il garde la trace lumineuse d'un instant, l'énergie d'un souvenir, la chaleur d'un lien. Il n'est ni talisman, ni fétiche, mais un gardien discret qui rappelle que ce qui compte vraiment ne s'oublie jamais.
            </p>

            <p className="conclusion-text">
              Adopter un Calimendi, c'est inviter chez soi un fragment du peuple Ome Calima. C'est accueillir un être né d'un lien précieux, qui veillera à ce que la mémoire de cet instant continue de grandir, doucement, à vos côtés.
            </p>
          </div>

          <div className="first-encounter">
            <h3>La première fois que j'ai rencontré un Calimendi</h3>

            <p>
              Je n'oublierai jamais le jour où j'ai aperçu mon premier Calimendi.
            </p>

            <p>
              Ce n'était pas dans une forêt mystérieuse ni au détour d'un rêve...Mais au cœur même de ma propre histoire, à l'arrivée de ma fille.
            </p>

            <p>
              Durant ma grossesse, j'avais gardé contre mon ventre un bola, ce petit bijou qui berçait son sommeil lorsqu'elle était encore dans mon ventre. Puis, vint son bonnet de naissance, et les chutes de tissus du tapis d'éveil que j'avais fabriqué pour elle, avec tout mon amour. Ces fragments précieux, porteurs de tant de premières fois, sont devenus autant de trésors.
            </p>

            <p className="creation-story">
              C'est de tout cela qu'est né son Calimendi. Il s'est révélé comme une évidence, un petit être porteur du lien invisible entre elle et moi : celui qui nous unit depuis les premiers battements de son cœur, et qui continue de grandir avec elle.
            </p>

            <p>
              Son Calimendi est coiffé d'une fleur, symbole de ce bourgeon qui s'ouvre, qui s'épanouit jour après jour, comme mon enfant qui grandit.
            </p>

            <p>
              Il n'est pas une poupée, ni un souvenir figé, mais un gardien de ce lien unique qui ne pourra jamais se briser.
            </p>

            <p className="realization-text">
              Depuis ce jour, j'ai compris que les Calimendi apparaissent toujours quand un lien devient assez fort pour se rendre visible.
            </p>

            <p>
              Et c'est ainsi que j'ai décidé de les partager, pour que chacun puisse rencontrer le(s) sien(s), à travers une histoire, un voyage, un amour ou une naissance.
            </p>
          </div>
        </section>

        <section id="adoption" aria-labelledby="adoption-title">
          <h2 id="adoption-title">Comment adopter un Calimendi ?</h2>

          <div className="adoption-intro">
            <p>
              Chaque Calimendi est unique, porteur d'une histoire et d'une lumière qui lui sont propres.
            </p>
            <p>
              Pour que le vôtre trouve son chemin jusqu'à chez vous, il suffit de lui écrire...
            </p>
          </div>

          <div className="adoption-forms">
            <div className="form-toggle">
              <p>Choisissez votre type d'adoption :</p>
              <div className="toggle-buttons" role="tablist" aria-label="Types d'adoption">
                <button
                  className="toggle-btn active"
                  id="self-tab"
                  role="tab"
                  aria-controls="self-form"
                  aria-selected="true"
                  onClick={() => showForm('self')}
                >
                  Pour moi
                </button>
                <button
                  className="toggle-btn"
                  id="gift-tab"
                  role="tab"
                  aria-controls="gift-form"
                  aria-selected="false"
                  onClick={() => showForm('gift')}
                >
                  Offrir à un proche
                </button>
              </div>
            </div>

            <div id="self-form" className="adoption-form active" role="tabpanel" aria-labelledby="self-tab">
              <h3>Adoption pour moi</h3>
              <form className="calimendi-form" action="#" method="post">
                <fieldset>
                  <legend className="visually-hidden">Informations personnelles</legend>

                  <div className="form-group">
                    <label htmlFor="self-name">Je m'appelle :</label>
                    <input type="text" id="self-name" name="name" required aria-required="true" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="self-email">Mon adresse e-mail est :</label>
                    <input type="email" id="self-email" name="email" required aria-required="true" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="self-recipient">Prénom et nom de la personne qui t'attend :</label>
                    <input type="text" id="self-recipient" name="recipient" required aria-required="true" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Je t'attends pour célébrer :</legend>
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="occasion" value="naissance" /> une naissance</label>
                    <label><input type="checkbox" name="occasion" value="mariage" /> un mariage</label>
                    <label><input type="checkbox" name="occasion" value="anniversaire" /> un anniversaire</label>
                    <label><input type="checkbox" name="occasion" value="voyage" /> un voyage</label>
                    <label><input type="checkbox" name="occasion" value="amitie" /> une amitié</label>
                    <div className="form-group">
                      <label htmlFor="self-other-occasion">autre :</label>
                      <input type="text" id="self-other-occasion" name="other_occasion" />
                    </div>
                  </div>
                </fieldset>

                <div className="form-group">
                  <label htmlFor="self-story">Voici l'histoire ou le souvenir qui t'appelle à moi :</label>
                  <textarea id="self-story" name="story" rows={4} required aria-required="true"></textarea>
                </div>

                <fieldset>
                  <legend>J'aimerais que tu portes en toi un fragment de :</legend>
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="fragment" value="tissu" /> tissu/vêtement cher au cœur</label>
                    <label><input type="checkbox" name="fragment" value="symbole" /> symbole/petit objet</label>
                    <div className="form-group">
                      <label htmlFor="self-other-fragment">autre :</label>
                      <input type="text" id="self-other-fragment" name="other_fragment" />
                    </div>
                  </div>
                </fieldset>

                <div className="form-group">
                  <label htmlFor="self-colors">Dans mon Univers, j'aime particulièrement ces couleurs/ambiances :</label>
                  <textarea id="self-colors" name="colors" rows={2}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="self-certificate">Pour célébrer ton arrivée, je souhaite un Certificat d'adoption personnalisé au nom de :</label>
                  <input type="text" id="self-certificate" name="certificate_name" />
                </div>

                <button type="submit" className="submit-btn">
                  Envoyer ma demande d'adoption
                </button>
              </form>
            </div>

            <div id="gift-form" className="adoption-form" role="tabpanel" aria-labelledby="gift-tab" hidden>
              <h3>Adoption pour offrir</h3>
              <form className="calimendi-form" action="#" method="post">
                <fieldset>
                  <legend className="visually-hidden">Informations personnelles</legend>

                  <div className="form-group">
                    <label htmlFor="gift-name">Je m'appelle :</label>
                    <input type="text" id="gift-name" name="name" required aria-required="true" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gift-email">Mon adresse e-mail est :</label>
                    <input type="email" id="gift-email" name="email" required aria-required="true" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gift-recipient">Prénom et nom de la personne qui t'attend :</label>
                    <input type="text" id="gift-recipient" name="recipient" required aria-required="true" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Tu viendras à l'occasion de :</legend>
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="occasion" value="naissance" /> une naissance</label>
                    <label><input type="checkbox" name="occasion" value="mariage" /> un mariage</label>
                    <label><input type="checkbox" name="occasion" value="anniversaire" /> un anniversaire</label>
                    <label><input type="checkbox" name="occasion" value="voyage" /> un voyage</label>
                    <label><input type="checkbox" name="occasion" value="amitie" /> une amitié</label>
                    <div className="form-group">
                      <label htmlFor="gift-other-occasion">autre :</label>
                      <input type="text" id="gift-other-occasion" name="other_occasion" />
                    </div>
                  </div>
                </fieldset>

                <div className="form-group">
                  <label htmlFor="gift-story">Voici l'histoire ou le souvenir que je voudrais que tu portes pour elle/lui :</label>
                  <textarea id="gift-story" name="story" rows={4} required aria-required="true"></textarea>
                </div>

                <fieldset>
                  <legend>J'aimerais que tu portes en toi un fragment de :</legend>
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="fragment" value="tissu" /> tissu/vêtement cher au cœur</label>
                    <label><input type="checkbox" name="fragment" value="symbole" /> symbole/petit objet</label>
                    <div className="form-group">
                      <label htmlFor="gift-other-fragment">autre :</label>
                      <input type="text" id="gift-other-fragment" name="other_fragment" />
                    </div>
                  </div>
                </fieldset>

                <div className="form-group">
                  <label htmlFor="gift-colors">Dans son Univers, les couleurs/ambiances qui résonnent le plus sont :</label>
                  <textarea id="gift-colors" name="colors" rows={2}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="gift-certificate">Pour célébrer ton arrivée, je souhaite un Certificat d'adoption personnalisé au nom de :</label>
                  <input type="text" id="gift-certificate" name="certificate_name" />
                </div>

                <button type="submit" className="submit-btn">
                  Envoyer ma demande d'adoption cadeau
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">Qui suis-je ?</h2>

          <div className="about-content">
            <p className="intro-about">
              Je m'appelle Lauriane, et depuis toujours, je marche entre deux mondes : celui du quotidien bien ancré, et celui des songes et des créatures enchantées invisibles à l'œil de celui qui ne voit pas.
            </p>

            <div className="journey-story">
              <p>
                Enfant, je passais des heures à inventer des histoires, à dessiner, à donner vie à des compagnons imaginaires.
              </p>

              <p>
                Plus tard, c'est dans l'art, l'éducation et l'art-thérapie que j'ai trouvé ma voie : créer pour apaiser, relier, transmettre et illuminer.
              </p>

              <p className="creation-journey">
                De fil en aiguille, mes mains se sont mises à façonner de petites présences... Aujourd'hui, je vis à la campagne, entourée de ma famille, d'animaux et de nature. C'est là que mon atelier prend vie, au rythme des saisons, des rires d'enfants et de la douce mélopée du cours d'eau qui traverse mon jardin.
              </p>
            </div>

            <div className="mission-statement">
              <p>
                Chaque Calimendi naît d'une intention, d'une histoire partagée. Mon travail ne consiste pas seulement à créer des objets, mais à tisser des liens invisibles entre les cœurs, à donner forme à des souvenirs précieux, et à offrir un compagnon discret qui accompagnera les moments importants de la vie.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" aria-labelledby="gallery-title">
          <h2 id="gallery-title">Galerie</h2>

          <div className="gallery-intro">
            <p>
              Découvrez le premier Calimendi, né de l'amour maternel et porteur d'une histoire unique.
              Chaque création future suivra cette même démarche artisanale et spirituelle.
            </p>
          </div>

          <div className="image-gallery">
            <div className="gallery-item featured">
              <img
                src={img1}
                alt="Premier Calimendi créé par Lauriane - poupée artisanale avec fleur dans les cheveux, représentant le lien mère-fille"
                loading="lazy"
              />
              <div className="image-caption">
                <h4>Le Premier Calimendi</h4>
                <p>Né pour ma fille, porteur de fragments précieux : bola de grossesse, bonnet de naissance et tissu du tapis d'éveil.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={img2}
                alt="Vue détaillée du premier Calimendi montrant les détails artisanaux et les matériaux utilisés"
                loading="lazy"
              />
              <div className="image-caption">
                <h4>Détails Artisanaux</h4>
                <p>Chaque détail raconte une histoire, chaque couture porte une intention.</p>
              </div>
            </div>

            <div className="gallery-item design-inspiration">
              <img
                src={img3}
                alt="Logo noir et blanc Calimendi - design épuré montrant une créature magique dans un cercle étoilé"
                loading="lazy"
              />
              <div className="image-caption">
                <h4>Identité Visuelle</h4>
                <p>Le logo Calimendi capture l'essence magique de ces créatures lumineuses.</p>
              </div>
            </div>

            <div className="gallery-item art-concept">
              <img
                src={img4}
                alt="Illustration artistique d'un Calimendi dans un univers étoilé - inspiration créative pour les futures créations"
                loading="lazy"
              />
              <div className="image-caption">
                <h4>Vision Artistique</h4>
                <p>L'inspiration créative qui guide chaque nouvelle création dans l'univers mystique des Ome Calima.</p>
              </div>
            </div>
          </div>

          <div className="gallery-note">
            <p>
              <em>Cette galerie évoluera au fur et à mesure que de nouveaux Calimendi naîtront des histoires partagées avec vous.</em>
            </p>
          </div>
        </section>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2024 Lauriane - Calimendi. Tous droits réservés.</p>
        <address>
          <p>Pour toute question, contactez-moi à : <a href="mailto:contact@calimendi.fr">contact@calimendi.fr</a></p>
        </address>
      </footer>
    </div>
  )
}

export default App
