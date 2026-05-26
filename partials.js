/* Maydan — shared nav & footer */
(function () {
  const NAV = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="__ROOT__index.html" class="brand" aria-label="Maydan">maydan</a>
      <div class="nav-links">
        <div class="nav-dropdown">
          <a class="nav-link nav-dropdown-trigger" href="__ROOT__ecosystem.html">Produits</a>
          <div class="nav-dropdown-menu">
            <a class="dd-item" href="__ROOT__products/caisse.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="3" width="13" height="10" rx="1.5"/><path d="M2.5 7h13"/></svg></div>
              <div><div class="dd-title">Caisse</div><div class="dd-desc">Logiciel TPV sur Android</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/borne.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="5" y="2" width="8" height="14" rx="1"/><path d="M8 13.5h2"/></svg></div>
              <div><div class="dd-title">Borne de commande</div><div class="dd-desc">Self-order autonome</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/kds.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="3.5" width="14" height="10" rx="1.5"/><path d="M5 16h8M9 13.5v2.5"/></svg></div>
              <div><div class="dd-title">Écran cuisine (KDS)</div><div class="dd-desc">Tickets, timers, rappels</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/ecran-client.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="3.5" width="15" height="9" rx="1"/><path d="M6 15h6"/></svg></div>
              <div><div class="dd-title">Écran client</div><div class="dd-desc">Suivi des commandes en salle</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/commande-en-ligne.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="5.5" y="2" width="7" height="14" rx="1.5"/><circle cx="9" cy="13.5" r=".7" fill="currentColor"/></svg></div>
              <div><div class="dd-title">Commande en ligne</div><div class="dd-desc">App mobile &amp; site web</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/livraison.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 12V5h8v7"/><path d="M10 8h4l2 3v1h-6"/><circle cx="5.5" cy="13" r="1.5"/><circle cx="13" cy="13" r="1.5"/></svg></div>
              <div><div class="dd-title">Livraison</div><div class="dd-desc">Flotte interne ou externe</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/commande-table.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="12" height="12" rx="1.5"/><path d="M6 6h6M6 9h6M6 12h3"/></svg></div>
              <div><div class="dd-title">Commande à table</div><div class="dd-desc">QR code &amp; tablette serveur</div></div>
            </a>
            <a class="dd-item" href="__ROOT__products/manager.html">
              <div class="dd-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 13.5l3.5-4 3 3 5.5-6"/><path d="M11 6.5h3.5V10"/></svg></div>
              <div><div class="dd-title">Manager en ligne</div><div class="dd-desc">Un menu, toutes plateformes</div></div>
            </a>
          </div>
        </div>
        <a class="nav-link" data-href="ecosystem.html" href="__ROOT__ecosystem.html">Écosystème</a>
        <a class="nav-link" data-href="use-cases.html" href="__ROOT__use-cases.html">Cas d'usage</a>
        <a class="nav-link" data-href="integrations.html" href="__ROOT__integrations.html">Intégrations</a>
        <a class="nav-link" data-href="support.html" href="__ROOT__support.html">Support</a>
      </div>
      <div class="nav-spacer"></div>
      <a class="btn btn-ghost" href="__ROOT__support.html">Se connecter</a>
      <a class="btn btn-accent" href="__ROOT__tarifs.html">Demander un devis <span class="arrow"></span></a>
    </div>
  </nav>
  `;

  const FOOTER = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">maydan</div>
          <div class="footer-tagline">L'écosystème complet pour ton restaurant.</div>
          <div class="row mt-3">
            <span class="chip" style="background:transparent;border-color:#2A2A28;color:#A8A8A2">NF525</span>
            <span class="chip" style="background:transparent;border-color:#2A2A28;color:#A8A8A2">Made in France</span>
          </div>
        </div>
        <div class="footer-col">
          <h5>Produits</h5>
          <ul>
            <li><a href="__ROOT__products/caisse.html">Caisse</a></li>
            <li><a href="__ROOT__products/borne.html">Borne</a></li>
            <li><a href="__ROOT__products/kds.html">KDS cuisine</a></li>
            <li><a href="__ROOT__products/ecran-client.html">Écran client</a></li>
            <li><a href="__ROOT__products/commande-en-ligne.html">Commande en ligne</a></li>
            <li><a href="__ROOT__products/livraison.html">Livraison</a></li>
            <li><a href="__ROOT__products/commande-table.html">Commande à table</a></li>
            <li><a href="__ROOT__products/manager.html">Manager</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Découvrir</h5>
          <ul>
            <li><a href="__ROOT__ecosystem.html">Écosystème</a></li>
            <li><a href="__ROOT__use-cases.html">Cas d'usage</a></li>
            <li><a href="__ROOT__integrations.html">Intégrations</a></li>
            <li><a href="__ROOT__tarifs.html">Devis</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Support</h5>
          <ul>
            <li><a href="__ROOT__support.html">Aide &amp; FAQ</a></li>
            <li><a href="__ROOT__support.html#contact">Nous contacter</a></li>
            <li><a href="__ROOT__support.html#status">État des services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Légal</h5>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">CGV</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Attestation NF525</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MAYDAN · TOUS DROITS RÉSERVÉS</span>
        <span>VERSION 2.4 · BUILD 0526</span>
      </div>
    </div>
  </footer>
  `;

  // ROOT = "" for top-level pages, "../" for products/*.html
  const root = document.documentElement.dataset.root || '';
  const navMount = document.getElementById('site-nav');
  const footMount = document.getElementById('site-footer');
  if (navMount)  navMount.outerHTML  = NAV.replace(/__ROOT__/g, root);
  if (footMount) footMount.outerHTML = FOOTER.replace(/__ROOT__/g, root);
})();
