$("#catalog").on("input", function(e) {
  update($('#semester').val());
});

$("document").ready(function() {
  update($('#semester').val());
});

$("#semester").change(function() {
  update($('#semester').val());
});

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

function update(semester) {
  var input = $("#catalog").val().toUpperCase();
  var classesToDisplay = "";
  var classes = CLASSES.classes[semester].classes;
  var classArr = []
  for (var i in classes) {
    var course = classes[i];
    var toTestStr = course.department + course.number;
    if (toTestStr.indexOf(input) == 0 || input === "") {
      classArr.push(createDiv(course));
    }
  }
  classArr.sort();
  classesToDisplay = classArr.join('')
  if (classesToDisplay === "")
    classesToDisplay = "No classes found with that course code.";
  $("#displayedCourses").html(classesToDisplay);
}

function getFacilitatorsText(fs) {
  var text = "";
  text += `Facilitator${fs.length == 1 ? "" : "s"}: `;
  for (idx in fs) {
    text += `<a href="mailto:${fs[idx].email}">${fs[idx].name}</a>`;
    if (idx != fs.length - 1) text += ", ";
  }
  return text;
}

function getAdvisorText(a) {
  return `Advisor: ${a}`
}

function createDiv(cl) {
  return `<div class="row entry"> \
      <div class="six columns verticalCentering"> \
        <div class="centeredChild"> \
          <div class="title"> \
            ${cl.department}${cl.number}: ${cl.title} \
          </div> \
          <div class="facilitatorsText"> \
            ${getFacilitatorsText(cl.facilitators)}
          </div> \
          <div class="facilitatorsText"> \
            ${getAdvisorText(cl.advisor)}
          </div> \
          <a target="_blank" href="${cl.syllabus}">syllabus</a> \
          ${(cl.website == undefined) ? "" : `<br><a target="_blank" href="${cl.website}">website</a>`}
          ${
            (cl.sections == undefined) ?
            `<div class="hours">${cl.room}, ${cl.day} ${cl.time}</div>` :
            `${cl.sections.reduce((acc, curr) => `<div class="hours">${curr.room}, ${curr.day} ${curr.time}</div>` + acc, "")}`
          } \
        </div> \
      </div> \
      <div class="six columns description"> \
        ${cl.description} \
      </div> \
    </div>`;
}

var CURRENT = "spring2018";

