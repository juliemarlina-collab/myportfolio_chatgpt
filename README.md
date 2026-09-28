# Julie Marlina Hasan — Portfolio

Static HTML, CSS, JavaScript and assets for GitHub Pages. Upload the **contents of this folder** to the repository root, then enable GitHub Pages for the chosen branch and root directory. Open `index.html` locally to review.

## Landing pages

`index.html` is English and `index-ms.html` is Bahasa Melayu. The EN/BM button switches between them; each project card links to its corresponding language story page. The featured Smart MUET Guide V2 section and the four Ideas in Action cards use the shared `styles.css` and `scripts.js`. The cards name Smart MUET Guide V2, Smart DT, Gemini Notebook Web Kit and CAMP21 explicitly. Small screens show section jump links below the header.

The contact area uses the professional email in the supplied CV (`juliemarlina@polipd.edu.my`) for speaking invitations. LinkedIn remains a clearly labelled name search until a direct profile URL is provided. The downloadable four-page professional CV is `cv-julie-marlina-2026.pdf`; `cv-julie-marlina-full-record.pdf` preserves the supplied nine-page record.

## Professional Sharing

The homepage Sharing section links to `stories/gemini-webinar.html` for the 26 August 2026 POLYCC Future-Ready AI Series. Its poster and livestream image sit in `stories/`; the panel appointment and report sit in `evidence/`. The story also links to the live recording and learning kit.

Other sharing pages and the DH13 folio remain included. Keep the folder structure intact so relative links work.

## Chapter image layout

The Innovative Learning Models presentation slide is beneath “The ideas I shared” on the right. The Gemini webinar poster and live screenshot sit beneath “The invitation” and “Shared live” headings on the left. On smaller screens, each heading and image stack before its chapter text. The shared layout is defined in `stories/story.css`.

`stories/uin-sharing.html` also contains a scoped layout rule for its ISIP presentation chapter and requests a versioned `story.css` URL. Upload that HTML file and `stories/story.css` together; the scoped rule prevents the chapter title, slide and narrative from overlapping when a previous stylesheet is cached.

The BM equivalents in `stories-ms/` use the same chapter structures: the UIN title and slide appear together opposite the text, and the Gemini invitation and live images appear with their respective headings. Both languages reference the same shared story stylesheet with a versioned URL.

## Warm editorial homepage prototype

Open `prototype/index.html` for English or `prototype/index-ms.html` for BM. Both use `prototype/style.css` and `prototype/motion.js`, and link to the existing project stories, DH13 folio, portrait and CV. This is a comparison prototype: the live homepage remains `index.html` / `index-ms.html`. To adopt the prototype later, move the two prototype HTML files to the repository root, adjust their `../` asset and page paths, and move their CSS/JS to the corresponding root paths. No logos, testimonials or showreel footage are included without source assets.
