// ─────────────────────────────────────────────────────────────────────────────
//  Canvas Inbox – Message Data
//  folder: "inbox" | "sent" | "archived" | "starred_folder" | "submission"
//  type:   "message" | "submission_comment" | "announcement"
//  starred and archived are independent boolean flags
// ─────────────────────────────────────────────────────────────────────────────

window.MESSAGES_DATA = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    id: "m01",
    isoDate: "2026-02-22T17:36:00",
    displayDate: "Feb 22, 2026",
    timestamp: "Feb 22, 2026 at 5:36pm",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker", "Kenny Shao"],
    senderDisplay: "Richard Whittaker, Kenny Shao",
    courses: ["CAP4506 RVAA", "CAP5507 RVAA 1261"],
    subject: "(No subject)",
    preview: "Hello Everyone, After reviewing a problem on exam three…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Hello Everyone,

After reviewing a problem on exam three and noticed there was an issue with one of the problems. I have given everyone credit for this problem so this should improve your overall score. Remember that the maximum score is 20 out of 20. I just added the point to your exam 3 for grade.

All the best,
Richard`
  },
  {
    id: "m02",
    isoDate: "2026-02-22T14:11:00",
    displayDate: "Feb 22, 2026",
    timestamp: "Feb 22, 2026 at 2:11pm",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker", "Kenny Shao"],
    senderDisplay: "Richard Whittaker, Kenny Shao",
    courses: ["COP4534", "CAP5507 RVAA"],
    subject: "Game Theory → thank you for taking the module",
    preview: "Hello Everyone, I want to thank all of you for participating…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Hello Everyone,

I want to thank all of you for taking the time to participate in the Game Theory module. Your engagement and thoughtful responses have been outstanding.

Please remember to complete the reflection assignment posted on Canvas by Friday.

Best,
Richard Whittaker`
  },
  {
    id: "m03",
    isoDate: "2026-02-16T10:44:00",
    displayDate: "Feb 16, 2026",
    timestamp: "Feb 16, 2026 at 10:44am",
    sender: "Kenny Shao",
    senderList: ["Kenny Shao", "Christine Lisetti", "Trinity Shelton"],
    senderDisplay: "Kenny Shao, Christine Lisetti, Trinity S…",
    courses: ["CAP4506 RVAA"],
    subject: "P1C Grade Review",
    preview: "Hello Professor Lisetti, Thank you so much for your feedback…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 3,
    checked: false,
    initials: "KS",
    avatarColor: "#2d6a8a",
    body: `Hello Professor Lisetti,

Thank you so much for your feedback on P1C. I had a question about the grading on the second section — could you help clarify the rubric criteria for the architecture diagram portion?

I wanted to make sure I understand the expectations for the upcoming P2 submission.

Thank you,
Kenny Shao`
  },
  {
    id: "m04",
    isoDate: "2026-02-12T09:03:00",
    displayDate: "Feb 12, 2026",
    timestamp: "Feb 12, 2026 at 9:03am",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP4506 RVAA"],
    subject: "Office Hours Update – Feb 14",
    preview: "Hi all, I will be holding extra office hours this Friday…",
    unread: true,
    starred: true,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 2,
    checked: false,
    initials: "CL",
    avatarColor: "#5a3e7a",
    body: `Hi all,

I will be holding extra office hours this Friday, Feb 14, from 2:00–4:00 PM via Zoom due to the upcoming project milestone. The link is on the Canvas course homepage.

Please come prepared with specific questions about your design documents.

Best,
Christine Lisetti`
  },
  {
    id: "m05",
    isoDate: "2026-02-10T15:22:00",
    displayDate: "Feb 10, 2026",
    timestamp: "Feb 10, 2026 at 3:22pm",
    sender: "Canvas Notifications",
    senderList: ["Canvas Notifications"],
    senderDisplay: "Canvas Notifications",
    courses: ["CAP4506 RVAA"],
    subject: "New Grade Posted – Exam 2",
    preview: "A new grade has been posted for Exam 2 in CAP4506 RVAA…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "CN",
    avatarColor: "#e66000",
    body: `A new grade has been posted for Exam 2 in CAP4506 RVAA.

Please log into Canvas to view your grade and any instructor feedback.

This is an automated notification from Canvas.`
  },
  {
    id: "m06",
    isoDate: "2026-02-07T11:15:00",
    displayDate: "Feb 7, 2026",
    timestamp: "Feb 7, 2026 at 11:15am",
    sender: "Trinity Shelton",
    senderList: ["Trinity Shelton"],
    senderDisplay: "Trinity Shelton",
    courses: ["CAP4506 RVAA"],
    subject: "Group Meeting – Project 2 Kickoff",
    preview: "Hey team, wanted to set up a time to meet for P2…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 4,
    checked: false,
    initials: "TS",
    avatarColor: "#3a7a5e",
    body: `Hey team,

Wanted to set up a time to meet and divide up the tasks for Project 2. I was thinking this Tuesday after class, around 5:30 PM in the library study room.

Let me know if that works or if you'd prefer a Zoom call instead.

Trinity`
  },
  {
    id: "m07",
    isoDate: "2026-02-03T16:00:00",
    displayDate: "Feb 3, 2026",
    timestamp: "Feb 3, 2026 at 4:00pm",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker"],
    senderDisplay: "Richard Whittaker",
    courses: ["CAP5507 RVAA"],
    subject: "Midterm Review Sheet Available",
    preview: "The midterm review sheet is now posted on Canvas under Files…",
    unread: false,
    starred: true,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Hello,

The midterm review sheet is now posted on Canvas under Files > Study Materials. It covers all topics from weeks 1–7, including algorithm design, complexity analysis, and the dynamic programming exercises.

Good luck studying!

Richard`
  },
  {
    id: "m08",
    isoDate: "2026-01-28T08:55:00",
    displayDate: "Jan 28, 2026",
    timestamp: "Jan 28, 2026 at 8:55am",
    sender: "Kenny Shao",
    senderList: ["Kenny Shao"],
    senderDisplay: "Kenny Shao",
    courses: ["COP4534"],
    subject: "Discussion Prompt – Week 5",
    preview: "Please respond to this week's discussion by Thursday 11:59 PM…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 1,
    checked: false,
    initials: "KS",
    avatarColor: "#2d6a8a",
    body: `Please respond to this week's discussion by Thursday at 11:59 PM.

Topic: Compare the trade-offs between greedy algorithms and dynamic programming in the context of optimization problems. Provide a real-world example for each.

Responses should be at least 150 words. You must also reply substantively to one classmate's post.

– Kenny Shao`
  },
  {
    id: "m09",
    isoDate: "2026-01-24T13:30:00",
    displayDate: "Jan 24, 2026",
    timestamp: "Jan 24, 2026 at 1:30pm",
    sender: "Maria Garcia",
    senderList: ["Maria Garcia"],
    senderDisplay: "Maria Garcia",
    courses: ["MAC2311"],
    subject: "Calculus II – Quiz 3 Grades Released",
    preview: "Hi everyone, Quiz 3 grades have been posted. The class average…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "MG",
    avatarColor: "#c0392b",
    body: `Hi everyone,

Quiz 3 grades have been posted. The class average was 78%. If you scored below 70%, I strongly encourage you to attend office hours this week before the midterm.

The midterm will be held on February 6th in our usual classroom. A practice exam has been posted under Modules > Midterm Resources.

Best,
Prof. Maria Garcia`
  },
  {
    id: "m10",
    isoDate: "2026-01-20T10:05:00",
    displayDate: "Jan 20, 2026",
    timestamp: "Jan 20, 2026 at 10:05am",
    sender: "James Thompson",
    senderList: ["James Thompson"],
    senderDisplay: "James Thompson",
    courses: ["STA2023"],
    subject: "Statistics – Lab 2 Instructions Posted",
    preview: "The Lab 2 instructions have been uploaded to the Files section…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "JT",
    avatarColor: "#1a6b45",
    body: `Hello class,

The Lab 2 instructions have been uploaded to the Files section under Labs. You will need SPSS or R to complete the analysis portion. A tutorial video has been posted under Modules > Lab Resources.

Lab 2 is due February 3rd by midnight. No late submissions will be accepted without prior approval.

– Prof. James Thompson`
  },
  {
    id: "m11",
    isoDate: "2026-01-18T14:48:00",
    displayDate: "Jan 18, 2026",
    timestamp: "Jan 18, 2026 at 2:48pm",
    sender: "Sarah Chen",
    senderList: ["Sarah Chen"],
    senderDisplay: "Sarah Chen",
    courses: ["ENC1101"],
    subject: "Essay 1 Feedback & Revision Guidelines",
    preview: "Dear students, your Essay 1 feedback is now available…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 2,
    checked: false,
    initials: "SC",
    avatarColor: "#7d3c98",
    body: `Dear students,

Your Essay 1 feedback is now available in SpeedGrader. Please review my comments carefully before beginning your revision.

Key areas for improvement:
- Strengthen your thesis statement with a specific argument
- Integrate quotes more naturally using signal phrases
- Ensure your conclusion synthesizes rather than summarizes

Revised drafts are due January 31st. This revision counts for 50% of your Essay 1 grade.

Prof. Sarah Chen`
  },
  {
    id: "m12",
    isoDate: "2026-01-15T09:20:00",
    displayDate: "Jan 15, 2026",
    timestamp: "Jan 15, 2026 at 9:20am",
    sender: "David Rodriguez",
    senderList: ["David Rodriguez"],
    senderDisplay: "David Rodriguez",
    courses: ["CHM1045"],
    subject: "Lab Safety Reminder & Pre-Lab Quiz",
    preview: "Please complete the pre-lab safety quiz before arriving…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "DR",
    avatarColor: "#2e86c1",
    body: `Please complete the pre-lab safety quiz before arriving to Thursday's lab session. You will NOT be admitted without a passing score (70% or higher).

The quiz is under Modules > Lab 3 – Acid-Base Titration.

Also, remember to bring your safety goggles and closed-toe shoes. Lab coats are available at the equipment desk.

– Dr. David Rodriguez`
  },
  {
    id: "m13",
    isoDate: "2026-01-12T16:30:00",
    displayDate: "Jan 12, 2026",
    timestamp: "Jan 12, 2026 at 4:30pm",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP4506 RVAA"],
    subject: "Project 1B – Grading Rubric Update",
    preview: "Hi everyone, I have updated the grading rubric for P1B…",
    unread: false,
    starred: true,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "CL",
    avatarColor: "#5a3e7a",
    body: `Hi everyone,

I have updated the grading rubric for P1B to better reflect the deliverables discussed in last week's lecture. The updated rubric is now available under the assignment on Canvas.

Please note that the peer review component now accounts for 15% of the total grade instead of 10%. Make sure your submission includes the peer review checklist.

Deadline remains January 22nd at 11:59 PM.

Best,
Christine Lisetti`
  },
  {
    id: "m14",
    isoDate: "2026-01-10T11:00:00",
    displayDate: "Jan 10, 2026",
    timestamp: "Jan 10, 2026 at 11:00am",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker"],
    senderDisplay: "Richard Whittaker",
    courses: ["CAP4506 RVAA", "CAP5507 RVAA"],
    subject: "Welcome to Spring 2026 – Course Overview",
    preview: "Hello and welcome to Spring 2026! I'm excited to have all of you…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Hello and welcome to Spring 2026!

I'm excited to have all of you in class this semester. Please take a few minutes to review the syllabus carefully — it is posted under the Start Here module. The first day of class will be January 13th and attendance is mandatory.

Office hours will be Tuesdays and Thursdays, 3:00–5:00 PM in EC 3920.

Looking forward to a great semester,
Richard Whittaker`
  },

  // ── Sent Messages ────────────────────────────────────────────────────────
  {
    id: "m15",
    isoDate: "2026-02-20T10:15:00",
    displayDate: "Feb 20, 2026",
    timestamp: "Feb 20, 2026 at 10:15am",
    sender: "You",
    senderList: ["You"],
    senderDisplay: "You",
    courses: ["CAP4506 RVAA"],
    subject: "Re: Office Hours Update – Feb 14",
    preview: "Hi Professor Lisetti, Thank you for the extra hours. I'll be there…",
    unread: false,
    starred: false,
    archived: false,
    folder: "sent",
    type: "message",
    badge: 1,
    checked: false,
    initials: "ME",
    avatarColor: "#394b58",
    body: `Hi Professor Lisetti,

Thank you for holding extra office hours. I'll be attending at 3:30 PM if that's okay. I have a few questions about the UML diagram requirements in P2.

See you then,
Student`
  },
  {
    id: "m16",
    isoDate: "2026-02-08T09:42:00",
    displayDate: "Feb 8, 2026",
    timestamp: "Feb 8, 2026 at 9:42am",
    sender: "You",
    senderList: ["You"],
    senderDisplay: "You",
    courses: ["COP4534"],
    subject: "Question about Homework 4 – Problem 3",
    preview: "Hi Professor Shao, I was working through Problem 3 on HW4…",
    unread: false,
    starred: false,
    archived: false,
    folder: "sent",
    type: "message",
    badge: 1,
    checked: false,
    initials: "ME",
    avatarColor: "#394b58",
    body: `Hi Professor Shao,

I was working through Problem 3 on HW4 and I'm not sure whether we're expected to prove the lower bound using an adversary argument or a reduction. The problem statement says "prove it is hard" which is ambiguous.

Could you clarify?

Thank you`
  },
  {
    id: "m17",
    isoDate: "2026-01-16T15:00:00",
    displayDate: "Jan 16, 2026",
    timestamp: "Jan 16, 2026 at 3:00pm",
    sender: "You",
    senderList: ["You"],
    senderDisplay: "You",
    courses: ["MAC2311"],
    subject: "Re: Calculus II – Quiz 3 Grades Released",
    preview: "Hi Professor Garcia, I got a 65 on Quiz 3 and would love…",
    unread: false,
    starred: false,
    archived: false,
    folder: "sent",
    type: "message",
    badge: 1,
    checked: false,
    initials: "ME",
    avatarColor: "#394b58",
    body: `Hi Professor Garcia,

I received a 65 on Quiz 3 and would love to attend office hours before the midterm. Would Thursday at 2 PM work?

Thank you`
  },

  // ── Archived ─────────────────────────────────────────────────────────────
  {
    id: "m18",
    isoDate: "2025-12-15T12:00:00",
    displayDate: "Dec 15, 2025",
    timestamp: "Dec 15, 2025 at 12:00pm",
    sender: "Maria Garcia",
    senderList: ["Maria Garcia"],
    senderDisplay: "Maria Garcia",
    courses: ["MAC2311"],
    subject: "Final Exam – Fall 2025 Schedule",
    preview: "The final exam for Calculus II will be held Dec 17th in CB 120…",
    unread: false,
    starred: false,
    archived: true,
    folder: "archived",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "MG",
    avatarColor: "#c0392b",
    body: `The final exam for Calculus II (MAC2311) will be held on December 17th, 7:30–10:00 AM in CB 120.

You are allowed one handwritten 8.5×11 note sheet (both sides). No calculators.

Arrive at least 15 minutes early. Bring your FIU ID.

Good luck,
Prof. Maria Garcia`
  },
  {
    id: "m19",
    isoDate: "2025-12-10T10:30:00",
    displayDate: "Dec 10, 2025",
    timestamp: "Dec 10, 2025 at 10:30am",
    sender: "James Thompson",
    senderList: ["James Thompson"],
    senderDisplay: "James Thompson",
    courses: ["STA2023"],
    subject: "Statistics Final Project Grades Posted",
    preview: "Final project grades are now available. Great work this semester…",
    unread: false,
    starred: false,
    archived: true,
    folder: "archived",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "JT",
    avatarColor: "#1a6b45",
    body: `Final project grades are now available in Canvas Gradebook.

Great work this semester, everyone. The class average on the final project was 84%. Many of you demonstrated strong command of regression analysis and hypothesis testing.

Final course grades will be submitted to the Registrar by December 18th.

Prof. James Thompson`
  },
  {
    id: "m20",
    isoDate: "2025-11-25T08:00:00",
    displayDate: "Nov 25, 2025",
    timestamp: "Nov 25, 2025 at 8:00am",
    sender: "Sarah Chen",
    senderList: ["Sarah Chen"],
    senderDisplay: "Sarah Chen",
    courses: ["ENC1101"],
    subject: "Thanksgiving Break – No Office Hours Nov 26–28",
    preview: "Hi everyone, just a reminder there are no office hours during…",
    unread: false,
    starred: false,
    archived: true,
    folder: "archived",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "SC",
    avatarColor: "#7d3c98",
    body: `Hi everyone,

Just a reminder that there are no office hours from November 26–28 for Thanksgiving break. I'll return to my normal schedule on December 2nd.

Have a restful break!

Prof. Sarah Chen`
  },

  // ── Submission Comments ───────────────────────────────────────────────────
  {
    id: "m21",
    isoDate: "2026-02-18T14:00:00",
    displayDate: "Feb 18, 2026",
    timestamp: "Feb 18, 2026 at 2:00pm",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP4506 RVAA"],
    subject: "Submission Comment – P1B: Architecture Diagram",
    preview: "Good work on the overall structure. The class diagram is well…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "CL",
    avatarColor: "#5a3e7a",
    body: `Good work on the overall structure. The class diagram is well-organized and clearly shows the relationships between your modules.

Two areas to improve for P1C:
1. Your sequence diagrams are missing the return arrows — these are required per the UML 2.0 standard.
2. The component diagram should reflect deployment boundaries, not just logical groupings.

Score: 87/100

– Prof. Lisetti`
  },
  {
    id: "m22",
    isoDate: "2026-02-14T11:30:00",
    displayDate: "Feb 14, 2026",
    timestamp: "Feb 14, 2026 at 11:30am",
    sender: "Kenny Shao",
    senderList: ["Kenny Shao"],
    senderDisplay: "Kenny Shao",
    courses: ["COP4534"],
    subject: "Submission Comment – HW3: Dynamic Programming",
    preview: "Nice solution! Your recurrence relation is correct. However…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "KS",
    avatarColor: "#2d6a8a",
    body: `Nice solution! Your recurrence relation is correct and your memoization approach is sound.

However, your runtime analysis in Problem 2b is off. You stated O(n log n) but the correct complexity is O(n²) due to the nested loop in your reconstruction step.

Deducted 5 points. Score: 92/100.

– Prof. Shao`
  },
  {
    id: "m23",
    isoDate: "2026-02-05T10:00:00",
    displayDate: "Feb 5, 2026",
    timestamp: "Feb 5, 2026 at 10:00am",
    sender: "Maria Garcia",
    senderList: ["Maria Garcia"],
    senderDisplay: "Maria Garcia",
    courses: ["MAC2311"],
    subject: "Submission Comment – Quiz 2 Correction",
    preview: "Your quiz has been regraded. You received partial credit…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "MG",
    avatarColor: "#c0392b",
    body: `Your quiz has been regraded per your regrade request.

You received partial credit on Problem 4: your setup was correct but you dropped a negative sign in the integration by parts step. I awarded 3 out of 5 points instead of 0.

Updated score: 81/100.

– Prof. Garcia`
  },

  // ── More Inbox messages ───────────────────────────────────────────────────
  {
    id: "m24",
    isoDate: "2026-02-01T09:00:00",
    displayDate: "Feb 1, 2026",
    timestamp: "Feb 1, 2026 at 9:00am",
    sender: "David Rodriguez",
    senderList: ["David Rodriguez"],
    senderDisplay: "David Rodriguez",
    courses: ["CHM1045"],
    subject: "Exam 1 Grades – Chemistry",
    preview: "Hi class, Exam 1 grades are now posted. The average was 72%…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "DR",
    avatarColor: "#2e86c1",
    body: `Hi class,

Exam 1 grades are now posted. The class average was 72%. The exam covered stoichiometry, molarity, and acid-base reactions.

If you scored below 65%, please schedule a meeting with me or visit the Chemistry tutoring center in GC 280.

Exam 2 will be held on February 26th and will cover topics from Chapters 5–8.

– Dr. David Rodriguez`
  },
  {
    id: "m25",
    isoDate: "2026-01-30T16:15:00",
    displayDate: "Jan 30, 2026",
    timestamp: "Jan 30, 2026 at 4:15pm",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker"],
    senderDisplay: "Richard Whittaker",
    courses: ["CAP5507 RVAA"],
    subject: "Homework 2 – Extension Granted",
    preview: "Due to multiple students requesting an extension on HW2…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Due to multiple students requesting an extension on HW2, I am granting a 48-hour extension. The new deadline is February 1st at 11:59 PM.

No further extensions will be granted. Please submit via Canvas — email submissions will not be accepted.

– Richard Whittaker`
  },
  {
    id: "m26",
    isoDate: "2026-01-27T13:00:00",
    displayDate: "Jan 27, 2026",
    timestamp: "Jan 27, 2026 at 1:00pm",
    sender: "Sarah Chen",
    senderList: ["Sarah Chen"],
    senderDisplay: "Sarah Chen",
    courses: ["ENC1101"],
    subject: "Peer Review Workshop – Feb 3 in Class",
    preview: "Reminder that next Monday's class will be a peer review workshop…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "SC",
    avatarColor: "#7d3c98",
    body: `Reminder that next Monday's class will be a peer review workshop for Essay 2.

Please bring two printed copies of your draft (or have it open on your laptop). We will be exchanging drafts with a partner and using the peer review rubric, which is posted under Modules > Essay 2.

Attendance is mandatory for full credit on this assignment.

– Prof. Sarah Chen`
  },
  {
    id: "m27",
    isoDate: "2026-01-22T15:45:00",
    displayDate: "Jan 22, 2026",
    timestamp: "Jan 22, 2026 at 3:45pm",
    sender: "James Thompson",
    senderList: ["James Thompson"],
    senderDisplay: "James Thompson",
    courses: ["STA2023"],
    subject: "R Tutorial Resources for Project 1",
    preview: "For those unfamiliar with R, I have posted a set of tutorial videos…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "JT",
    avatarColor: "#1a6b45",
    body: `For those unfamiliar with R, I have posted a set of tutorial videos and a sample script under Modules > R Resources.

These cover:
- Installing R and RStudio
- Loading and cleaning datasets
- Running descriptive statistics and ggplot2 visualizations

Project 1 is due February 14th. Your analysis must be reproducible — submit both your .R script and your knitted HTML report.

– Prof. James Thompson`
  },
  {
    id: "m28",
    isoDate: "2026-01-17T10:30:00",
    displayDate: "Jan 17, 2026",
    timestamp: "Jan 17, 2026 at 10:30am",
    sender: "Kenny Shao",
    senderList: ["Kenny Shao"],
    senderDisplay: "Kenny Shao",
    courses: ["COP4534"],
    subject: "Algorithm Design – Syllabus & Grading Policy",
    preview: "Welcome to COP4534. Please review the syllabus carefully…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "KS",
    avatarColor: "#2d6a8a",
    body: `Welcome to COP4534 – Algorithm Design.

Please review the syllabus carefully, especially the academic integrity policy. All homework must be completed individually unless explicitly stated otherwise.

Grading breakdown:
- Homework: 30%
- Midterm Exam: 25%
- Final Exam: 30%
- Participation & Quizzes: 15%

My office hours are Mondays and Wednesdays, 2:00–3:30 PM in ECS 282.

– Prof. Kenny Shao`
  },
  {
    id: "m29",
    isoDate: "2026-01-13T09:00:00",
    displayDate: "Jan 13, 2026",
    timestamp: "Jan 13, 2026 at 9:00am",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP4506 RVAA"],
    subject: "Project 1A – Team Formation Due Jan 17",
    preview: "Please submit your team of 3–4 members via the Canvas group tool…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "CL",
    avatarColor: "#5a3e7a",
    body: `Please submit your team of 3–4 members via the Canvas Groups tool by January 17th.

If you do not have a team by the deadline, I will assign you to one. Teams are final after January 17th — no changes will be accommodated after that date.

Project 1A requirements and starter code will be released January 20th.

– Prof. Christine Lisetti`
  },
  {
    id: "m30",
    isoDate: "2025-12-20T11:00:00",
    displayDate: "Dec 20, 2025",
    timestamp: "Dec 20, 2025 at 11:00am",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker"],
    senderDisplay: "Richard Whittaker",
    courses: ["CAP4506 RVAA", "CAP5507 RVAA"],
    subject: "Fall 2025 Final Grades Submitted",
    preview: "Hi all, final grades have been submitted to the Registrar…",
    unread: false,
    starred: false,
    archived: true,
    folder: "archived",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "RW",
    avatarColor: "#7a5c44",
    body: `Hi all,

Final grades for Fall 2025 have been submitted to the Registrar. They should appear in your MyFIU portal within 48–72 hours.

It was a pleasure teaching you this semester. I hope to see many of you in future courses.

Best,
Richard Whittaker`
  },
  {
    id: "m31",
    isoDate: "2026-02-19T08:30:00",
    displayDate: "Feb 19, 2026",
    timestamp: "Feb 19, 2026 at 8:30am",
    sender: "Trinity Shelton",
    senderList: ["Trinity Shelton", "Kenny Shao"],
    senderDisplay: "Trinity Shelton, Kenny Shao",
    courses: ["CAP4506 RVAA"],
    subject: "P2 Demo Scheduling – Available Slots",
    preview: "Hey team, Prof. Lisetti opened the P2 demo slots on Canvas…",
    unread: true,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "message",
    badge: 2,
    checked: false,
    initials: "TS",
    avatarColor: "#3a7a5e",
    body: `Hey team,

Prof. Lisetti opened the P2 demo slots on Canvas Scheduler. There are only a few time slots left on March 4th and 5th. I signed us up for March 4th at 2:00 PM — let me know if that's a problem.

We'll need to have our slides and live demo ready. Our prototype needs to show at least 3 end-to-end use cases.

Trinity`
  },
  {
    id: "m32",
    isoDate: "2026-02-11T16:55:00",
    displayDate: "Feb 11, 2026",
    timestamp: "Feb 11, 2026 at 4:55pm",
    sender: "David Rodriguez",
    senderList: ["David Rodriguez"],
    senderDisplay: "David Rodriguez",
    courses: ["CHM1045"],
    subject: "Chemical Equilibrium – Extra Practice Problems",
    preview: "I've uploaded 20 additional practice problems for chemical equilibrium…",
    unread: false,
    starred: true,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "DR",
    avatarColor: "#2e86c1",
    body: `I've uploaded 20 additional practice problems for chemical equilibrium under Modules > Exam 2 Prep.

These problems mirror the difficulty and format of what you can expect on Exam 2. Solutions will be posted on February 25th (one day before the exam).

Also, a review session will be held February 24th at 6:00 PM in GC 143.

– Dr. David Rodriguez`
  },
  {
    id: "m33",
    isoDate: "2026-01-26T14:20:00",
    displayDate: "Jan 26, 2026",
    timestamp: "Jan 26, 2026 at 2:20pm",
    sender: "Maria Garcia",
    senderList: ["Maria Garcia"],
    senderDisplay: "Maria Garcia",
    courses: ["MAC2311"],
    subject: "Integration by Parts – Office Hours Recording",
    preview: "For those who couldn't attend office hours, I've recorded a…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "MG",
    avatarColor: "#c0392b",
    body: `For those who couldn't attend office hours, I've recorded a 45-minute walkthrough of Integration by Parts with four worked examples. It's posted under Modules > Lecture Supplements.

This technique will be heavily tested on the midterm. Pay close attention to the tabular method — it saves a lot of time on multi-step problems.

– Prof. Maria Garcia`
  },
  {
    id: "m34",
    isoDate: "2026-01-21T11:10:00",
    displayDate: "Jan 21, 2026",
    timestamp: "Jan 21, 2026 at 11:10am",
    sender: "Canvas Notifications",
    senderList: ["Canvas Notifications"],
    senderDisplay: "Canvas Notifications",
    courses: ["STA2023"],
    subject: "New Assignment Posted – Statistics Project 1",
    preview: "A new assignment has been posted: Statistics Project 1 is due…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "submission_comment",
    badge: 1,
    checked: false,
    initials: "CN",
    avatarColor: "#e66000",
    body: `A new assignment has been posted in STA2023 – Elementary Statistics.

Assignment: Statistics Project 1 – Exploratory Data Analysis
Due: February 14, 2026 at 11:59 PM

Please log into Canvas to view the full assignment details.

This is an automated notification from Canvas.`
  },
  {
    id: "m35",
    isoDate: "2026-01-14T15:30:00",
    displayDate: "Jan 14, 2026",
    timestamp: "Jan 14, 2026 at 3:30pm",
    sender: "Sarah Chen",
    senderList: ["Sarah Chen"],
    senderDisplay: "Sarah Chen",
    courses: ["ENC1101"],
    subject: "Composition I – Required Texts & Course Materials",
    preview: "Please purchase or access the following texts before our first…",
    unread: false,
    starred: false,
    archived: false,
    folder: "inbox",
    type: "announcement",
    badge: 1,
    checked: false,
    initials: "SC",
    avatarColor: "#7d3c98",
    body: `Please purchase or access the following texts before our first class:

1. "They Say / I Say" by Graff & Birkenstein (4th edition)
2. Purdue OWL Online – free at owl.purdue.edu

All other readings will be provided as PDFs on Canvas. There is no other textbook required.

Looking forward to meeting you all,
Prof. Sarah Chen`
  }
];