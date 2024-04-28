
let questions = [
  {
  numb: 1,
  question: "Do you experience fear, anxiety, or helplessness before or during a test? *",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
 /* {
  numb: 2,
  question: "Do you procrastinate on studying because you fear performing poorly on tests? *",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
  {
  numb: 3,
  question: "Have you performed poorly on a test in the past and fear repeating the performance?*",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
  {
  numb: 4,
  question: "Is it ever difficult to imagine yourself doing well on a test?*",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
  {
  numb: 5,
  question: "Do you “blank out” or have trouble concentrating during a test?*",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 6,
  question: "Do you experience nausea, sweating, racing heart, shortness of breath, or dizziness during a test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 7,
  question: "Do you find it challenging to sleep the night before a test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 8,
  question: "Have you had to exit a testing area before you finish due to high anxiety? *",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 9,
  question: "Are you excessively worried about your test performance in the days leading up to the exam?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 10,
  question: "Do you experience muscle tension or physical discomfort before or during a test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 11,
  question: "Have you ever avoided taking a test altogether due to anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 12,
  question: "Do you frequently compare your abilities to others when preparing for a test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 13,
  question: "Is it challenging to focus on studying due to constant worrying about the test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 14,
  question: "Do you engage in negative self-talk regarding your test-taking abilities?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 15,
  question: "Have you ever sought help or counseling for test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 16,
  question: "Do you often experience a sense of dread or impending doom before a test?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 17,
  question: " Are you easily distracted by worries about a test during other daily activities?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 18,
  question: "Do you have a fear of failure that affects your test-taking performance?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 19,
  question: "Does your test anxiety affect your overall academic or career goals?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 20,
  question: "Have you tried relaxation techniques or mindfulness practices to cope with test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 21,
  question: "Do you feel embarrassed or ashamed when discussing test anxiety with others?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 22,
  question: "Have you experienced a decrease in self-esteem due to test-related stress?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 23,
  question: "Do you avoid social activities or events to focus on test preparation?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 24,
  question: "Are you often preoccupied with thoughts about past test failures?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 25,
  question: "Do you believe that your test anxiety is affecting your overall well-being?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 26,
  question: "Have you ever experienced a panic attack specifically related to taking a test?    ",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 27,
  question: "Do you feel a constant need to review and re-review material even when you've already studied extensively?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 28,
  question: "Are you concerned that your test anxiety may negatively impact your long-term memory recall during exams?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 29,
  question: "Do you avoid asking questions or seeking clarification from instructors or peers because of anxiety about appearing incompetent?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 30,
  question: "Have you ever resorted to cheating or unethical behavior during a test due to extreme test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 31,
  question: "Do you feel a heightened sense of pressure or stress when taking timed tests or exams?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 32,
  question: "Have you experienced physical symptoms of anxiety, such as a trembling voice or shaky hands, while presenting projects or speaking in front of others?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 33,
  question: "Do you frequently have nightmares or recurring dreams related to test-taking or academic performance?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 34,
  question: "Have you ever considered dropping a class or changing your major due to test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 35,
  question: "Are you concerned that your test anxiety may negatively impact your future career opportunities or advancement?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},
{
  numb: 36,
  question: "Have you experienced a decline in your overall mental health as a result of test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},{
  numb: 37,
  question: "Do you avoid taking elective courses or pursuing interests outside your major due to the fear of additional exams?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},{
  numb: 38,
  question: "Have you ever considered taking medication or other substances to manage test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},{
  numb: 39,
  question: "Do you find it challenging to relax and enjoy leisure activities during the semester because of ongoing test-related stress?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},{
  numb: 40,
  question: "Are you hesitant to seek academic or career opportunities that require standardized tests, such as the GRE or GMAT, due to test anxiety?",
  answer1: "Never",
  answer2: "Rarely",
  options: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very Often"
  ]
},*/
 
];