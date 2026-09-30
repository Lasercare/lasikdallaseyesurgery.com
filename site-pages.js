const root = document.body.dataset.root || "./";
const view = document.body.dataset.view;
const slug = document.body.dataset.slug || "";
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = `${root}assets/favicon.svg`;
document.head.appendChild(favicon);

const articles = [
  {
    slug: "lasik-dallas-texas",
    title: "LASIK in Dallas, Texas",
    date: "January 6, 2020",
    category: "Dallas LASIK",
    categorySlug: "dallas-lasik",
    tags: ["lasik-dallas-texas"],
    excerpt: "What Dallas-area patients should consider before choosing laser vision correction and a surgeon.",
    read: "5 min read",
    content: `
      <p class="article-lead">Choosing LASIK is a personal medical decision. The best place to begin is not with a promise of perfect vision, but with a comprehensive evaluation and a clear understanding of the benefits, limitations, alternatives, and risks.</p>
      <h2>Start with candidacy</h2>
      <p>LASIK reshapes the cornea to change how light focuses on the retina. It can treat certain levels of nearsightedness, farsightedness, and astigmatism. Candidacy depends on factors such as age, prescription stability, corneal shape and thickness, tear function, eye health, general health, medications, occupation, and expectations.</p>
      <p>A qualified ophthalmologist should examine your eyes, measure and map your corneas, review your medical history, and explain whether LASIK or another option is more appropriate.</p>
      <h2>Compare surgeons carefully</h2>
      <p>Ask about board certification, refractive-surgery training, experience with your recommended procedure and laser platform, complication rates, enhancement policies, and who provides follow-up care. Cost matters, but it should not be the only factor in a decision that affects your sight.</p>
      <div class="callout"><strong>Questions to bring:</strong><ul><li>Why is this procedure the best fit for my eyes?</li><li>What outcome is realistic for my prescription?</li><li>What side effects are most relevant to me?</li><li>Could I still need glasses or contact lenses?</li><li>What happens if I need additional treatment?</li></ul></div>
      <h2>Keep expectations realistic</h2>
      <p>Many patients are satisfied after LASIK, but no medical procedure is guaranteed. Some people still use glasses for selected activities. Possible complications include glare, halos, double vision, dry eye, under- or over-correction, infection, inflammation, and loss of visual quality. Your surgeon should discuss these possibilities in the context of your individual eyes.</p>
    `
  },
  {
    slug: "eye-doctor-dallas",
    title: "Choosing an Eye Doctor in Dallas",
    date: "January 6, 2020",
    category: "Dallas Eye Doctor",
    categorySlug: "dallas-eye-doctor",
    tags: ["eye-doctor-dallas"],
    excerpt: "A practical guide to comprehensive eye exams, vision testing, and finding the right eye-care professional.",
    read: "6 min read",
    content: `
      <p class="article-lead">A comprehensive eye examination evaluates more than how clearly you can read an eye chart. It can identify refractive errors, assess how your eyes work together, and look for signs of eye disease.</p>
      <h2>Optometrist or ophthalmologist?</h2>
      <p>Optometrists provide comprehensive eye and vision care, including examinations, prescriptions, and management of many eye conditions. Ophthalmologists are medical doctors who diagnose and treat eye disease and perform eye surgery. The right professional depends on your needs; many patients receive coordinated care from both.</p>
      <h2>What a comprehensive exam may include</h2>
      <ul><li>Personal, family, medication, and vision history</li><li>Distance and near visual-acuity measurements</li><li>Refraction to determine a glasses or contact-lens prescription</li><li>Eye focusing, teaming, movement, pupil, and peripheral-vision tests</li><li>Eye-pressure measurement and evaluation of internal and external eye health</li><li>Additional imaging or testing when indicated</li></ul>
      <p>The exact examination varies with age, symptoms, health history, and the clinician’s judgment. Dilation may be recommended to provide a wider view inside the eye.</p>
      <h2>Why regular care matters</h2>
      <p>Some eye and vision problems have few obvious early symptoms. A vision screening is useful but is not a substitute for a comprehensive examination by an optometrist or ophthalmologist. People who have had refractive surgery still need ongoing eye-health examinations.</p>
      <div class="callout"><strong>Before your visit:</strong> Bring your current eyewear, medication list, family eye-health history, insurance information, and notes about any changes in vision, discomfort, flashes, floaters, headaches, or difficulty with daily tasks.</div>
    `
  },
  {
    slug: "dallas-lasik-surgery",
    title: "Preparing for Dallas LASIK Surgery",
    date: "January 6, 2020",
    category: "Dallas LASIK Surgery",
    categorySlug: "dallas-lasik-surgery",
    tags: ["dallas-lasik-surgery-2"],
    excerpt: "A stage-by-stage overview of the evaluation, preparation, procedure day, and early follow-up.",
    read: "7 min read",
    content: `
      <p class="article-lead">Preparation begins well before procedure day. Your surgeon’s instructions are specific to your eyes, contact lenses, medications, and treatment plan, so follow the clinic’s guidance rather than a generic timeline.</p>
      <h2>The preoperative evaluation</h2>
      <p>Your baseline evaluation should determine whether you are a suitable candidate and provide the measurements used to plan treatment. It may include refraction, corneal thickness and topography, pupil measurements, tear-film evaluation, a dilated examination, and a review of your medical history, lifestyle, and goals.</p>
      <h2>Contact lenses and corneal measurements</h2>
      <p>Contact lenses can temporarily change corneal shape. Your clinic may ask you to stop wearing them before measurements are taken. The timing varies by lens type and individual circumstances; ask the surgeon for written instructions rather than relying on a standard number of days.</p>
      <h2>Before procedure day</h2>
      <ul><li>Review the risks, benefits, alternatives, costs, and follow-up plan.</li><li>Ask every remaining question before signing consent documents.</li><li>Follow instructions about eye makeup, creams, lotions, and medications.</li><li>Arrange transportation home; do not plan to drive yourself.</li><li>Tell the clinic if you develop an illness or a change in eye symptoms.</li></ul>
      <h2>After the procedure</h2>
      <p>Plan to rest and use prescribed drops exactly as directed. You may receive protective shields and instructions about rubbing your eyes, bathing, exercise, swimming, makeup, work, and driving. Attend every scheduled follow-up and contact the clinic promptly about severe pain, worsening vision, or other unexpected symptoms.</p>
      <div class="callout"><strong>Keep your records.</strong> Save preoperative corneal measurements and your treatment information. They may be helpful if you need eye surgery later in life.</div>
    `
  },
  {
    slug: "lasik-eye-surgery-dallas",
    title: "How LASIK Eye Surgery Works",
    date: "January 6, 2020",
    category: "Dallas LASIK Surgery",
    categorySlug: "dallas-lasik-surgery",
    tags: ["dallas-lasik-eye-surgery", "lasik-eye-surgery-dallas"],
    excerpt: "A straightforward explanation of corneal reshaping, the treatment sequence, and recovery considerations.",
    read: "6 min read",
    content: `
      <p class="article-lead">LASIK—laser-assisted in situ keratomileusis—is a refractive procedure that permanently changes the shape of the cornea. The goal is to improve how light focuses on the retina and reduce dependence on corrective lenses.</p>
      <h2>During LASIK</h2>
      <p>Numbing drops are placed in the eye, and an eyelid holder helps prevent blinking. The surgeon creates a thin corneal flap using a femtosecond laser or a microkeratome, lifts the flap, and uses an excimer laser programmed with your measurements to reshape the underlying corneal tissue. The flap is then repositioned.</p>
      <p>You may notice pressure, dimmed vision, clicking sounds, or an unusual smell during parts of the procedure. The clinical team should explain what to expect before treatment begins.</p>
      <h2>Early recovery</h2>
      <p>Eyes may feel scratchy, watery, or sensitive for several hours. Prescribed drops and protective shields support healing. Vision can fluctuate during recovery, and your surgeon will determine when it is safe to drive, work, exercise, use eye makeup, or resume other activities.</p>
      <h2>Benefits and limitations</h2>
      <p>LASIK can reduce the need for glasses or contact lenses, but it cannot guarantee a particular result or prevent future age-related eye changes. Reading glasses may still be needed as presbyopia develops. Some people experience glare, halos, dry eye, under- or over-correction, or other complications.</p>
      <div class="callout"><strong>An individual decision:</strong> The potential benefits and risks vary with the procedure, equipment, surgeon, prescription, corneal characteristics, and personal priorities. A detailed examination and informed discussion are essential.</div>
    `
  },
  {
    slug: "lasik-dallas",
    title: "Considering LASIK in Dallas",
    date: "January 6, 2020",
    category: "Dallas LASIK",
    categorySlug: "dallas-lasik",
    tags: ["dallas-lasik-2", "lasik-dallas"],
    excerpt: "How to prepare for a LASIK consultation and set practical expectations for vision correction.",
    read: "5 min read",
    content: `
      <p class="article-lead">Dallas-area patients have many refractive-surgery options. A good consultation should help you understand not only whether LASIK is possible, but whether it makes sense for your eyes, work, hobbies, and tolerance for risk.</p>
      <h2>Plan for a detailed evaluation</h2>
      <p>Your appointment may include dilation and testing that temporarily affects vision, so ask whether you should arrange a ride. If you wear contact lenses, request instructions in advance; lenses can alter corneal measurements for a period of time after removal.</p>
      <h2>Define what success means</h2>
      <p>Think about the tasks that matter most to you: night driving, close work, outdoor activity, screen use, sports, or reducing reliance on lenses. Discuss these priorities with your surgeon. “Perfect vision” is not a useful guarantee, and glasses may still be helpful for some activities.</p>
      <h2>Understand alternatives</h2>
      <p>Depending on your eyes and goals, alternatives may include continuing with glasses or contact lenses, PRK, SMILE, implantable lenses, or other approaches. Each has its own candidacy requirements, benefits, risks, and recovery profile.</p>
      <div class="callout"><strong>Take your time.</strong> Review the patient information for the proposed laser, compare more than one practice if helpful, and avoid making a decision based only on a discount or deadline.</div>
      <h2>Continue lifelong eye care</h2>
      <p>LASIK changes corneal focusing; it does not prevent glaucoma, cataracts, retinal disease, or other eye conditions. Continue comprehensive eye examinations after surgery on the schedule recommended by your eye-care professional.</p>
    `
  },
  {
    slug: "choosing-a-dallas-lasik-eye-surgeon",
    title: "Choosing a Dallas LASIK Eye Surgeon",
    date: "December 21, 2020",
    category: "Dallas LASIK Eye Surgeon",
    categorySlug: "dallas-lasik-eye-surgeon",
    tags: [],
    excerpt: "A focused checklist for comparing surgeon credentials, experience, communication, and follow-up care.",
    read: "5 min read",
    content: `
      <p class="article-lead">The surgeon and care team you choose are central to your experience. Compare practices on qualifications, evaluation quality, communication, technology, and continuity of care—not on price or advertising alone.</p>
      <h2>What to look for</h2>
      <ul><li>Appropriate medical licensure, board certification, and refractive-surgery training</li><li>Meaningful experience with your recommended procedure and laser platform</li><li>A thorough examination before a treatment recommendation</li><li>Clear explanations of alternatives, realistic outcomes, risks, and limitations</li><li>Transparent pricing and enhancement policies</li><li>A defined plan for urgent questions and postoperative follow-up</li></ul>
      <h2>Questions worth asking</h2>
      <div class="callout"><ul><li>How many procedures like mine have you performed?</li><li>Which technology do you recommend for me, and why?</li><li>What are your outcomes and complication rates for patients like me?</li><li>Who performs each part of my evaluation and follow-up?</li><li>What symptoms after surgery require an urgent call?</li><li>What is included in the quoted cost?</li></ul></div>
      <h2>Warning signs</h2>
      <p>Be cautious when a practice guarantees 20/20 vision, minimizes risks, recommends surgery before completing a thorough examination, uses pressure tactics, or cannot clearly explain who will manage complications and follow-up care.</p>
      <p>Trust is important, but informed trust is stronger. Choose a surgeon who welcomes questions, explains uncertainty, and respects your decision—even if you decide not to have surgery.</p>
    `
  }
];

