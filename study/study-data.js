/* =====================================================
   ASIM TECH STUDY
   Central Study Database
   ===================================================== */

const STUDY_DATA = {

  /* ================= CLASS 5 ================= */

  "5": {
    title: "Class 5",

    subjects: {

      "বাংলা": {
        icon: "📖",
        chapters: [

          {
            id: "bn5-01",
            title: "ছেলেবেলা",
            type: "পাঠ",

            summary:
              "এই অধ্যায়ে লেখকের শৈশবের বিভিন্ন অভিজ্ঞতা, অনুভূতি ও স্মৃতির পরিচয় পাওয়া যায়।",

            goals: [
              "পাঠটির মূল বক্তব্য বুঝতে পারা",
              "শৈশবের অভিজ্ঞতার গুরুত্ব বোঝা",
              "গুরুত্বপূর্ণ শব্দ ও ভাব চিহ্নিত করা"
            ],

            points: [
              "লেখকের শৈশবের স্মৃতি পাঠটির গুরুত্বপূর্ণ বিষয়।",
              "পরিবেশ ও অভিজ্ঞতা শিশুমনে গভীর প্রভাব ফেলে।",
              "পাঠটি মন দিয়ে পড়ে মূল ঘটনাগুলি মনে রাখতে হবে।"
            ],

            note:
              "পরীক্ষার আগে লেখক পরিচিতি, মূল বক্তব্য এবং গুরুত্বপূর্ণ ঘটনাগুলি পুনরাবৃত্তি করো।",

            mcq: [
              {
                q: "‘ছেলেবেলা’ পাঠে প্রধানত কোন সময়ের কথা বলা হয়েছে?",
                options: [
                  "শৈশব",
                  "বার্ধক্য",
                  "কর্মজীবন",
                  "ভবিষ্যৎ"
                ],
                answer: 0,
                explanation:
                  "পাঠটির কেন্দ্রীয় বিষয় লেখকের শৈশবের স্মৃতি ও অভিজ্ঞতা।"
              },

              {
                q: "শৈশবের স্মৃতি সাধারণত কী প্রকাশ করে?",
                options: [
                  "অতীতের অভিজ্ঞতা",
                  "শুধু ভবিষ্যৎ পরিকল্পনা",
                  "গাণিতিক হিসাব",
                  "বৈজ্ঞানিক সূত্র"
                ],
                answer: 0,
                explanation:
                  "শৈশবের স্মৃতির মাধ্যমে অতীতের অভিজ্ঞতা ও অনুভূতি প্রকাশ পায়।"
              }
            ]
          },

          {
            id: "bn5-02",
            title: "একলা",
            type: "পাঠ",

            summary:
              "এই পাঠটি শিক্ষার্থীদের ভাষাবোধ, পাঠের অর্থ এবং ভাব বুঝতে সাহায্য করে।",

            goals: [
              "পাঠের মূলভাব বোঝা",
              "নতুন শব্দ শেখা",
              "প্রশ্নের উত্তর নিজের ভাষায় লিখতে শেখা"
            ],

            points: [
              "পাঠটি প্রথমে সম্পূর্ণ পড়তে হবে।",
              "অজানা শব্দ আলাদা করে লিখতে হবে।",
              "মূল বক্তব্য নিজের ভাষায় বলার চেষ্টা করতে হবে।"
            ],

            note:
              "পাঠের গুরুত্বপূর্ণ লাইন মুখস্থ না করে তার অর্থ বোঝার চেষ্টা করো।",

            mcq: []
          },

          {
            id: "bn5-03",
            title: "বুনোহাঁস",
            type: "গল্প",

            summary:
              "বুনোহাঁস সম্পর্কিত এই পাঠে প্রকৃতি, পাখির জীবন ও তাদের চলাচল সম্পর্কে শিক্ষার্থীদের ধারণা তৈরি হয়।",

            goals: [
              "গল্পের বিষয়বস্তু বুঝতে পারা",
              "বুনোহাঁস সম্পর্কে ধারণা পাওয়া",
              "প্রকৃতি ও প্রাণিজগত সম্পর্কে আগ্রহ তৈরি করা"
            ],

            points: [
              "বুনোহাঁস একটি পরিযায়ী পাখি হিসেবে পরিচিত।",
              "ঋতু ও পরিবেশের পরিবর্তনের সঙ্গে পাখির চলাচলের সম্পর্ক আছে।",
              "গল্পের ঘটনাক্রম মনে রাখা গুরুত্বপূর্ণ।"
            ],

            note:
              "গল্পের চরিত্র, ঘটনা এবং বুনোহাঁস সম্পর্কিত তথ্য আলাদা করে লিখে রাখো।",

            mcq: [
              {
                q: "বুনোহাঁস কী ধরনের পাখি হিসেবে পরিচিত?",
                options: [
                  "পরিযায়ী পাখি",
                  "গৃহপালিত পাখি",
                  "শিকারি পাখি",
                  "উড়তে না-পারা পাখি"
                ],
                answer: 0,
                explanation:
                  "বুনোহাঁস বিভিন্ন সময়ে এক অঞ্চল থেকে অন্য অঞ্চলে পরিযান করে।"
              },

              {
                q: "পাখির পরিযানের সঙ্গে কোন বিষয়টির সম্পর্ক রয়েছে?",
                options: [
                  "ঋতু ও পরিবেশ",
                  "শুধু বই",
                  "শুধু খেলাধুলা",
                  "শুধু বিদ্যালয়"
                ],
                answer: 0,
                explanation:
                  "ঋতু, আবহাওয়া এবং খাদ্যের প্রাপ্যতা পরিযানের গুরুত্বপূর্ণ কারণ।"
              }
            ]
          }

        ]
      },


      /* ================= MATHEMATICS ================= */

      "গণিত": {
        icon: "➗",

        chapters: [

          {
            id: "math5-01",
            title: "সংখ্যা",
            type: "গণিত",

            summary:
              "এই অধ্যায়ে সংখ্যা, স্থানীয় মান, তুলনা এবং সংখ্যার বিভিন্ন ব্যবহার শেখা হবে।",

            goals: [
              "সংখ্যা পড়তে ও লিখতে শেখা",
              "স্থানীয় মান বুঝতে পারা",
              "সংখ্যার তুলনা করতে পারা"
            ],

            points: [
              "সংখ্যার প্রতিটি অঙ্কের একটি স্থানীয় মান থাকে।",
              "বড় ও ছোট সংখ্যা তুলনা করতে অঙ্কের সংখ্যা ও স্থানীয় মান দেখা হয়।",
              "অনুশীলনের মাধ্যমে দ্রুত হিসাব করার দক্ষতা বাড়ে।"
            ],

            note:
              "প্রতিদিন কয়েকটি সংখ্যা কথায় এবং অঙ্কে লেখার অভ্যাস করো।",

            mcq: [

              {
                q: "999-এর পরের সংখ্যা কোনটি?",
                options: [
                  "1000",
                  "998",
                  "990",
                  "9990"
                ],
                answer: 0,
                explanation:
                  "999-এর সঙ্গে 1 যোগ করলে 1000 হয়।"
              },

              {
                q: "500 + 200 = ?",
                options: [
                  "600",
                  "700",
                  "800",
                  "900"
                ],
                answer: 1,
                explanation:
                  "500 + 200 = 700।"
              },

              {
                q: "1000 - 1 = ?",
                options: [
                  "999",
                  "990",
                  "100",
                  "1001"
                ],
                answer: 0,
                explanation:
                  "1000 থেকে 1 বাদ দিলে 999 হয়।"
              },

              {
                q: "কোন সংখ্যাটি সবচেয়ে বড়?",
                options: [
                  "125",
                  "152",
                  "215",
                  "251"
                ],
                answer: 3,
                explanation:
                  "251-এর শতকের ঘরে 2 আছে এবং বাকি সংখ্যাগুলির তুলনায় এটি সবচেয়ে বড়।"
              },

              {
                q: "10 × 10 = ?",
                options: [
                  "20",
                  "50",
                  "100",
                  "1000"
                ],
                answer: 2,
                explanation:
                  "10-কে 10 বার নিলে 100 হয়।"
              }

            ]
          },

          {
            id: "math5-02",
            title: "যোগ ও বিয়োগ",
            type: "গণিত",

            summary:
              "এই অধ্যায়ে বিভিন্ন সংখ্যার যোগ ও বিয়োগ এবং দৈনন্দিন জীবনে তার ব্যবহার শেখা হবে।",

            goals: [
              "সঠিকভাবে যোগ করা",
              "সঠিকভাবে বিয়োগ করা",
              "শব্দের সমস্যা সমাধান করা"
            ],

            points: [
              "যোগের সময় একই স্থানীয় মানের অঙ্ক একই কলামে রাখতে হয়।",
              "বিয়োগের ক্ষেত্রেও স্থানীয় মান গুরুত্বপূর্ণ।",
              "উত্তর যাচাই করার অভ্যাস করা উচিত।"
            ],

            note:
              "যোগ ও বিয়োগের অঙ্ক খাতায় ধাপে ধাপে করো।",

            mcq: []
          },

          {
            id: "math5-03",
            title: "গুণ ও ভাগ",
            type: "গণিত",

            summary:
              "গুণ ও ভাগের মৌলিক ধারণা এবং বিভিন্ন সমস্যায় তার ব্যবহার এই অধ্যায়ের বিষয়।",

            goals: [
              "নামতা ব্যবহার করতে পারা",
              "গুণ করতে শেখা",
              "ভাগের ধারণা বোঝা"
            ],

            points: [
              "গুণ হলো পুনরাবৃত্ত যোগের একটি সহজ পদ্ধতি।",
              "ভাগের মাধ্যমে সমান অংশে বণ্টন করা যায়।",
              "নামতা ভালোভাবে জানা প্রয়োজন।"
            ],

            note:
              "প্রতিদিন অন্তত 2 থেকে 20 পর্যন্ত নামতা অনুশীলন করো।",

            mcq: []
          },

          {
            id: "math5-04",
            title: "ভগ্নাংশ",
            type: "গণিত",

            summary:
              "কোনো সম্পূর্ণ বস্তুর অংশকে ভগ্নাংশের মাধ্যমে প্রকাশ করা যায়।",

            goals: [
              "লব ও হর চিনতে শেখা",
              "সহজ ভগ্নাংশ বুঝতে পারা",
              "ভগ্নাংশের তুলনা করা"
            ],

            points: [
              "ভগ্নাংশের উপরের সংখ্যাকে লব বলে।",
              "নিচের সংখ্যাকে হর বলে।",
              "হর সমান হলে বড় লবের ভগ্নাংশ বড়।"
            ],

            note:
              "চিত্র এঁকে ভগ্নাংশ বোঝার চেষ্টা করলে বিষয়টি সহজ হয়।",

            mcq: [

              {
                q: "1/2 ভগ্নাংশে লব কত?",
                options: [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                answer: 0,
                explanation:
                  "ভগ্নাংশের উপরের সংখ্যাটি লব। তাই 1/2-এর লব 1।"
              },

              {
                q: "1/2 ভগ্নাংশে হর কত?",
                options: [
                  "1",
                  "2",
                  "5",
                  "10"
                ],
                answer: 1,
                explanation:
                  "ভগ্নাংশের নিচের সংখ্যাটি হর। তাই এখানে হর 2।"
              },

              {
                q: "কোনটি অর্ধেক বোঝায়?",
                options: [
                  "1/2",
                  "1/3",
                  "1/4",
                  "1/5"
                ],
                answer: 0,
                explanation:
                  "1/2 অর্থ একটি সম্পূর্ণ বস্তুর দুই সমান অংশের একটি।"
              }

            ]
          }

        ]
      },


      /* ================= ENGLISH ================= */

      "English": {
        icon: "🔤",

        chapters: [

          {
            id: "eng5-01",
            title: "Reading",
            type: "English",

            summary:
              "This section develops reading and comprehension skills.",

            goals: [
              "Read clearly",
              "Understand the passage",
              "Answer comprehension questions"
            ],

            points: [
              "Read the passage carefully.",
              "Find important words.",
              "Answer in complete sentences."
            ],

            note:
              "Read a short English passage every day.",

            mcq: [
              {
                q: "Which skill helps us understand a passage?",
                options: [
                  "Reading",
                  "Drawing",
                  "Running",
                  "Singing"
                ],
                answer: 0,
                explanation:
                  "Reading carefully helps us understand a passage."
              }
            ]
          },

          {
            id: "eng5-02",
            title: "Grammar",
            type: "English",

            summary:
              "Basic grammar helps students form correct English sentences.",

            goals: [
              "Understand nouns",
              "Understand verbs",
              "Make simple sentences"
            ],

            points: [
              "A noun names a person, place, animal or thing.",
              "A verb usually shows an action.",
              "A sentence should express a complete thought."
            ],

            note:
              "Write five simple English sentences every day.",

            mcq: [

              {
                q: "Which word is a noun?",
                options: [
                  "Book",
                  "Run",
                  "Quickly",
                  "Very"
                ],
                answer: 0,
                explanation:
                  "Book is the name of a thing, so it is a noun."
              },

              {
                q: "Which word is a verb?",
                options: [
                  "Boy",
                  "School",
                  "Run",
                  "Red"
                ],
                answer: 2,
                explanation:
                  "Run describes an action, so it is a verb."
              }

            ]
          }

        ]
      },


      /* ================= SCIENCE ================= */

      "বিজ্ঞান": {
        icon: "🔬",

        chapters: [

          {
            id: "sci5-01",
            title: "জীবজগৎ",
            type: "বিজ্ঞান",

            summary:
              "জীবিত বস্তু, উদ্ভিদ ও প্রাণীর বৈশিষ্ট্য সম্পর্কে প্রাথমিক ধারণা দেওয়া হয়।",

            goals: [
              "জীব ও জড়ের পার্থক্য বোঝা",
              "উদ্ভিদ ও প্রাণী চিনতে শেখা",
              "পরিবেশের গুরুত্ব বোঝা"
            ],

            points: [
              "জীবের বৃদ্ধি ঘটে।",
              "জীবের খাদ্যের প্রয়োজন হয়।",
              "জীব পরিবেশের সঙ্গে সম্পর্কিত।"
            ],

            note:
              "নিজের আশেপাশের পাঁচটি জীব ও পাঁচটি জড় বস্তুর নাম লিখে দেখো।",

            mcq: [
              {
                q: "কোনটি জীবিত?",
                options: [
                  "গাছ",
                  "পাথর",
                  "চেয়ার",
                  "কলম"
                ],
                answer: 0,
                explanation:
                  "গাছ বৃদ্ধি পায় এবং জীবনের বিভিন্ন বৈশিষ্ট্য প্রকাশ করে।"
              }
            ]
          },

          {
            id: "sci5-02",
            title: "পরিবেশ",
            type: "বিজ্ঞান",

            summary:
              "আমাদের চারপাশের জীব ও জড় উপাদান মিলেই পরিবেশ তৈরি হয়।",

            goals: [
              "পরিবেশের ধারণা বোঝা",
              "পরিবেশের উপাদান চিনতে পারা",
              "পরিবেশ রক্ষার প্রয়োজনীয়তা বোঝা"
            ],

            points: [
              "বায়ু, জল ও মাটি পরিবেশের গুরুত্বপূর্ণ অংশ।",
              "উদ্ভিদ ও প্রাণীও পরিবেশের অংশ।",
              "পরিবেশ পরিষ্কার রাখা আমাদের দায়িত্ব।"
            ],

            note:
              "নিজের বাড়ি ও বিদ্যালয়ের পরিবেশ পরিষ্কার রাখার পাঁচটি উপায় লিখে রাখো।",

            mcq: []
          }

        ]
      }

    }
  },


  /* ================= CLASS 6 ================= */

  "6": {
    title: "Class 6",

    subjects: {

      "বাংলা": {
        icon: "📖",
        chapters: [
          createBasicChapter("bn6-01", "পাঠ", "বাংলা"),
          createBasicChapter("bn6-02", "কবিতা", "বাংলা"),
          createBasicChapter("bn6-03", "ব্যাকরণ", "বাংলা")
        ]
      },

      "English": {
        icon: "🔤",
        chapters: [
          createBasicChapter("eng6-01", "Reading", "English"),
          createBasicChapter("eng6-02", "Grammar", "English"),
          createBasicChapter("eng6-03", "Writing", "English")
        ]
      },

      "গণিত": {
        icon: "➗",
        chapters: [
          createBasicChapter("math6-01", "সংখ্যা", "গণিত"),
          createBasicChapter("math6-02", "ভগ্নাংশ", "গণিত"),
          createBasicChapter("math6-03", "জ্যামিতি", "গণিত")
        ]
      },

      "বিজ্ঞান ও পরিবেশ": {
        icon: "🔬",
        chapters: [
          createBasicChapter("sci6-01", "পরিবেশ", "বিজ্ঞান"),
          createBasicChapter("sci6-02", "জীবজগৎ", "বিজ্ঞান"),
          createBasicChapter("sci6-03", "পদার্থ", "বিজ্ঞান")
        ]
      },

      "ইতিহাস ও পরিবেশ": {
        icon: "🏛️",
        chapters: [
          createBasicChapter("his6-01", "ইতিহাসের পরিচয়", "ইতিহাস")
        ]
      },

      "ভূগোল ও পরিবেশ": {
        icon: "🌍",
        chapters: [
          createBasicChapter("geo6-01", "পৃথিবী ও পরিবেশ", "ভূগোল")
        ]
      }

    }
  },


  /* ================= CLASS 7 ================= */

  "7": {
    title: "Class 7",

    subjects: createMiddleSchoolSubjects("7")
  },


  /* ================= CLASS 8 ================= */

  "8": {
    title: "Class 8",

    subjects: createMiddleSchoolSubjects("8")
  },


  /* ================= CLASS 9 ================= */

  "9": {
    title: "Class 9",

    subjects: createSecondarySubjects("9")
  },


  /* ================= CLASS 10 ================= */

  "10": {
    title: "Class 10",

    subjects: createSecondarySubjects("10")
  },


  /* ================= CLASS 11 ================= */

  "11": {
    title: "Class 11",

    subjects: createHigherSecondarySubjects("11")
  },


  /* ================= CLASS 12 ================= */

  "12": {
    title: "Class 12",

    subjects: createHigherSecondarySubjects("12")
  }

};


/* =====================================================
   HELPER FUNCTIONS
   These automatically generate basic chapter structure.
   ===================================================== */

function createBasicChapter(id, title, subject) {

  return {

    id: id,

    title: title,

    type: subject,

    summary:
      `${title} অধ্যায়ের বিস্তারিত Study Material এখানে ধাপে ধাপে যোগ করা হবে।`,

    goals: [
      "অধ্যায়ের মূল ধারণা বোঝা",
      "গুরুত্বপূর্ণ বিষয় চিহ্নিত করা",
      "পরীক্ষার জন্য প্রস্তুতি নেওয়া"
    ],

    points: [
      "অধ্যায়টি মন দিয়ে পড়ো।",
      "গুরুত্বপূর্ণ অংশ নোট করো।",
      "পড়ার পরে নিজে প্রশ্নের উত্তর দেওয়ার চেষ্টা করো।"
    ],

    note:
      "এই chapter-এর detailed study notes এবং question bank পরবর্তী database update-এ যোগ করা যাবে।",

    mcq: []
  };

}


/* ================= CLASS 7–8 ================= */

function createMiddleSchoolSubjects(cls) {

  return {

    "বাংলা": {
      icon: "📖",
      chapters: [
        createBasicChapter(`bn${cls}-01`, "পাঠ", "বাংলা"),
        createBasicChapter(`bn${cls}-02`, "কবিতা", "বাংলা"),
        createBasicChapter(`bn${cls}-03`, "ব্যাকরণ", "বাংলা")
      ]
    },

    "English": {
      icon: "🔤",
      chapters: [
        createBasicChapter(`eng${cls}-01`, "Reading", "English"),
        createBasicChapter(`eng${cls}-02`, "Grammar", "English"),
        createBasicChapter(`eng${cls}-03`, "Writing", "English")
      ]
    },

    "গণিত": {
      icon: "➗",
      chapters: [
        createBasicChapter(`math${cls}-01`, "সংখ্যা ও বীজগণিত", "গণিত"),
        createBasicChapter(`math${cls}-02`, "জ্যামিতি", "গণিত"),
        createBasicChapter(`math${cls}-03`, "পরিমিতি", "গণিত")
      ]
    },

    "বিজ্ঞান ও পরিবেশ": {
      icon: "🔬",
      chapters: [
        createBasicChapter(`sci${cls}-01`, "জীববিজ্ঞান", "বিজ্ঞান"),
        createBasicChapter(`sci${cls}-02`, "ভৌতবিজ্ঞান", "বিজ্ঞান"),
        createBasicChapter(`sci${cls}-03`, "পরিবেশ", "বিজ্ঞান")
      ]
    },

    "ইতিহাস ও পরিবেশ": {
      icon: "🏛️",
      chapters: [
        createBasicChapter(`his${cls}-01`, "ইতিহাস", "ইতিহাস")
      ]
    },

    "ভূগোল ও পরিবেশ": {
      icon: "🌍",
      chapters: [
        createBasicChapter(`geo${cls}-01`, "ভূগোল", "ভূগোল")
      ]
    }

  };

}


/* ================= CLASS 9–10 ================= */

function createSecondarySubjects(cls) {

  return {

    "বাংলা": {
      icon: "📖",
      chapters: [
        createBasicChapter(`bn${cls}-01`, "বাংলা সাহিত্য", "বাংলা"),
        createBasicChapter(`bn${cls}-02`, "বাংলা ব্যাকরণ", "বাংলা")
      ]
    },

    "English": {
      icon: "🔤",
      chapters: [
        createBasicChapter(`eng${cls}-01`, "English Text", "English"),
        createBasicChapter(`eng${cls}-02`, "Grammar & Writing", "English")
      ]
    },

    "গণিত": {
      icon: "➗",
      chapters: [
        createBasicChapter(`math${cls}-01`, "বীজগণিত", "গণিত"),
        createBasicChapter(`math${cls}-02`, "জ্যামিতি", "গণিত"),
        createBasicChapter(`math${cls}-03`, "পরিমিতি", "গণিত")
      ]
    },

    "ভৌতবিজ্ঞান ও পরিবেশ": {
      icon: "⚛️",
      chapters: [
        createBasicChapter(`phy${cls}-01`, "ভৌতবিজ্ঞান", "ভৌতবিজ্ঞান")
      ]
    },

    "জীবনবিজ্ঞান ও পরিবেশ": {
      icon: "🧬",
      chapters: [
        createBasicChapter(`bio${cls}-01`, "জীবনবিজ্ঞান", "জীবনবিজ্ঞান")
      ]
    },

    "ইতিহাস ও পরিবেশ": {
      icon: "🏛️",
      chapters: [
        createBasicChapter(`his${cls}-01`, "ইতিহাস", "ইতিহাস")
      ]
    },

    "ভূগোল ও পরিবেশ": {
      icon: "🌍",
      chapters: [
        createBasicChapter(`geo${cls}-01`, "ভূগোল", "ভূগোল")
      ]
    }

  };

}


/* ================= CLASS 11–12 ================= */

function createHigherSecondarySubjects(cls) {

  return {

    "বাংলা": {
      icon: "📖",
      chapters: [
        createBasicChapter(`bn${cls}-01`, "বাংলা", "বাংলা")
      ]
    },

    "English": {
      icon: "🔤",
      chapters: [
        createBasicChapter(`eng${cls}-01`, "English", "English")
      ]
    },

    "Physics": {
      icon: "⚛️",
      chapters: [
        createBasicChapter(`phy${cls}-01`, "Physics", "Physics")
      ]
    },

    "Chemistry": {
      icon: "🧪",
      chapters: [
        createBasicChapter(`chem${cls}-01`, "Chemistry", "Chemistry")
      ]
    },

    "Mathematics": {
      icon: "➗",
      chapters: [
        createBasicChapter(`math${cls}-01`, "Mathematics", "Mathematics")
      ]
    },

    "Biological Science": {
      icon: "🧬",
      chapters: [
        createBasicChapter(`bio${cls}-01`, "Biological Science", "Biology")
      ]
    },

    "Geography": {
      icon: "🌍",
      chapters: [
        createBasicChapter(`geo${cls}-01`, "Geography", "Geography")
      ]
    },

    "History": {
      icon: "🏛️",
      chapters: [
        createBasicChapter(`his${cls}-01`, "History", "History")
      ]
    },

    "Political Science": {
      icon: "⚖️",
      chapters: [
        createBasicChapter(`pol${cls}-01`, "Political Science", "Political Science")
      ]
    },

    "Education": {
      icon: "🎓",
      chapters: [
        createBasicChapter(`edu${cls}-01`, "Education", "Education")
      ]
    },

    "Computer Science": {
      icon: "💻",
      chapters: [
        createBasicChapter(`cs${cls}-01`, "Computer Science", "Computer Science")
      ]
    },

    "Accountancy": {
      icon: "📊",
      chapters: [
        createBasicChapter(`acc${cls}-01`, "Accountancy", "Accountancy")
      ]
    },

    "Business Studies": {
      icon: "💼",
      chapters: [
        createBasicChapter(`bus${cls}-01`, "Business Studies", "Business Studies")
      ]
    }

  };

}


/* =====================================================
   DATABASE HELPER API
   ===================================================== */

function getClasses() {

  return Object.keys(STUDY_DATA);

}


function getSubjects(className) {

  if (!STUDY_DATA[className]) return {};

  return STUDY_DATA[className].subjects;

}


function getChapters(className, subjectName) {

  const subjects = getSubjects(className);

  if (!subjects[subjectName]) return [];

  return subjects[subjectName].chapters;

}


function getChapter(className, subjectName, chapterId) {

  const chapters = getChapters(className, subjectName);

  return chapters.find(chapter => chapter.id === chapterId);

}


/* =====================================================
   ASIM TECH STUDY DATABASE READY
   ===================================================== */

console.log(
  "ASIM TECH STUDY DATABASE LOADED",
  STUDY_DATA
);
