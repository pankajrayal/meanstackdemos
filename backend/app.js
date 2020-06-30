const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Method', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   res.send("Hello from express!");
//   next();
// });

app.post('/api/posts', (req, res, next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post Added Successfully!'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "810h8620n44733ey",
      title: "How anxiety helped Liam Plunkett play World Cup 2019 for England",
      content:
        'England pacer Liam Plunkett opened up on his fight with anxiety and said that overcoming it "improved me 100% as a cricketer and as a person".',
    },
    {
      id: "329r9675d23626gs",
      title:
        "Theatre owners miffed with Disney+Hotstar film releases: Very disappointing",
      content:
        "After Disney+Hotstar grand announcement of releasing 7 big-ticket Bollywood films on the platform, Carnival Cinema has expressed displeasure over the move.",
    },
    {
      id: "138k6917i54441fo",
      title:
        "Govt to ban 59 Chinese apps including TikTok as border tensions simmer in Ladakh",
      content:
        "As tensions along the Line of Actual Control (LAC) with China continues, the Government of India has decided to ban on 59 Chinese apps, including Tik Tok.",
    },
    {
      id: "219b1340b97204qh",
      title:
        "Exclusive: What do 111 doctors think about life returning to normal",
      content:
        "India first doctors survey on Covid crisis is here. India Today surveyed 111 top doctors to get their sense on various questions that come on your mind about coronavirus and life returning to normalcy.",
    },
    {
      id: "868l1891f48318cs",
      title:
        "TN deaths: RJ Suchitra reveals horrifying details of police torture",
      content:
        "Radio Jockey Suchitra, whose video explaining the custodial deaths of Tuticorins Jeyaraj and Bennicks went viral last week, speaks to India Today, revealing horrifying details of the alleged brutal torture the father-son duo suffered at the hands of the Tamil Nadu police.",
    },
    {
      id: "236s4651h54658ge",
      title: "Manoj Bajpayee powers Bhonsle, a story of degeneration and decay",
      content:
        "Manoj Bajpayee carries Bhonsle on his stooping but able shoulders in this Devashish Makhija film.",
    },
    {
      id: "642k4024a62349qz",
      title:
        "6 reasons why Noida should allow home isolation | A Covid positive resident speaks",
      content:
        "A coronavirus positive patient says Noida should get rid of the mandatory clause of institutional quarantine and that home isolation should be an option like Delhi.",
    },
    {
      id: "144a6583n75236al",
      title: "Laxmmi Bomb to Sadak 2: Disney+Hotstar brings Bollywood home",
      content:
        "Disney+Hotstar in a virtual press meet on Monday announced seven Bollywood films to be released on the OTT platform. While Akshay Kumar, Alia Bhatt and Ajay Devgn spoke at length about their films, Vidyut Jammwal and Kunal Kemmu were not a part of the same.",
    },
    {
      id: "385d9915a30466vn",
      title:
        "Kunal Kemmu hits out at Disney+Hotstar over Lootcase snub: Bas maidaan barabar de do",
      content:
        "Kunal Kemmu took to Twitter to react over Disney+Hotstars Lootcase snub. The film will soon begin streaming on the OTT platform.",
    },
    {
      id: "991s9703p97836yl",
      title:
        "BCCI keeping a close watch on known corruptor Ravinder Dandiwal: ACU chief",
      content:
        "BCCI anti-corruption chief Ajit Singh said that Ravinder Dandiwal was very much part of boards education manual and participants are shown his pictures and told about his modus operandi.",
    },
    {
      id: "391m4573i41670di",
      title:
        "Manchester City defender Benjamin Mendy hopes to visit India soon",
      content:
        "Benjamin Mendy joined Manchester City from Ligue 1 team Monaco in 2017 July on a five-year contract, but in September, the defender injured his knee during a match against Crystal Palace.",
    },
    {
      id: "154l5312s62551av",
      title: "Bhabi Ji Ghar Par Hain team excited to resume shoot",
      content:
        "Aasif Sheikh, Rohitashv Gour and Shubhnagi Atre are glad to return to the sets of Bhabiji Ghar Par Hain.",
    },
    {
      id: "355d8385i18044bb",
      title:
        "UP: 14 districts make 60% of total active coronavirus cases, govt to begin rapid antigen testing",
      content:
        "Noida, Ghaziabad, Lucknow, Meerut, Hapur, Aligarh, Bulandshahr, Varanasi, Etawah, Mathura, Agra, Moradabad and Gorakhpur are among the 14 districts in Uttar Pradesh which account for 60% of the total number of active coronavirus cases in the state.",
    },
    {
      id: "558f4341k21436el",
      title:
        "Thunderstorm, strong winds in Delhi-NCR, light to moderate rain expected",
      content:
        "Delhi and adjoining areas of the capital witnessed a thunderstorm and will likely see light to moderate rain on Monday evening.",
    },
    {
      id: "651h5364h79085si",
      title:
        "English FA cuts 82 jobs as Covid-19 pandemic wipes out Wembley events",
      content:
        "Wembley Stadium, which is owned by the FA, was due to be staging seven games at the European Championship including the semifinals and finals next month but the tournament was postponed by a year.",
    },
    {
      id: "720i1852j69368ch",
      title:
        "Fans rally behind Sir Ravindra Jadeja after comparisons with Krunal Pandya pops up",
      content:
        "Ravindra Jadeja started trending on social media on Monday after a debate involving him and Krunal Pandya created a buzz.",
    },
    {
      id: "478l1869n50708uz",
      title: "Myanmar: UN warns of intensified fighting in Rakhine state",
      content:
        "The United Nations has warned of intensified fighting between army and insurgents in Myanmar Rakhine state. The military has been battling the Arakan Army (AA) - a rebel group seeking more autonomy for ethnic Rakhine Buddhists - in Myanmar Rakhine and Chin states since January last year.",
    },
    {
      id: "822v4366w11582mq",
      title: "Anavila Misra donates masks to Post Master General",
      content:
        "Mumbai-based designer, Anavila Misra has donated face masks for local post personnel.",
    },
    {
      id: "588b9824p50097cw",
      title:
        "Ian Botham claims he had coronavirus and mistook Covid-19 for bad flu",
      content:
        "Ian Botham has claimed that he got infected coronavirus but did not realise and took it as flu. The contagious disease has infected over 10 million people worldwide, killing more than 500,000.",
    },
    {
      id: "449m4967s12579qp",
      title: "South Africa get go ahead from government to resume training",
      content:
        "Cricket South Africa will be meeting on Thursday to discuss the road ahead for resumption with the focus on getting the men and women national teams back to training.",
    },
    {
      id: "704v9155n93166hn",
      title:
        "Financial, energy stocks drag Sensex. Nifty as virus spread weighs",
      content:
        "The NSE Nifty 50 index closed 0.68% lower at 10,312.4, while the benchmark S&P BSE Sensex was down 0.6% at 34,961.52, after sliding as much as 1.5% earlier in the session.",
    },
    {
      id: "671p3244d33776cs",
      title: "Happy Birthday Harish Kalyan: South celebs wish the young actor",
      content:
        "Actor Harish Kalyan is celebrating his 30th birthday today (June 29). His friends and colleagues from the industry have flooded social media with their wishes.",
    },
    {
      id: "931b1548l74712xr",
      title: "Manchester United dont expect teenager Angel Gomes to stay",
      content:
        "Angel Gomes, who has been linked to Chelsea, is all set to leave Manchester United after failing to agree on a new contract.",
    },
    {
      id: "965x7023s57673fy",
      title: "Starbucks pauses social media ads as it targets hate speech",
      content:
        'The coffee-selling giant Starbucks said, "We will pause advertising on all social media platforms while we continue discussions internally, with our media partners and with civil rights organizations in the effort to stop the spread of hate speech."',
    },
  ];
  return res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