const categories = {
  "dallas-eye-doctor": { title: "Dallas Eye Doctor", slugs: ["eye-doctor-dallas", "lasik-eye-surgery-dallas", "lasik-dallas"] },
  "dallas-lasik": { title: "Dallas LASIK", slugs: ["lasik-dallas-texas", "lasik-eye-surgery-dallas", "lasik-dallas"] },
  "dallas-lasik-eye-surgeon": { title: "Dallas LASIK Eye Surgeon", slugs: ["lasik-eye-surgery-dallas", "lasik-dallas", "choosing-a-dallas-lasik-eye-surgeon"] },
  "dallas-lasik-surgery": { title: "Dallas LASIK Surgery", slugs: ["dallas-lasik-surgery", "lasik-eye-surgery-dallas", "lasik-dallas"] }
};

const tags = {
  "lasik-dallas-texas": "LASIK Dallas Texas",
  "eye-doctor-dallas": "Eye Doctor Dallas",
  "dallas-lasik-surgery-2": "Dallas LASIK Surgery",
  "dallas-lasik-eye-surgery": "Dallas LASIK Eye Surgery",
  "lasik-eye-surgery-dallas": "LASIK Eye Surgery Dallas",
  "dallas-lasik-2": "Dallas LASIK",
  "lasik-dallas": "LASIK Dallas"
};

