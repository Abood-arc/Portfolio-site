import qubixStorefront from '../assets/projects/qubix-storefront.jpg'
import qubixAdmin from '../assets/projects/qubix-admin.jpg'
import qubixSaudi from '../assets/projects/qubix-saudi.jpg'
import qubixAssistant from '../assets/projects/qubix-assistant.jpg'
import qubixAutomation from '../assets/projects/qubix-automation.jpg'
import qubixJbTheme from '../assets/projects/qubix-jb-theme.jpg'
import tassawurImg from '../assets/projects/tassawur.jpg'
import heartsyncImg from '../assets/projects/heartsync.jpg'
import sublingoImg from '../assets/projects/sublingo.jpg'

export const projects = [
  {
    slug: 'qubix',
    title: 'Qubix',
    subtitle: 'Full-stack ecommerce, start to deployed',
    summary: "Full storefront and admin panel for a client's bag business, built and deployed to production at jjbags.in, including hand-configured Docker/Caddy infrastructure. Owned end-to-end.",
    kind: 'Client project',
    status: 'Live in production',
    statusDetail: 'Live at jjbags.in (India) and jj-bags.com (Saudi Arabia). I maintain both.',
    stack: ['Laravel', 'PHP', 'Vue 3', 'MySQL', 'Redis', 'Elasticsearch', 'Docker', 'Caddy'],
    links: [
      { label: 'jjbags.in', href: 'https://jjbags.in' },
      { label: 'jj-bags.com', href: 'https://jj-bags.com' },
      { label: 'Source on GitHub', href: 'https://github.com/Abood-arc/qubix-laravel-ecommerce' },
    ],
    image: {
      src: qubixStorefront,
      alt: 'The jjbags.in storefront homepage with a jute bag banner',
      caption: 'The jjbags.in storefront, live in production.',
    },
    gallery: [
      {
        label: 'Storefront',
        src: qubixStorefront,
        alt: 'The jjbags.in storefront homepage with a jute bag banner',
        caption: 'The jjbags.in storefront, live in production.',
      },
      {
        label: 'Assistant',
        src: qubixAssistant,
        alt: 'The JJ Bag Assistant chat open on jjbags.in, answering a question about jute bags',
        caption: 'The chat assistant on jjbags.in, powered by Zanderio AI.',
      },
      {
        label: 'Automation',
        src: qubixAutomation,
        alt: 'An n8n workflow with deploy over SSH, Caddy setup, credentials email and teardown steps',
        caption: 'An n8n workflow with deploy, Caddy, credentials-email and teardown steps.',
        fit: 'contain',
      },
      {
        label: 'JB Bags',
        src: qubixJbTheme,
        alt: 'The JB Bags storefront with a Premium Jute Bags banner and featured products',
        caption: 'The JB Bags storefront design.',
      },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "A client with a physical bag store wanted to move online. Not replace the shop, expand coverage, cut overhead. The scope was open-ended — I had to define it. They gave me a reference site for what they wanted the front end to feel like. Everything else was mine to decide.",
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          "I chose Laravel and Vue because Laravel has solid ecommerce libraries and someone had built a decent starter repo in that stack. I started from that repo — basic structure, homepage, navigation — and built the actual commerce on top.",
          "Backend: Laravel 11, PHP 8.3, MySQL for data, Redis for caching and job queues, Elasticsearch for product search, Sanctum for auth. Frontend: Vue 3 with server-rendered Blade templates so products rank in Google. Docker containerized it.",
          "The flow: admin logs in, creates a product. It gets indexed in Elasticsearch, cache clears. Customer visits, Laravel serves rendered HTML, Vue hydrates it. They search, filter, add to cart, checkout. Order goes into the database.",
          "During testing I found a race condition — concurrent orders could oversell inventory. Implemented locking to fix it.",
          "I kept it as a Blade + Vue hybrid instead of splitting into a pure API backend and SPA. That hybrid works here: 27 Vue components, 485 Blade templates. Shipped fast, handles SEO, adds interactivity where it matters. Splitting it would be engineering for scale we don't have yet.",
        ],
      },
      {
        heading: 'What came of it',
        paragraphs: [
          "The site is live at jjbags.in — 45+ days, zero downtime. It's handled 356 orders worth Rs 1,24,580 so far. Customers can browse and order, client hasn't raised issues, and I'm maintaining it.",
          "I later built and shipped a second storefront for the same client: jj-bags.com, a fully separate deployment for the Saudi market. Separate containers, separate database, separate checkout — the Saudi launch never touched the live India store. Everything's in Arabic with a proper right-to-left layout, not just translated text: checkout, order emails, even the admin panel. Saudi-specific fields (15-digit VAT number, all 13 regions, SAR currency), an Arabic web font that loads automatically under RTL, and UI that flips direction correctly for Arabic readers. Same stack — Laravel, Vue, Docker, Caddy — on the same VPS behind the shared reverse proxy, with its own SSL and nightly backups, at zero added infrastructure cost.",
          "Two live stores, two markets, zero shared risk between them.",
        ],
        figures: [
          {
            src: qubixAdmin,
            alt: 'The jjbags.in admin dashboard showing Rs 1,24,580 in total sales, 356 orders and 289 customers',
            caption: 'The admin dashboard, 2 Aug – 1 Sep 2026: 356 orders, Rs 1,24,580 in sales, 289 customers.',
          },
          {
            src: qubixSaudi,
            alt: 'The jj-bags.com storefront in Arabic, laid out right-to-left with prices in SAR',
            caption: 'jj-bags.com, the Saudi storefront: right-to-left, in Arabic, priced in SAR.',
          },
        ],
      },
      {
        heading: 'Next time',
        paragraphs: [
          "I'd only move to API-first if I actually hit those constraints: 500+ Vue components, separate frontend teams, or a mobile app needing the same backend. For this scale, the Blade + Vue hybrid was the right call.",
        ],
      },
    ],
  },
  {
    slug: 'tassawur',
    title: 'Tassawur',
    subtitle: 'Prompt to video, cheaply',
    summary: "Chains video-model calls into one continuous clip by feeding each clip's last frame back in as the next call's init frame, keeping character and motion consistent across calls that otherwise share no memory.",
    kind: 'Personal project',
    status: 'Runs locally',
    statusDetail: 'Working pipeline that runs locally. Not hosted; it stalled when the free model credits ran out.',
    stack: ['Node.js', 'Express', 'BullMQ', 'Redis', 'MongoDB', 'Groq (DeepSeek)', 'SDXL', 'Wan I2V', 'CLIP', 'Modal'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Abood-arc/Ai-cinematic-video-Generator-' },
    ],
    image: {
      src: tassawurImg,
      alt: "VS Code showing Tassawur's generated SDXL images and Wan video files, with two output frames of an animated scooter rider",
      caption: 'Real pipeline output on disk: SDXL frames and Wan video files.',
    },
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "Most AI-generated video I'd tried looked like four unrelated clips wearing the same character's face. I wanted to know if that was fixable without paying for the expensive models that get it right — and I wanted one project on my CV that wasn't a wrapper around someone else's API.",
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          "Tassawur takes a rough prompt, refines it, generates an image, and generates a video — three separate models, chained through a pipeline I built to survive failure without burning money.",
          "The stack: text via DeepSeek, distilled, hosted on Groq. Image via SDXL. Video via Wan. I'd tried Flux-schnell through Pollination AI first — free, in theory. In practice, Pollination rate-limits by region, and mine was already maxed out. Requests hung instead of failing, which is worse than failing. I dropped it.",
          "Every retry on Modal's compute costs real credits, so I built the pipeline to tell transient errors from permanent ones. A server-overloaded response is worth retrying. A malformed JSON response or a wrong endpoint isn't. I built the classification in before I hit the cost, because I could see it coming.",
          "I also built checkpointing: the pipeline runs as a state machine, with BullMQ tracking job state, so a crash mid-run resumes from where it left off instead of re-running stages that already cost money. Same logic — designed against a cost I could see coming, not one I'd already paid.",
          "Not everything was foresight. I got a video where the character's motion didn't hold together between scenes, traced it to inconsistent images out of SDXL. Fix: generate 8 candidate images per stage instead of 4, run CLIP scoring, and pass the best-matching candidate to video. That, plus motion planning — locking speed, easing, and camera trajectory across scenes — is what keeps the output from stuttering.",
        ],
      },
      {
        heading: 'What came of it',
        paragraphs: [
          "It runs. Finished videos exist. It's not deployed anywhere — it runs locally, and it stalled when the free model credits ran out. That's the honest state: a working, self-contained pipeline, not a hosted product.",
        ],
      },
      {
        heading: 'Next time',
        paragraphs: [
          "I picked models before I understood what they were actually good at, then burned time debugging code that was fine — the model was the problem. Next time: profile capabilities first, wire in second.",
        ],
      },
    ],
  },
  {
    slug: 'heartsync',
    title: 'HeartSync',
    subtitle: 'Real-time drawing between strangers',
    summary: "Pairs two users to draw on each other's lockscreen, synced live in real time.",
    kind: 'Personal project',
    status: 'Feature-complete',
    statusDetail: 'Feature-complete. Sideloadable Android APK; not on the Play Store.',
    stack: ['React Native', 'Firebase Auth', 'Firestore', 'Realtime Database', 'Cloud Functions', 'FCM', 'Kotlin'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Abood-arc/Heartsync-App' },
    ],
    image: {
      src: heartsyncImg,
      alt: 'Two Android phones running HeartSync: a live chat on one, a shared drawing canvas on the other',
      caption: 'Two physical phones, one pairing: live chat on the left, the shared canvas on the right.',
    },
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "I saw an ad on Instagram for a drawing app where you could share sketches straight to someone's lockscreen. I thought: if I build this, it could actually go viral. So when I had time, I built it. That's the honest origin — not solving my own friction like Sublingo, not proving architectural depth like Tassawur. The real work was making sure that ambition didn't become a security liability or blow through a free-tier budget the moment real users showed up.",
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          "I started with identity, because everything else cascades from it. Firebase Anonymous Auth, one UID per user, used everywhere without exception — security rules only work if there's exactly one unambiguous ID per person.",
          "Pairing came next, and I made it server-authoritative from day one, not client-trusted. A transactional, idempotent Cloud Function means you can double-tap \"accept\" and never get a torn or duplicated state. Slower to build than letting one device write directly into the other person's record, but it's the only version that survives real security rules.",
          "I shipped pairing as exclusive — one active partner at a time — then realized that's not how people actually want to use this; it's closer to a contact list. I reversed it: each pairing became its own independent session, and tore out the \"single partner\" pointer I'd already built. That wasn't the plan from day one — it was a decision I revisited after seeing the exclusive version in use.",
          "Live drawing sends dozens of tiny position updates a second. Route that through a per-write-billed database and you blow through a free-tier quota in minutes. So I split the data by its actual shape: durable stuff in Firestore, ephemeral high-frequency stroke data through Firebase Realtime Database, which is priced for exactly that kind of chatty traffic. Only once that foundation was solid did I build anonymous matchmaking and the native Android piece — drawing on the lockscreen before the phone is even unlocked, which meant going into native Kotlin.",
          "The bug that stuck: notifications went silent, no crash, no error toast. I traced it by ruling things out — token valid, function firing — until I actually read what admin.messaging().send() returned instead of assuming it succeeded. The field I'd named from turned out to be reserved by FCM; using it silently killed the entire message, not just that field. Renamed it to senderId and it worked. The lesson was going back to first principles: stop assuming the SDK call succeeded, actually read what it returned.",
        ],
      },
      {
        heading: 'What came of it',
        paragraphs: [
          "The app is feature-complete and functional. The GitHub repo is here: github.com/Abood-arc/Heartsync-App — clone it, build the APK, sideload it on Android. The Firebase backend still runs on free credits, so the full stack is live.",
          "It's not published to the Play Store — the $25 fee plus ongoing Firebase hosting wasn't a cost I wanted to carry for a demo app with no users yet. If that cost weren't there, it'd be up. The engineering is complete and reviewable.",
        ],
      },
      {
        heading: 'Next time',
        paragraphs: [
          "I'd design pairing as multi-contact from day one instead of shipping the exclusive version and reversing it later. The exclusive version worked correctly for what it was, but it cost a real rewrite once I saw people actually want a contact-list model. The lesson isn't \"always build the more flexible version\" — it's that this was a foundational data-shape decision, not a surface feature, and those are worth an extra hour up front asking \"will this hold if usage looks different\" before writing code around it.",
        ],
      },
    ],
  },
  {
    slug: 'sublingo',
    title: 'Sublingo',
    subtitle: 'Translation on hover, any platform',
    summary: 'OCRs burned-in subtitles in real time via a vendored offline Tesseract.js pipeline, then overlays dictionary definitions on hover. Built for subtitles with no readable DOM text, not just standard closed captions.',
    kind: 'Personal project',
    status: 'Feature-complete',
    statusDetail: 'Feature-complete and sideloadable. Chrome Web Store submission pending.',
    stack: ['TypeScript', 'Chrome Extension', 'Shadow DOM', 'Range API', 'Tesseract.js'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Abood-arc/Sublingo' },
    ],
    image: {
      src: sublingoImg,
      alt: "Sublingo showing a dictionary popup for the word 'vocabulary' over a video's subtitles",
      caption: 'Hovering a subtitle word on a FlyRank lesson video: the definition appears over the player.',
    },
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "I was watching movies and hitting words I didn't know. Every time, I'd pause, Google it, lose track of the film. Non-native English speakers hit this constantly. So I built an extension: hover over a subtitle word, see the definition, keep watching. The real problem wasn't the translation — it was that YouTube, Netflix, and every other video platform build subtitles in ways that actively break if you try to modify them.",
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          "Netflix and YouTube re-render subtitles every 40–100 milliseconds. Inject a <span> to highlight a word and it's gone next frame. A MutationObserver misses CSS-only visibility changes. Every platform does this differently — Netflix renders captions twice internally, YouTube sometimes renders before its animation settles, and HTML5 native captions conflict with your own if you run them in parallel.",
          "Modifying the DOM directly on YouTube doesn't work. I switched to an overlay: measure word positions with the Range API, sit on top, never touch the caption DOM. Read-only cursor model — the only thing that survives constant re-rendering.",
          "From there, every choice was platform-specific and forced by constraints: absolute positioning for YouTube (captions live inside the player container), fixed positioning for Netflix (they don't). Netflix deduplicates subtitles internally, so I read only the first copy of each text node. MutationObserver missed CSS-only changes on both platforms, so polling every 250ms became the reliable signal. I set native HTML5 captions to hidden and rendered the text myself in a fake container so they wouldn't render on top of the overlay.",
          "I found most of this through manual testing — click, hover, watch if the popup closes or lands wrong, platform by platform. Slow. The Netflix duplicate-text bug, the position-watcher-breaks-hover bug, and the coordinate-mode chaos between YouTube and Netflix would all have been caught by tests checking adapter output and simulated interactions. Tests came in M7, after the bugs were already found by hand. Should've been M1.",
          "Midway through, I realized every word a user looks up is worth storing. Chrome storage holds a few thousand entries, so I built it in — every translation saved with a timestamp, browsable as a lookup history. That turned the extension from a subtitle helper into an English-learning log used passively while watching.",
        ],
      },
      {
        heading: 'What came of it',
        paragraphs: [
          "The extension is feature-complete. Clone the repo (github.com/Abood-arc/Sublingo), sideload it, test it on YouTube, Netflix, Amazon Prime, generic HTML5 video, and OCR on burned-in subtitles. Word storage and browsing UI both work.",
          "It's not published to the Chrome Web Store or Microsoft Store yet — that's marketing and documentation work, still ahead of me. The engineering is done and reviewable.",
        ],
      },
      {
        heading: 'Next time',
        paragraphs: [
          "Write tests from M1. Platform-specific bugs are invisible until you test every adapter, and manual testing is slow. Automated tests would have caught the deduplication, the hover-destruction, and the coordinate bugs immediately — a few hours of setup that would've saved days of debugging.",
        ],
      },
    ],
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(slug) {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]
}