var CLASSES = {
  classes: {
    spring17: {
      departments: ["CMSC"],
      classes: [
        {
          id: 0,
          department: "CMSC",
          number: "389K",
          title: "Full-stack Web Development with Node.js",
          facilitators: [
            { name: "Ishaan Parikh", email: "iparikh@umd.edu" },
            { name: "Sashank Thupukari", email: "sthupuka@umd.edu" }
          ],
          advisor: "Nelson Padua Perez",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to modern full-stack web development using JavaScript and Node.js. The course will start with basic HTML/CSS/JavaScript. Then, we will move into Node.js and learn how to deploy a website from there. We will learn about Express.js (server-side development module) and MongoDB (database) in order to create a complete web application.",
          syllabus: "https://github.com/UMD-CS-STICs/389Kspring17",
          room: "CSIC1120",
          day: "Friday",
          time: "3-3:50 PM"
        }
      ]
    },
    fall2017: {
      departments: ["CMSC", "MATH", "BMGT", "ENSP", "MUSC"],
      classes: [
        {
          id: 6,
          department: "ENSP",
          number: "399E",
          title:
            "The Role of Evidence-based Advocacy in Environmental Politics",
          facilitators: [
            { name: "Margaret Houlihan", email: "mhouli@terpmail.umd.edu" },
            { name: "Camilla Arias", email: "carias3@umd.edu" }
          ],
          advisor: "Joanna Goger",
          credits: 1,
          description:
            "Students will learn about and discuss tools for effective advocacy and how that fits into the policy process by looking through the lenses of deforestation, water quality, and climate change.  They will become better able to enact change in environmental movements as they see fit using principles learned throughout the semester. They will be invited to share their opinions, and reflect on the opinions of their peers. Through assignments such as emailing members of congress or reaching out to UMD Facilities Management, students will practice involving others in their advocacy as well.",
          syllabus:
            "https://www.dropbox.com/s/zm6o7igkpcnzxm0/Syllabus%20ENSP399E.pdf?dl=0",
          room: "PLS1129",
          day: "Thursday",
          time: "12:30 - 1:20 PM"
        },
        {
          id: 1,
          department: "CMSC",
          number: "389K",
          title: "Full-stack Web Development with Node.js",
          facilitators: [
            { name: "Ishaan Parikh", email: "iparikh@umd.edu" },
            { name: "Sashank Thupukari", email: "sthupuka@umd.edu" }
          ],
          advisor: "John Dickerson",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to modern full-stack web development using JavaScript and Node.js. The course will start with HTML/CSS/JavaScript. Then, we will move into Node.js and learn how to build back-end applications. Finally, we will learn about Express.js (server-side development framework) and MongoDB (database) in order to create a complete web application.",
          syllabus: "https://github.com/UMD-CS-STICs/389Kfall17",
          room: "CSIC3118",
          day: "Friday",
          time: "3-3:50 PM"
        },
        {
          id: 2,
          department: "CMSC",
          number: "389L",
          title: "Practical Cloud Computing with AWS",
          facilitators: [{ name: "Colin King", email: "colink@umd.edu" }],
          advisor: "Neil Spring",
          credits: 1,
          description:
            "This course provides a practical and project-oriented introduction to cloud computing with Amazon Web Services (AWS). Students will learn how to build applications using a variety of AWS services, including S3, EC2, Lambda, and Beanstalk. The course will culminate in a final resume-worthy project that will be built, deployed, and demoed to the class.",
          syllabus: "https://github.com/UMD-CS-STICs/389Lfall17",
          room: "CSIC3118",
          day: "Friday",
          time: "1-1:50 PM"
        },
        {
          id: 3,
          department: "CMSC",
          number: "389O",
          title: "The Coding Interview",
          facilitators: [
            { name: "Cameron Payton", email: "cpayton@umd.edu" },
            { name: "Ishaan Parikh", email: "iparikh@umd.edu" }
          ],
          advisor: "Dave Levin",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to technical interviews. The course will start with basic topics such as Big O and String Manipulation. We will then move into more complex topics such as Bit Manipulation and Dynamic Programming. Most of the classes will be in-class interviews to give real interview practice.",
          syllabus: "https://github.com/UMD-CS-STICs/389Ofall17",
          room: "CSIC3118",
          day: "Friday",
          time: "2-2:50 PM"
        },
        {
          id: 4,
          department: "BMGT",
          number: "298B",
          title: "Introduction to Product Design",
          facilitators: [
            { name: "Jordan Steiner", email: "jasteiner11@gmail.com" }
          ],
          advisor: "Pamela Armstrong",
          credits: 1,
          description:
            "This course will discuss the meaning behind design and how to communicate a message with product design. Students will interact in product discussions and understand how and why products are designed. From this, students will then apply learning to create concepts and prototypes for modern problems. Students will also get the chance to interact with real startup companies to assist in live cases to design products. Overall, students will learn and apply product design methodologies to concept a solution to a problem of their choosing.",
          syllabus:
            "https://www.dropbox.com/s/24nukb21ejyejni/product_design.pdf?dl=0",
          room: "VMH2509",
          day: "Thursday",
          time: "4-4:50 PM"
        },
        {
          id: 5,
          department: "MATH",
          number: "299N",
          title: "Mathematics of Ramanujan",
          facilitators: [
            { name: "Eric Metz", email: "emetz1618@gmail.com" },
            { name: "Tanay Wakhare", email: "twakhare@gmail.com" }
          ],
          advisor: "Lawrence Washington",
          credits: 1,
          description:
            "Srinivasan Ramanujan was born in rural India in 1887. Learning from a single book of theorems, he was able to rederive much of modern mathematics. After writing his first paper at 17, he recorded hundreds of pages of formulae that are still being explored today.  This course is meant to explain some of those results, and how they fit into modern number theory research today. This is not proof based; instead, this course is focused on presenting results and context.",
          syllabus:
            "https://www.dropbox.com/s/aaznuhcdppx05gf/MATH%20299N.pdf?dl=0",
          room: "MTH0405",
          day: "Friday",
          time: "3-3:50 PM"
        },

        {
          id: 7,
          department: "MUSC",
          number: "248D",
          title: "Rapping it Up: An Analysis of Hip Hop Music",
          facilitators: [
            { name: "Yannick Alexis", email: "yalexis@umd.edu" },
            { name: "Jordan Weber", email: "weberjordant@gmail.com" }
          ],
          advisor: "Richard King",
          credits: 1,
          description:
            "This course will discuss the history and analyze the evolution of Hip Hop and rap music from it’s early stages in the Nineteen Eighties to the Present day. Students will interact in class discussions and gain an understanding for the different sounds, messages, and impacts ofvarying Hip Hop artists and styles. From this, students will then apply learning from in class discussion by exploring previously unheard music and articulating their opinions. Throughout the course students will reflect on the value of Hip Hop to society and how it affects culture. Students will also get the chance to interact with local Hip-Hop artists as well as write and perform their own art as an extended learning opportunity to connect with the art form. Overall, students will learn and evaluate the intricacies of Hip Hop music and it’s importance to society.",
          syllabus:
            "https://www.dropbox.com/s/34bg31tbi0fx7lr/musc248d.pdf?dl=0",
          room: "PAC3160",
          day: "Thursday",
          time: "12:30 - 1:45 PM"
        }
      ]
    },
    spring2018: {
      departments: ["CMSC", "MATH", "BMGT", "ENSP", "MUSC"],
      classes: [
        {
          id: 8,
          department: "CMSC",
          number: "389C",
          title:
            "Bitcoin and Other Cryptocurrencies",
          facilitators: [
            { name: "Cameron Payton", email: "cpayton@umd.edu" },
            { name: "Neil Johnson", email: "nj13127@gmail.com" }
          ],
          advisor: "Jonathan Katz",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to the technology behind cryptocurrency and the economy surrounding it. This course will have a heavy emphasis on Bitcoin, but will touch on other types of cryptocurrency as well. This course is primarily intended to focus on the technological aspect of cryptocurrency, but we will also spend time discussing the economics of cryptocurrency.",
          syllabus:
            "https://github.com/UMD-CS-STICs/389Cspring18",
          room: "CSIC3118",
          day: "Friday",
          time: "2:00 - 2:50 PM"
        },
        {
          id: 9,
          department: "CMSC",
          number: "389K",
          title:
            "Full-Stack Web Development with Node.js",
          facilitators: [
            { name: "Timothy Chen", email: "tchen112@terpmail.umd.edu" },
            { name: "Allen Cheng", email: "ac@allencheng.me" }
          ],
          advisor: "Dr. John Dickerson",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to modern full-stack web development using JavaScript and Node.js. The course will start with basic HTML/CSS/JavaScript. Then, we will move into Node.js and learn how to deploy a website from there. We will learn about Express.js (server-side development module) and MongoDB (database) in order to create a complete web application.",
          syllabus:
            "https://github.com/UMD-CS-STICs/389Kspring18",
          room: "CSIC2118",
          day: "Friday",
          time: "1:00 - 1:50 PM"
        },
        {
          id: 10,
          department: "CMSC",
          number: "389R",
          title:
            "Introduction to Ethical Hacking",
          facilitators: [
            { name: "Michael Reininger", email: "michael@csec.umiacs.umd.edu" },
            { name: "William Woodruff", email: "william@yossarian.net" },
            { name: "Joshua Fleming", email: "secretary@csec.umiacs.umd.edu" }
          ],
          advisor: "Dave Levin",
          credits: 1,
          description:
            "An introduction to ethical hacking geared towards entering the competitive world of cybersecurity Capture the Flag (CTF) competitions. Applications to a career in digital forensics, penetration testing, cryptology, and secure software development.",
          syllabus:
            "https://github.com/UMD-CS-STICs/389Rspring18",
          room: "CSIC2118",
          day: "Friday",
          time: "3:00 - 3:50 PM"
        },
        {
          id: 11,
          department: "CMSC",
          number: "389O",
          title:
            "The Coding Interview",
          facilitators: [
            { name: "Andi Hopkins", email: "andihop@umd.edu" },
            { name: "Maria McCulley", email: "mmccull2@umd.edu" },
            { name: "Sandra Sandeep", email: "ssandeep@umd.edu" }
          ],
          advisor: "Thomas Goldstein",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to technical interviews. Starting with basic topics such as Big O and String Manipulation. We will then move into more complex topics such as Bit Manipulation and Dynamic Programming. Most of the classes will be &quot;In-Class Interviews&quot; and take-home assignments will simulate real interview settings.",
          syllabus:
            "https://github.com/UMD-CS-STICs/389Ospring18",
          room: "ESJ2101",
          day: "Friday",
          time: "11:00 - 11:50 AM"
        },
        {
          id: 12,
          department: "CMSC",
          number: "389F",
          title:
            "Reinforcement Learning",
          facilitators: [
            { name: "Kevin Chen", email: "kev@umd.edu" },
            { name: "Zack Khan", email: "zkhan123@umd.edu" }
          ],
          advisor: "James Reggia",
          credits: 1,
          description:
            "From mastering impossibly complex games to creating precise AI for self-driving cars, Reinforcement Learning is set to be a breakthrough technology in the coming decade. \nReinforcement Learning is a powerful area of AI responsible for the recent successes of industry titans such as DeepMind, OpenAI, Google Brain, and Tesla. It’s inspired by a simple concept from behavioral psychology- people who receive a reward after doing an activity will continue doing that activity- and applies that principle in an algorithmic way to create intelligent systems.\nIf you’d like to learn how to build an AI of your own using concepts from the cutting-edge of academic research and industry technology, come take CMSC389F: Reinforcement Learning! This course provides a theory-centric introduction to Reinforcement Learning, and students will learn the key concepts and algorithms driving Reinforcement Learning, including Markov Decision Processes, Monte Carlo Learning, and Policy Gradient methods.",
          syllabus:
            "https://github.com/mlatmd/cmsc389F",
          website:
            "http://cmsc389f.umd.edu",
          room: "CSIC3118",
          day: "Friday",
          time: "12:00 - 12:50 PM"
        },
        {
          id: 13,
          department: "CMSC",
          number: "389A",
          title:
            "Practical Deep Learning",
          facilitators: [
            { name: "Sujith Vishwajith", email: "svishwaj@terpmail.umd.edu" },
          ],
          advisor: "Jordan Boyd-Graber",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to modern deep learning networks and their applications to AI tasks. Specifically, the course will cover basic concepts in optimization, neural networks, convolutional neural networks (CNN), and recurrent neural networks (RNN). By the end of the course, it is expected that students will have a strong familiarity with the subject and be able to design and develop deep learning models for a variety of tasks.",
          syllabus:
            "https://github.com/UMD-CS-STICs/389Aspring18",
          room: "CSIC2118",
          day: "Friday",
          time: "12:00 - 12:50 PM"
        },
        {
          id: 14,
          department: "ENSP",
          number: "399E",
          title:
            "The Role of Evidenced Based Environmental Advocacy in Environmental Politics",
          facilitators: [
            { name: "Margaret Houlihan", email: "mhouli@terpmail.umd.edu" },
            { name: "Camilla Arias", email: "carias3@umd.edu" }
          ],
          advisor: "Joanna Goger",
          credits: 1,
          description:
            "In this course, students will explore the avenues of advocacy, and sound sources on which to base opinions and arguments in environmental policy. Through a discussion-based class, advocacy will be explored in in the areas of deforestation, climate change, and water quality. Students will analyze cases in the environmental movements of effective and ineffective advocacy, hear from a number of guest speakers who are experts in the above topics, and hold discussions on current events related to these topics.",
          syllabus:
            "https://docs.google.com/document/d/1-Drnr4f6Xy30LMjwVu6OHTBAb1_UML30MFQL7oBKqhE/edit?usp=sharing",
          room: "CHE2145",
          day: "Monday",
          time: "11:00 - 12:15 PM"
        },
        {
          id: 15,
          department: "ENME",
          number: "289P",
          title:
            "Additive Manufacturing for Prosthetic Design",
          facilitators: [
            { name: "Saul Schaffer", email: "saul@umd.edu" },
            { name: "Anna Packy", email: "apacky@eng.umd.edu" }
          ],
          advisor: "Angie Bryl, CPO",
          credits: 2,
          description:
            "This project-oriented course is designed to provide students an introduction to prosthetic design while empowering them to take advantage of the vast 3D printing resources at the University of Maryland to create and test a unique prosthetic prototype. The course will cover prosthetic components and design considerations, as well as the basics of 3D printing, before delving into the interface between the two subjects.",
          syllabus:
            "https://drive.google.com/file/d/18cfFFcEie6tZJnUZD_fSaOkgD8gkkkUh/view",
          room: "EGR3108",
          day: "Monday/Friday",
          time: "5:30 - 6:30 PM (Lec), 6:30 - 8:30 PM (Lab)"
        },
        {
          id: 16,
          department: "ARTT",
          number: "489Z",
          title:
            "Introduction to Design Software",
          facilitators: [
            { name: "Elise Nichols", email: "e.s.nichols17@gmail.com" },
            { name: "Drew Darden", email: "drew.d712@gmail.com" }
          ],
          advisor: "Liese Zahabi",
          credits: 1,
          description:
            "Covering the basics and processes of graphic design including Photoshop, Illustrator, and InDesign + basic GIFs.",
          syllabus:
            "https://drive.google.com/file/d/17vvRliu_hkbEFGWhSVLVHddzSfOdyRLd/view?usp=sharing",
          room: "TYD2102",
          day: "Thursday",
          time: "6:30 - 7:30 PM"
        },
        {
          id: 17,
          department: "CMSC",
          number: "389M",
          title:
            "SLAM: Why Robots Don't Crash",
          facilitators: [
            { name: "Ishaan Parikh", email: "iparikh@umd.edu" },
            { name: "Michael Stevens", email: "msteven9@umd.edu" }
          ],
          advisor: "Larry Davis",
          credits: 1,
          description:
            "Students will be provided with a practical and lightly theoretical understanding of the most popular algorithms that solve the Simultaneous Localization and Mapping (SLAM) problem to enable self driving car technology. An emphasis will be placed on the probabilistic methods that underpin the SLAM problem.",
          syllabus:
            "",
          room: "CSI2118",
          day: "Friday",
          time: "2:00 - 2:50 PM"
        },
        {
          id: 18,
          department: "ENST",
          number: "499W",
          title:
            "Earth Systems Sustainability",
          facilitators: [
            { name: "Gabriel Donnenberg", email: "gabedonnenberg@gmail.com" }
          ],
          advisor: "Dr. Jose Luis-Izursa",
          credits: 1,
          description:
            "Earth Systems Sustainability offers a holistic examination of the diverse ways in which humans have affected natural systems of our planet over the last 15000 years of development. Considering unfolding environmental catastrophes and real, tangible, effective solutions in which we can all take part as individuals and advocate for as members of a globally conscious society. We will learn from each other and do what we can to save the parts of this world we consider most precious and worthy of fighting for.",
          syllabus:
            "https://drive.google.com/open?id=1fTjFX-S7TwKhl5_4YaQ6DfUyErBlwAgx",
          room: "ANS1422",
          day: "Wednesday",
          time: "10:00 - 11:15 AM"
        },
        {
          id: 19,
          department: "MATH",
          number: "299N",
          title:
            "The Mathematics of Ramanujan",
          facilitators: [
            { name: "Tanay Wakhare", email: "twakhare@gmail.com" },
            { name: "Aaron Benda", email: "abenda19@gmail.com" }
          ],
          advisor: "Lawrence Washington",
          credits: 1,
          description:
            "Srinivasan Ramanujan was born in rural India in 1887. Learning from a single book of theorems, he was able to rederive much of modern mathematics. After writing his first paper at 17, he recorded hundreds of pages of formulae that are still being explored today.  This course is meant to explain some of those results, and how they fit into modern number theory research today. This is not proof based; instead, this course is focused on presenting results and context.",
          syllabus:
            "https://www.dropbox.com/s/hli604km16q1k5n/syllabus.docx?dl=0",
          room: "MATH0103",
          day: "Friday",
          time: "12:00 - 12:50 PM"
        },
        {
          id: 20,
          department: "CMSC",
          number: "389L",
          title: "Practical Cloud Computing with AWS",
          facilitators: [{ name: "Colin King", email: "colink@umd.edu" }],
          advisor: "Neil Spring",
          credits: 1,
          description:
            "This course provides a practical and project-oriented introduction to cloud computing with Amazon Web Services (AWS). Students will learn how to build applications using a variety of AWS services, including S3, EC2, Lambda, and Beanstalk. The course will culminate in a final resume-worthy project that will be built, deployed, and demoed to the class.",
          syllabus: "https://github.com/UMD-CS-STICs/389Lspring18",
          room: "CSIC3118",
          day: "Friday",
          time: "3-3:50 PM"
        },
        {
          id: 21,
          department: "CMSC",
          number: "389E",
          title: "Digital Logic through Minecraft",
          facilitators: [{ name: "Alex Brassel", email: "abrassel@umd.edu" }, { name: "Jeremy Klein", email: "jklein@umd.edu"}],
          advisor: "Jason Filippou",
          credits: 1,
          description:
            "In this class, we will explore the theory and applications of combinatorial and sequential circuits. All projects will be done using Minecraft’s Redstone. The course will cover basic gates to more advanced circuits including memory gates and large sequential circuits. The first half of the class will focus on combinational logic gates, and the second half will introduce time-based sequential circuits.",
          syllabus: "https://www.sharelatex.com/read/dvyhxndvpcmg",
          room: "CSIC3118",
          day: "Friday",
          time: "1-1:50 PM"
        },
        {
          id: 22,
          department: "IDEA",
          number: "258D",
          title: "Explorations in Design",
          facilitators: [{ name: "Jordan Steiner", email: "jasteiner11@gmail.com" }],
          advisor: "Meenu Singh",
          credits: 1,
          description:
            "Explorations in Design will give students the opportunity to apply their unique backgrounds to the realm of design. Students will engage in hands-on learning with real clients from various industries. We will explore how good and bad design plays a role in our everyday lives, from the way we order coffee to the logos you see to the signs that help you navigate (or get lost on) the metro.",
          syllabus: "ter.ps/IDEA258D",
          room: "ESJ2101",
          day: "Thursday",
          time: "2-3:15 PM"
        }
      ]
    },
    fall2018: {
      departments: ["CMSC"],
      classes: [
        {
          id: 23,
          department: "ARTT",
          number: "489Q",
          title: "Front End Web Design and Development",
          facilitators: [
            { name: "David Ng", email: "dng5@umd.edu" },
            { name: "Charlie Ching", email: "cching@terpmail.umd.edu" }
          ],
          advisor: "Brandon Morse",
          credits: 1,
          description:
            "This course presents a practical and project-oriented introduction to modern front end web development. Students will learn to design and build websites using technologies such as HTML, CSS, JS, Sass, Bootstrap, and Git.",
          syllabus: "./assets/syllabi/ARTT489Q_F18.pdf",
          room: "ASY3304",
          day: "Friday",
          time: "12-12:50 PM"
        },
        {
          id: 24,
          department: "CMSC",
          number: "389C",
          title: "Bitcoin and Other Cryptocurrencies",
          facilitators: [
            { name: "TBD", email: "TBD" }
          ],
          advisor: "Jonathan Katz",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to the technology behind cryptocurrency and the economy surrounding it. This course will have a heavy emphasis on Bitcoin, but will dive into other types of cryptocurrency as well, such as Ethereum. This course is primarily intended to focus on the technological aspect of cryptocurrency, but we will also spend time discussing the economics of cryptocurrency.",
          syllabus: "TODO",
          room: "BPS1238",
          day: "Friday",
          time: "1-1:50 PM"
        },
        {
          id: 25,
          department: "CMSC",
          number: "389I",
          title: "Disrupting Healthcare with AI",
          facilitators: [
            { name: "Sanna Madan", email: "smadan12@umd.edu" },
            { name: "Kyle Liu", email: "kliu1234@umd.edu" }
          ],
          advisor: "Max Leiserson",
          credits: 1,
          description:
            "This course provides a comprehensive, practical introduction to the intersection of machine learning and different challenges in healthcare. Students will apply basic predictive modeling techniques to fields such as early detection of disease, telemedicine, and mental health. Prior knowledge of biology is not required but a basic understanding of Python and/or machine learning techniques is recommended.",
          syllabus: "./assets/syllabi/CMSC389I_F18.pdf",
          room: "CSI2118",
          day: "Friday",
          time: "2-2:50 PM"
        },
        {
          id: 26,
          department: "CMSC",
          number: "389O",
          title: "The Coding Interview",
          facilitators: [
            { name: "Maria McCulley", email: "mmccull2@umd.edu" },
            { name: "Sandra Sandeep", email: "sandrasandeep01@gmail.com" },
            { name: "Andi Hopkins", email: "andihop@terpmail.umd.edu" },
            { name: "Nelson Le", email: "nle@terpmail.umd.edu" }
          ],
          advisor: "Thomas Goldstein",
          credits: 1,
          description:
            `Students will be provided with a comprehensive, practical introduction to technical interviews. Starting with basic topics such as Big O and String Manipulation. We will then move into more complex topics such as Bit Manipulation and Dynamic Programming. Most of the classes will be "In-Class Interviews" and take-home assignments will simulate real interview settings.`,
          syllabus: "./assets/syllabi/CMSC389O_F18.pdf",
          sections: [
            {
              room: "EDU1107",
              day: "Friday",
              time: "12-12:50 PM"
            },
            {
              room: "TWS0214",
              day: "Friday",
              time: "1-1:50 PM"
            }
          ],
        },
        {
          id: 27,
          department: "MATH",
          number: "299C",
          title: "Mathematics & Classical Music",
          facilitators: [
            { name: "Siri Neerchal", email: "siri@terpmail.umd.edu" }
          ],
          advisor: "Niranjan Ramachandran",
          credits: 1,
          description:
            "The aim of this course is to explore the historical discoveries in mathematics that have influenced Western classical music, as well as musical expressions of specific mathematical concepts. This course is not meant to be a rigorous introduction to music theory or mathematics; rather, it is focused on introducing students to the classical repertoire through mathematical ideas that appear in it. Students will also have an opportunity to explore mathematics through music in the form of a creative project.",
          syllabus: "./assets/syllabi/MATH299C_F18.pdf",
          room: "MTH0103",
          day: "Friday",
          time: "12-12:50 PM"
        },
      ]
    },
  }
};