const icon = `<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24Z"/><circle cx="24" cy="24" r="6"/></svg></span>`;

function header() {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><div class="utility-bar"><div class="container utility-inner"><span>Dallas–Fort Worth vision care guide</span><a href="tel:+12145479600">Call 214-547-9600</a></div></div>
  <nav class="container nav" aria-label="Primary navigation"><a class="brand" href="${root}">${icon}<span><strong>LASIK Dallas</strong><small>Eye Surgery Guide</small></span></a>
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span><span class="sr-only">Open navigation</span></button>
  <div class="nav-links" id="nav-links"><a href="${root}">Home</a><a href="${root}about/">About</a><a href="${root}articles/">Guides</a><a href="${root}contact-us/">Contact</a><a class="button button-sm" href="${root}search.html">Search</a></div></nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container footer-grid"><div><a class="brand footer-brand" href="${root}">${icon}<span><strong>LASIK Dallas</strong><small>Eye Surgery Guide</small></span></a><p>Clear, practical information for people exploring laser vision correction in Dallas–Fort Worth.</p></div>
  <div><h3>Explore</h3><a href="${root}about/">About</a><a href="${root}articles/">Patient guides</a><a href="${root}contact-us/">Contact</a><a href="${root}privacy-policy/">Privacy policy</a></div>
  <div><h3>Contact</h3><a href="tel:+12145479600">214-547-9600</a><a href="https://www.dfweyes.com" target="_blank" rel="noopener">dfweyes.com</a><span>Irving, Texas</span></div></div>
  <div class="container footer-bottom"><p>© ${new Date().getFullYear()} LASIK Dallas Eye Surgery.</p><p>Educational content only. Consult a qualified eye-care professional for medical advice.</p></div></footer>`;
}

function sourceBox(type = "lasik") {
  if (type === "exam") return `<aside class="sources"><h2>Medical reference</h2><a href="https://www.aoa.org/healthy-eyes/caring-for-your-eyes/eye-exams" target="_blank" rel="noopener">American Optometric Association: Comprehensive eye exams</a></aside>`;
  return `<aside class="sources"><h2>Medical references</h2><a href="https://www.fda.gov/medical-devices/lasik/what-are-risks-and-how-can-i-find-right-doctor-me" target="_blank" rel="noopener">FDA: LASIK risks and choosing a doctor</a><a href="https://www.fda.gov/medical-devices/lasik/lasik-surgery-checklist" target="_blank" rel="noopener">FDA: LASIK surgery checklist</a><a href="https://www.aao.org/eye-health/treatments/lasik" target="_blank" rel="noopener">American Academy of Ophthalmology: LASIK</a></aside>`;
}

function articleCard(article) {
  return `<article class="guide-card"><span class="article-label">${article.category}</span><h2><a href="${root}articles/${article.slug}/">${article.title}</a></h2><p>${article.excerpt}</p><div class="card-meta"><span>${article.date}</span><span>${article.read}</span></div><a class="card-link" href="${root}articles/${article.slug}/">Read guide</a></article>`;
}

function articlePage(article) {
  document.title = `${article.title} | LASIK Dallas Eye Surgery`;
  return `<main id="main"><header class="interior-hero article-hero"><div class="container narrow"><div class="breadcrumbs"><a href="${root}">Home</a><span>/</span><a href="${root}articles/">Guides</a></div><span class="eyebrow">${article.category}</span><h1>${article.title}</h1><p>${article.excerpt}</p><div class="article-meta"><span>${article.date}</span><span>${article.read}</span></div></div></header>
  <section class="article-layout container"><article class="article-body">${article.content}${sourceBox(article.slug === "eye-doctor-dallas" ? "exam" : "lasik")}<div class="medical-note"><strong>Medical disclaimer:</strong> This article provides general educational information and does not replace an examination, diagnosis, or advice from your own eye-care professional.</div></article>
  <aside class="article-side"><div class="side-card"><span class="eyebrow">Next step</span><h2>Prepare for a personal evaluation.</h2><p>Bring your health history, vision goals, and questions to a qualified eye-care professional.</p><a class="button" href="${root}contact-us/">Contact the eye center</a></div></aside></section>
  <section class="more-guides"><div class="container"><div class="section-heading row-heading"><div><span class="eyebrow">Keep reading</span><h2>More patient guides</h2></div><a class="text-link" href="${root}articles/">View all guides</a></div><div class="guide-grid">${articles.filter(a => a.slug !== article.slug).slice(0,3).map(articleCard).join("")}</div></div></section></main>`;
}

function listingPage(title, intro, filtered) {
  document.title = `${title} | LASIK Dallas Eye Surgery`;
  return `<main id="main"><header class="interior-hero"><div class="container"><div class="breadcrumbs"><a href="${root}">Home</a><span>/</span><span>${title}</span></div><span class="eyebrow">Patient library</span><h1>${title}</h1><p>${intro}</p></div></header><section class="section"><div class="container guide-grid">${filtered.map(articleCard).join("")}</div></section></main>`;
}

function standardPage(page) {
  const pages = {
    about: { title: "About this guide", eyebrow: "About", body: `<p class="article-lead">LASIK Dallas Eye Surgery is an educational resource for people considering laser vision correction and comprehensive eye care in the Dallas–Fort Worth area.</p><h2>Clearer information for better conversations</h2><p>The original website collected articles about LASIK, eye examinations, procedure preparation, and choosing a surgeon. This modern edition keeps those topics while organizing them into a clearer patient journey and removing outdated guarantees.</p><p>The site is connected with LaserCare Eye Center in Irving, Texas. It does not replace a personal consultation, examination, diagnosis, or medical advice.</p><h2>Our editorial approach</h2><p>Medical explanations are written in plain language and reviewed against patient information from the U.S. Food and Drug Administration, the American Academy of Ophthalmology, and the American Optometric Association. Treatment decisions should always be made with a qualified clinician who has examined your eyes.</p>${sourceBox()}` },
    privacy: { title: "Privacy policy", eyebrow: "Site information", body: `<p class="article-lead">This static website provides educational information and links to LaserCare Eye Center. It does not use an account system, advertising cookies, or an on-site database.</p><h2>Information you choose to share</h2><p>If you contact LaserCare Eye Center by telephone, email, or through an external website, the information you provide is handled by that service under its own policies. Do not include urgent or highly sensitive medical information in an unsecured message.</p><h2>Hosting and technical information</h2><p>The hosting provider may process routine technical information—such as an IP address, browser type, requested page, and access time—to deliver and secure the website. This site may load fonts from Google Fonts, which can involve a request to Google’s servers.</p><h2>External links</h2><p>This site links to third-party medical references and the LaserCare Eye Center website. Their content and privacy practices are controlled by those organizations.</p><h2>Changes</h2><p>This policy may be updated when the site’s features or services change. The clinic should review this policy before publication and whenever analytics, forms, advertising, or other data-processing tools are added.</p><p><strong>Last updated:</strong> September 30, 2026</p>` }
  };
  const p = pages[page];
  document.title = `${p.title} | LASIK Dallas Eye Surgery`;
  return `<main id="main"><header class="interior-hero compact"><div class="container narrow"><div class="breadcrumbs"><a href="${root}">Home</a><span>/</span><span>${p.title}</span></div><span class="eyebrow">${p.eyebrow}</span><h1>${p.title}</h1></div></header><section class="article-layout container"><article class="article-body">${p.body}</article><aside class="article-side"><div class="side-card"><span class="eyebrow">Dallas–Fort Worth</span><h2>Explore vision care with better questions.</h2><a class="button" href="${root}articles/">Read the guides</a></div></aside></section></main>`;
}

function contactPage() {
  document.title = "Contact Us | LASIK Dallas Eye Surgery";
  return `<main id="main"><header class="interior-hero compact"><div class="container"><div class="breadcrumbs"><a href="${root}">Home</a><span>/</span><span>Contact</span></div><span class="eyebrow">Contact</span><h1>Start with a conversation.</h1><p>Reach LaserCare Eye Center in Irving for scheduling and personal eye-care questions.</p></div></header><section class="section"><div class="container contact-grid"><div class="contact-details"><span class="eyebrow">LaserCare Eye Center</span><h2>Irving, Texas</h2><p>440 W Interstate 635, Suite 300<br>Irving, TX 75063</p><a class="contact-line" href="tel:+12145479600"><span>Phone</span><strong>214-547-9600</strong></a><a class="contact-line" href="https://www.dfweyes.com" target="_blank" rel="noopener"><span>Website</span><strong>dfweyes.com</strong></a><p class="medical-note">For a medical emergency or sudden severe vision change, seek urgent medical care. Do not use this page for emergencies.</p></div>
  <form class="contact-form" id="contact-form"><h2>Send a message</h2><p>This static form opens your email application with your message prepared.</p><label>Name<input name="name" required autocomplete="name"></label><label>Email<input type="email" name="email" required autocomplete="email"></label><label>Subject<input name="subject" required></label><label>Message<textarea name="message" rows="6" required></textarea></label><button class="button" type="submit">Prepare email</button><p class="form-status" role="status"></p></form></div></section></main>`;
}

function searchPage() {
  document.title = "Search | LASIK Dallas Eye Surgery";
  return `<main id="main"><header class="interior-hero compact"><div class="container"><div class="breadcrumbs"><a href="${root}">Home</a><span>/</span><span>Search</span></div><span class="eyebrow">Search the guide</span><h1>What would you like to understand?</h1><form class="search-form" id="search-form"><label class="sr-only" for="search-input">Search articles</label><input id="search-input" type="search" placeholder="Try “choosing a surgeon”" autocomplete="off"><button class="button" type="submit">Search</button></form></div></header><section class="section"><div class="container"><p class="results-count" id="results-count">All six patient guides</p><div class="guide-grid" id="search-results">${articles.map(articleCard).join("")}</div></div></section></main>`;
}

function notFoundPage() {
  document.title = "Page Not Found | LASIK Dallas Eye Surgery";
  return `<main id="main"><header class="interior-hero"><div class="container narrow"><span class="eyebrow">404</span><h1>We couldn’t find that page.</h1><p>The address may have changed during the site redesign. Search the patient guides or return to the homepage.</p><div class="hero-actions"><a class="button" href="${root}">Return home</a><a class="button button-outline" href="${root}search.html">Search guides</a></div></div></header></main>`;
}

let content = "";
if (view === "article") content = articlePage(articles.find(a => a.slug === slug));
else if (view === "articles") content = listingPage("Patient guides", "Browse every article from the original LASIK Dallas Eye Surgery library, rewritten and organized for clearer reading.", articles);
else if (view === "category") { const c = categories[slug]; content = listingPage(c.title, `Articles filed under ${c.title}.`, articles.filter(a => c.slugs.includes(a.slug))); }
else if (view === "tag") content = listingPage(`Tag: ${tags[slug]}`, `Articles related to ${tags[slug]}.`, articles.filter(a => a.tags.includes(slug)));
else if (view === "author") content = listingPage("Articles by LASIK Dallas Eye Surgery", "The complete patient education archive.", articles);
else if (view === "archive") { const isJan = slug === "2011-01"; content = listingPage(isJan ? "January 2011 archive" : "December 2010 archive", "Legacy archive view from the original website.", isJan ? articles.slice(0,5) : articles.slice(5)); }
else if (view === "about") content = standardPage("about");
else if (view === "privacy") content = standardPage("privacy");
else if (view === "contact") content = contactPage();
else if (view === "search") content = searchPage();
else if (view === "notfound") content = notFoundPage();

document.querySelector("#app").innerHTML = header() + content + footer();

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); navLinks.classList.toggle('open', !open); document.body.classList.toggle('menu-open', !open); });
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menuButton?.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('open'); document.body.classList.remove('menu-open'); }));

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`${data.get('subject')} — website message from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  document.querySelector('.form-status').textContent = 'Your email application should open with the message prepared.';
  window.location.href = `mailto:natemueller@gmail.com?subject=${subject}&body=${body}`;
});

const searchForm = document.querySelector('#search-form');
searchForm?.addEventListener('submit', event => event.preventDefault());
document.querySelector('#search-input')?.addEventListener('input', event => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = articles.filter(a => `${a.title} ${a.category} ${a.excerpt} ${a.content.replace(/<[^>]+>/g, ' ')}`.toLowerCase().includes(query));
  document.querySelector('#search-results').innerHTML = filtered.length ? filtered.map(articleCard).join('') : `<div class="empty-state"><h2>No guides found</h2><p>Try a broader term such as “LASIK,” “exam,” or “surgeon.”</p></div>`;
  document.querySelector('#results-count').textContent = query ? `${filtered.length} result${filtered.length === 1 ? '' : 's'} for “${event.target.value}”` : 'All six patient guides';
});
