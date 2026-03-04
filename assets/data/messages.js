// ─────────────────────────────────────────────────────────────────────────────
//  Canvas Inbox – Message Data
//  Sorted by isoDate descending (most recent first)
//  folder : "inbox" | "sent" | "archived"
//  type   : "message" | "submission_comment" | "announcement"
// ─────────────────────────────────────────────────────────────────────────────

window.MESSAGES_DATA = [

  // ── Feb 22, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
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
    subject: "Game Thoery -> thank you for taking the module",
    preview: "Hello Everyone I want to thank all of you for participating…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Hello Everyone,

I want to thank all of you for taking the time to participate in the Game Theory module. Your engagement and thoughtful responses have been outstanding.

Please remember to complete the reflection assignment posted on Canvas by Friday.

Best,
Richard Whittaker`
  },

  // ── Feb 20, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "sent", type: "message", badge: 1, checked: false,
    initials: "ME", avatarColor: "#394b58",
    body: `Hi Professor Lisetti,

Thank you for holding extra office hours. I'll be attending at 3:30 PM if that's okay. I have a few questions about the UML diagram requirements in P2.

See you then,
Student`
  },

  // ── Feb 19, 2026 ────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 2, checked: false,
    initials: "TS", avatarColor: "#3a7a5e",
    body: `Hey team,

Prof. Lisetti opened the P2 demo slots on Canvas Scheduler. There are only a few time slots left on March 4th and 5th. I signed us up for March 4th at 2:00 PM — let me know if that's a problem.

We'll need to have our slides and live demo ready. Our prototype needs to show at least 3 end-to-end use cases.

Trinity`
  },

  // ── Feb 18, 2026 ────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Good work on the overall structure. The class diagram is well-organized and clearly shows the relationships between your modules.

Two areas to improve for P1C:
1. Your sequence diagrams are missing the return arrows — these are required per the UML 2.0 standard.
2. The component diagram should reflect deployment boundaries, not just logical groupings.

Score: 87/100

– Prof. Lisetti`
  },

  // ── Feb 16, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 3, checked: false,
    initials: "KS", avatarColor: "#2d6a8a",
    body: `Hello Professor Lisetti,

Thank you so much for your feedback on P1C. I had a question about the grading on the second section — could you help clarify the rubric criteria for the architecture diagram portion?

I wanted to make sure I understand the expectations for the upcoming P2 submission.

Thank you,
Kenny Shao`
  },

  // ── Feb 14, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "KS", avatarColor: "#2d6a8a",
    body: `Nice solution! Your recurrence relation is correct and your memoization approach is sound.

However, your runtime analysis in Problem 2b is off. You stated O(n log n) but the correct complexity is O(n²) due to the nested loop in your reconstruction step.

Deducted 5 points. Score: 92/100.

– Prof. Shao`
  },

  // ── Feb 12, 2026 ────────────────────────────────────────────────────────
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
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 2, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Hi all,

I will be holding extra office hours this Friday, Feb 14, from 2:00–4:00 PM via Zoom due to the upcoming project milestone. The link is on the Canvas course homepage.

Please come prepared with specific questions about your design documents.

Best,
Christine Lisetti`
  },

  // ── Feb 11, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "DR", avatarColor: "#2e86c1",
    body: `I've uploaded 20 additional practice problems for chemical equilibrium under Modules > Exam 2 Prep.

These problems mirror the difficulty and format of what you can expect on Exam 2. Solutions will be posted on February 25th (one day before the exam).

Also, a review session will be held February 24th at 6:00 PM in GC 143.

– Dr. David Rodriguez`
  },

  // ── Feb 10, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "CN", avatarColor: "#e66000",
    body: `A new grade has been posted for Exam 2 in CAP4506 RVAA.

Please log into Canvas to view your grade and any instructor feedback.

This is an automated notification from Canvas.`
  },
  {
    id: "m_rw_exam",
    isoDate: "2026-02-10T05:50:00",
    displayDate: "Feb 10, 2026",
    timestamp: "Feb 10, 2026 at 5:50am",
    sender: "Richard Whittaker",
    senderList: ["Richard Whittaker"],
    senderDisplay: "Richard Whittaker",
    courses: ["CAP4506 RVAA", "CAP5507 RVAA 1261"],
    subject: "Game Theory (IMPORTANT) -> Updated your exam score -> issue with two questions on the exam",
    preview: "Hello, I have added 2 points (the exam has a max score of 20, hence 10%) to your exam2 score…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Hello,

I have added 2 points ( the exam has a max score of 20, hence 10%) to your exam2 score because an issue with two questions on the exam.

Please note that the maximum possible score on the exam is 20 points. If your score already reached the maximum, no additional points were added beyond that cap.

Hope this helps.`
  },

  // ── Feb 8, 2026 ─────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "sent", type: "message", badge: 1, checked: false,
    initials: "ME", avatarColor: "#394b58",
    body: `Hi Professor Shao,

I was working through Problem 3 on HW4 and I'm not sure whether we're expected to prove the lower bound using an adversary argument or a reduction. The problem statement says "prove it is hard" which is ambiguous.

Could you clarify?

Thank you`
  },

  // ── Feb 7, 2026 ─────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 4, checked: false,
    initials: "TS", avatarColor: "#3a7a5e",
    body: `Hey team,

Wanted to set up a time to meet and divide up the tasks for Project 2. I was thinking this Tuesday after class, around 5:30 PM in the library study room.

Let me know if that works or if you'd prefer a Zoom call instead.

Trinity`
  },

  // ── Feb 5, 2026 ─────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "MG", avatarColor: "#c0392b",
    body: `Your quiz has been regraded per your regrade request.

You received partial credit on Problem 4: your setup was correct but you dropped a negative sign in the integration by parts step. I awarded 3 out of 5 points instead of 0.

Updated score: 81/100.

– Prof. Garcia`
  },

  // ── Feb 3, 2026 ─────────────────────────────────────────────────────────
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
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Hello,

The midterm review sheet is now posted on Canvas under Files > Study Materials. It covers all topics from weeks 1–7, including algorithm design, complexity analysis, and the dynamic programming exercises.

Good luck studying!

Richard`
  },

  // ── Feb 1, 2026 ─────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "DR", avatarColor: "#2e86c1",
    body: `Hi class,

Exam 1 grades are now posted. The class average was 72%. The exam covered stoichiometry, molarity, and acid-base reactions.

If you scored below 65%, please schedule a meeting with me or visit the Chemistry tutoring center in GC 280.

Exam 2 will be held on February 26th and will cover topics from Chapters 5–8.

– Dr. David Rodriguez`
  },

  // ── Jan 30, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Due to multiple students requesting an extension on HW2, I am granting a 48-hour extension. The new deadline is February 1st at 11:59 PM.

No further extensions will be granted. Please submit via Canvas — email submissions will not be accepted.

– Richard Whittaker`
  },

  // ── Jan 27, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_ts_protopie",
    isoDate: "2026-01-27T14:00:00",
    displayDate: "Jan 27, 2026",
    timestamp: "Jan 27, 2026 at 2:00pm",
    sender: "Bryan Diaz",
    senderList: ["Bryan Diaz", "Jazmin Lagier", "Christine Lisetti"],
    senderDisplay: "Bryan Diaz, Jazmin Lagier, Christine Lis…",
    courses: ["CAP5109 U01 1261"],
    subject: "Protopie link for anyone interested",
    preview: "https://www.protopie.io/ This is a link…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "BD", avatarColor: "#8e44ad",
    body: `Hi everyone,

For those interested in using Protopie for your interactive prototypes, here's the link:

https://www.protopie.io/

This is a link to a free student plan that some of us have been using. It's great for high-fidelity interactions without needing to code. Let me know if you have any questions!

– Bryan`
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "SC", avatarColor: "#7d3c98",
    body: `Reminder that next Monday's class will be a peer review workshop for Essay 2.

Please bring two printed copies of your draft (or have it open on your laptop). We will be exchanging drafts with a partner and using the peer review rubric, which is posted under Modules > Essay 2.

Attendance is mandatory for full credit on this assignment.

– Prof. Sarah Chen`
  },

  // ── Jan 25, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_trinity_p1a",
    isoDate: "2026-01-25T11:26:00",
    displayDate: "Jan 25, 2026",
    timestamp: "Jan 25, 2026 at 11:26am",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro", "Kenny Shao"],
    senderDisplay: "Trinity Socorro, Kenny Shao",
    courses: ["CAP5109 U01 1261"],
    subject: "P1a Feedback",
    preview: "Hi Kenny, Attached is additional feedback for P1a within the comments…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    pronouns: "She/Her/Hers",
    body: `Hi Kenny,

Attached is additional feedback for P1a within the comments on the document. I understand you changed your project topic, and these tables might no longer be relevant, but hopefully, the feedback can guide what to include going forward.

If you have questions, please let me know.

Best Wishes,
Trinity`
  },

  // ── Jan 24, 2026 ────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "MG", avatarColor: "#c0392b",
    body: `Hi everyone,

Quiz 3 grades have been posted. The class average was 78%. If you scored below 70%, I strongly encourage you to attend office hours this week before the midterm.

The midterm will be held on February 6th in our usual classroom. A practice exam has been posted under Modules > Midterm Resources.

Best,
Prof. Maria Garcia`
  },

  // ── Jan 23, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_trinity_projchange",
    isoDate: "2026-01-23T09:00:00",
    displayDate: "Jan 23, 2026",
    timestamp: "Jan 23, 2026 at 9:00am",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro", "Kenny Shao"],
    senderDisplay: "Trinity Socorro, Kenny Shao",
    courses: ["CAP5109 U01 1261"],
    subject: "Project Change",
    preview: "Hi Kenny, Sorry for responding so late…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 2, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    body: `Hi Kenny,

Sorry for responding so late. I saw your message about wanting to change the project topic. I think the new direction is more feasible for the timeline, and I support the change.

Please update the P1b document to reflect the new topic before submission. Make sure the problem statement, user personas, and requirements are all updated accordingly.

Best Wishes,
Trinity`
  },

  // ── Jan 22, 2026 ────────────────────────────────────────────────────────
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
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "JT", avatarColor: "#1a6b45",
    body: `For those unfamiliar with R, I have posted a set of tutorial videos and a sample script under Modules > R Resources.

These cover:
- Installing R and RStudio
- Loading and cleaning datasets
- Running descriptive statistics and ggplot2 visualizations

Project 1 is due February 14th. Your analysis must be reproducible — submit both your .R script and your knitted HTML report.

– Prof. James Thompson`
  },

  // ── Jan 21, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "CN", avatarColor: "#e66000",
    body: `A new assignment has been posted in STA2023 – Elementary Statistics.

Assignment: Statistics Project 1 – Exploratory Data Analysis
Due: February 14, 2026 at 11:59 PM

Please log into Canvas to view the full assignment details.

This is an automated notification from Canvas.`
  },

  // ── Jan 20, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "JT", avatarColor: "#1a6b45",
    body: `Hello class,

The Lab 2 instructions have been uploaded to the Files section under Labs. You will need SPSS or R to complete the analysis portion. A tutorial video has been posted under Modules > Lab Resources.

Lab 2 is due February 3rd by midnight. No late submissions will be accepted without prior approval.

– Prof. James Thompson`
  },

  // ── Jan 18, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 2, checked: false,
    initials: "SC", avatarColor: "#7d3c98",
    body: `Dear students,

Your Essay 1 feedback is now available in SpeedGrader. Please review my comments carefully before beginning your revision.

Key areas for improvement:
- Strengthen your thesis statement with a specific argument
- Integrate quotes more naturally using signal phrases
- Ensure your conclusion synthesizes rather than summarizes

Revised drafts are due January 31st. This revision counts for 50% of your Essay 1 grade.

Prof. Sarah Chen`
  },

  // ── Jan 17, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KS", avatarColor: "#2d6a8a",
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

  // ── Jan 16, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "sent", type: "message", badge: 1, checked: false,
    initials: "ME", avatarColor: "#394b58",
    body: `Hi Professor Garcia,

I received a 65 on Quiz 3 and would love to attend office hours before the midterm. Would Thursday at 2 PM work?

Thank you`
  },

  // ── Jan 15, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "DR", avatarColor: "#2e86c1",
    body: `Please complete the pre-lab safety quiz before arriving to Thursday's lab session. You will NOT be admitted without a passing score (70% or higher).

The quiz is under Modules > Lab 3 – Acid-Base Titration.

Also, remember to bring your safety goggles and closed-toe shoes. Lab coats are available at the equipment desk.

– Dr. David Rodriguez`
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "SC", avatarColor: "#7d3c98",
    body: `Please purchase or access the following texts before our first class:

1. "They Say / I Say" by Graff & Birkenstein (4th edition)
2. Purdue OWL Online – free at owl.purdue.edu

All other readings will be provided as PDFs on Canvas. There is no other textbook required.

Looking forward to meeting you all,
Prof. Sarah Chen`
  },

  // ── Jan 13, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Please submit your team of 3–4 members via the Canvas Groups tool by January 17th.

If you do not have a team by the deadline, I will assign you to one. Teams are final after January 17th — no changes will be accommodated after that date.

Project 1A requirements and starter code will be released January 20th.

– Prof. Christine Lisetti`
  },

  // ── Jan 12, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Hi everyone,

I have updated the grading rubric for P1B to better reflect the deliverables discussed in last week's lecture. The updated rubric is now available under the assignment on Canvas.

Please note that the peer review component now accounts for 15% of the total grade instead of 10%. Make sure your submission includes the peer review checklist.

Deadline remains January 22nd at 11:59 PM.

Best,
Christine Lisetti`
  },

  // ── Jan 10, 2026 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Hello and welcome to Spring 2026!

I'm excited to have all of you in class this semester. Please take a few minutes to review the syllabus carefully — it is posted under the Start Here module. The first day of class will be January 13th and attendance is mandatory.

Office hours will be Tuesdays and Thursdays, 3:00–5:00 PM in EC 3920.

Looking forward to a great semester,
Richard Whittaker`
  },

  // ── Jan 6, 2026 ─────────────────────────────────────────────────────────
  {
    id: "m_michelle_whatsapp",
    isoDate: "2026-01-06T10:30:00",
    displayDate: "Jan 6, 2026",
    timestamp: "Jan 6, 2026 at 10:30am",
    sender: "Michelle Pancier",
    senderList: ["Michelle Pancier", "Samuel Perez", "Kenneth Shao"],
    senderDisplay: "Michelle Pancier, Samuel Perez, Kenneth …",
    courses: ["CIS5208 U01 1261"],
    subject: "whatsapp chat",
    preview: "Hello everyone! I created a WhatsApp gro…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "MP", avatarColor: "#16a085",
    body: `Hello everyone!

I created a WhatsApp group for our class so we can coordinate more easily outside of Canvas. Please join using the link below:

https://chat.whatsapp.com/ClassGroupLink2026

Hope everyone had a great break and is ready for the semester!

– Michelle`
  },
  {
    id: "m_diego_groupchat",
    isoDate: "2026-01-06T08:18:00",
    displayDate: "Jan 6, 2026",
    timestamp: "Jan 6, 2026 at 8:18am",
    sender: "Diego Rodriguez",
    senderList: ["Diego Rodriguez", "Mauricio Esteves", "Muzaffar Shareef"],
    senderDisplay: "Diego Rodriguez, Mauricio Esteves, Muzaf…",
    courses: ["CIS5208 U01 1261"],
    subject: "Group chat",
    preview: "https://chat.whatsapp.com/KrdlcPAmm1w039dg2I9Udi",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "DR", avatarColor: "#27ae60",
    body: `https://chat.whatsapp.com/KrdlcPAmm1w039dg2I9Udi`
  },

  // ── Jan 5, 2026 ─────────────────────────────────────────────────────────
  {
    id: "m_hamzah_whatsapp",
    isoDate: "2026-01-05T14:00:00",
    displayDate: "Jan 5, 2026",
    timestamp: "Jan 5, 2026 at 2:00pm",
    sender: "Hamzah Masri",
    senderList: ["Hamzah Masri", "Mauricio Esteves", "Muzaffar Shareef"],
    senderDisplay: "Hamzah Masri, Mauricio Esteves, Muzaffar…",
    courses: ["CIS5208 U01 1261"],
    subject: "WhatsApp Link",
    preview: "https://chat.whatsapp.com/IqekOwg70Nz7H4…",
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "HM", avatarColor: "#d35400",
    body: `Hi everyone,

Here is the WhatsApp group link for our project team:

https://chat.whatsapp.com/IqekOwg70Nz7H4aBcDeFg

Please join so we can coordinate our project meetings and share files more easily.

– Hamzah`
  },

  // ── Dec 20, 2025 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: true,
    folder: "archived", type: "announcement", badge: 1, checked: false,
    initials: "RW", avatarColor: "#7a5c44",
    body: `Hi all,

Final grades for Fall 2025 have been submitted to the Registrar. They should appear in your MyFIU portal within 48–72 hours.

It was a pleasure teaching you this semester. I hope to see many of you in future courses.

Best,
Richard Whittaker`
  },

  // ── Dec 15, 2025 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: true,
    folder: "archived", type: "announcement", badge: 1, checked: false,
    initials: "MG", avatarColor: "#c0392b",
    body: `The final exam for Calculus II (MAC2311) will be held on December 17th, 7:30–10:00 AM in CB 120.

You are allowed one handwritten 8.5×11 note sheet (both sides). No calculators.

Arrive at least 15 minutes early. Bring your FIU ID.

Good luck,
Prof. Maria Garcia`
  },

  // ── Dec 11, 2025 ────────────────────────────────────────────────────────
  {
    id: "m_kiavash_spot",
    isoDate: "2025-12-11T09:00:00",
    displayDate: "Dec 11, 2025",
    timestamp: "Dec 11, 2025 at 9:00am",
    sender: "Kiavash Bahreini",
    senderList: ["Kiavash Bahreini", "Kenny Shao"],
    senderDisplay: "Kiavash Bahreini, Kenny Shao",
    courses: ["CEN5064 UHA 1258"],
    subject: "SPOT Survey",
    preview: "Dear students, Please ignore this messa…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KB", avatarColor: "#2c3e50",
    body: `Dear students,

Please ignore this message — it was sent in error. The SPOT survey link will be resent shortly with the correct course information.

Apologies for the confusion.

– Kiavash Bahreini`
  },

  // ── Dec 10, 2025 ────────────────────────────────────────────────────────
  {
    id: "m_kharraz_cen5079",
    isoDate: "2025-12-10T23:02:00",
    displayDate: "Dec 10, 2025",
    timestamp: "Dec 10, 2025 at 11:02pm",
    sender: "Mohammadamin Kharraz",
    senderList: ["Mohammadamin Kharraz", "Lyzbeth Armenteros", "Jonathan Martinez"],
    senderDisplay: "Mohammadamin Kharraz, Lyzbeth Armenteros…",
    courses: ["CEN5079 RVC 1258"],
    subject: "Thank You for Enrolling to CEN5079 & SPOTs Survey",
    preview: "Hello CEN5079 Students, First and foremost, thank you for taking this course…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "MK", avatarColor: "#6c3483",
    body: `Hello CEN5079 Students,

First and foremost, thank you for taking this course. I truly enjoyed teaching it and appreciated the energy and curiosity you brought to class. We received a ton of interesting questions throughout the semester, and I felt like the majority was engaged and eager to learn.

Let me highlight a few things you've accomplished:

At the beginning of the course, just a few students reported some familiarity with SQL injection.

Many had never heard of SSH or had never used it.

We covered web application security, network security fundamentals, and ethical hacking practices that are directly applicable to real-world scenarios.

Please complete the SPOT survey — your feedback genuinely helps improve the course for future students.

Link: https://spot.fiu.edu

Best,
Prof. Kharraz`
  },

  // ── Dec 10, 2025 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: true,
    folder: "archived", type: "submission_comment", badge: 1, checked: false,
    initials: "JT", avatarColor: "#1a6b45",
    body: `Final project grades are now available in Canvas Gradebook.

Great work this semester, everyone. The class average on the final project was 84%. Many of you demonstrated strong command of regression analysis and hypothesis testing.

Final course grades will be submitted to the Registrar by December 18th.

Prof. James Thompson`
  },

  // ── Dec 4, 2025 ─────────────────────────────────────────────────────────
  {
    id: "m_kharraz_finalreminder",
    isoDate: "2025-12-04T20:00:00",
    displayDate: "Dec 4, 2025",
    timestamp: "Dec 4, 2025 at 8:00pm",
    sender: "Mohammadamin Kharraz",
    senderList: ["Mohammadamin Kharraz", "Lyzbeth Armenteros"],
    senderDisplay: "Mohammadamin Kharraz, Lyzbeth Armenteros…",
    courses: ["CEN5079 RVC 1258"],
    subject: "A Quick Reminder on the Final Exam",
    preview: "Hi folks, Hope all is well. Than…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "MK", avatarColor: "#6c3483",
    body: `Hi folks,

Hope all is well. This is a quick reminder about the final exam for CEN5079.

The exam will cover all material from Weeks 1–14, including:
- Web Application Security (SQL Injection, XSS, CSRF)
- Network Security (Firewalls, IDS/IPS, VPNs)
- Cryptography fundamentals
- Ethical Hacking methodology

Date: December 14th
Time: 7:30–10:00 AM
Location: CASE 241

Good luck, and please reach out if you have questions.

– Prof. Kharraz`
  },

  // ── Dec 2, 2025 ─────────────────────────────────────────────────────────
  {
    id: "m_charlyne_team",
    isoDate: "2025-12-02T18:18:00",
    displayDate: "Dec 2, 2025",
    timestamp: "Dec 2, 2025 at 6:18pm",
    sender: "Charlyne Walker",
    senderList: ["Charlyne Walker", "Joseph Quinn", "Gerald Gonzalez"],
    senderDisplay: "Charlyne Walker, Joseph Quinn, Kenny Sha…",
    courses: ["CIS5372 RVC 1258"],
    subject: "Team members",
    preview: "Good Evening, I've set up your group in Canvas as Team 08…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: true,
    initials: "CW", avatarColor: "#1a5276",
    body: `Good Evening,
I've set up your group in Canvas as Team 08. If you go into Canvas, go under People and select you team, there will be the three dot menu. Under there you will find your team's site. You can post announcements, create files and so on just for your team. You are not required to use the site, but it is there for you should the team wish to use it.

Only one member of the team will need to submit the team assignments for grading as well now that your team is set up.

The team members are:
Gonzalez, Gerald
Quinn, Joseph
[Your name]

Best,
Charlyne Walker`
  },

  // ── Dec 1, 2025 ─────────────────────────────────────────────────────────
  {
    id: "m_kharraz_reminder_quiz",
    isoDate: "2025-12-01T14:00:00",
    displayDate: "Dec 1, 2025",
    timestamp: "Dec 1, 2025 at 2:00pm",
    sender: "Mohammadamin Kharraz",
    senderList: ["Mohammadamin Kharraz", "Lyzbeth Armenteros"],
    senderDisplay: "Mohammadamin Kharraz, Lyzbeth Armenteros…",
    courses: ["CEN5079 RVC 1258"],
    subject: "A Reminder on final exam, Quiz 2 key, and…",
    preview: "Hi Folks, Hope all is well. I hope you …",
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "MK", avatarColor: "#6c3483",
    body: `Hi Folks,

Hope all is well. I hope you had a productive Thanksgiving break.

A few reminders:
1. Quiz 2 answer key has been posted under Modules > Quizzes > Quiz 2 Key
2. The final exam is scheduled for December 14th at 7:30 AM — please plan accordingly
3. Office hours this week will be held Wednesday only, 2:00–4:00 PM on Zoom (link on course homepage)

Let me know if you have any questions.

Best,
Prof. Kharraz`
  },

  // ── Nov 30, 2025 ────────────────────────────────────────────────────────
  {
    id: "m_kiavash_finalexam",
    isoDate: "2025-11-30T18:38:00",
    displayDate: "Nov 30, 2025",
    timestamp: "Nov 30, 2025 at 6:38pm",
    sender: "Kiavash Bahreini",
    senderList: ["Kiavash Bahreini", "Kenny Shao"],
    senderDisplay: "Kiavash Bahreini, Kenny Shao",
    courses: ["CEN5064 UHA 1258"],
    subject: "CEN5064: Final Exam Information",
    preview: "Dear class, CEN5064 Final Exam Information…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KB", avatarColor: "#2c3e50",
    body: `Dear class,

CEN5064 Final Exam Information:

-Date: Monday, December 1, 2025
-Time: 2:00 PM - 3:15 PM
-Duration: 60 Minutes
-Requirements: Respondus LockDown Browser
-Optional: One paper and one pen to write your notes during the exam

Good luck, and see you tomorrow at 2:00 PM.

Best regards,
Kiavash Bahreini`
  },
  {
    id: "m_kharraz_hints7",
    isoDate: "2025-11-30T12:00:00",
    displayDate: "Nov 30, 2025",
    timestamp: "Nov 30, 2025 at 12:00pm",
    sender: "Mohammadamin Kharraz",
    senderList: ["Mohammadamin Kharraz", "Lyzbeth Armenteros"],
    senderDisplay: "Mohammadamin Kharraz, Lyzbeth Armenteros…",
    courses: ["CEN5079 RVC 1258"],
    subject: "Hints on Project 7",
    preview: "Folks, The first part of project 7,…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "MK", avatarColor: "#6c3483",
    body: `Folks,

The first part of project 7 involves scanning for open ports on the target machine. Use the following approach:

1. Start with a basic nmap scan: nmap -sV <target_ip>
2. Identify services running on non-standard ports
3. For web services, attempt directory enumeration with gobuster or dirb

Remember to document every step in your report — methodology, commands used, output, and interpretation.

If you get stuck on the privilege escalation portion, think about SUID binaries and misconfigured sudo permissions.

Good luck!
– Prof. Kharraz`
  },

  // ── Nov 25, 2025 ────────────────────────────────────────────────────────
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
    unread: false, starred: false, archived: true,
    folder: "archived", type: "announcement", badge: 1, checked: false,
    initials: "SC", avatarColor: "#7d3c98",
    body: `Hi everyone,

Just a reminder that there are no office hours from November 26–28 for Thanksgiving break. I'll return to my normal schedule on December 2nd.

Have a restful break!

Prof. Sarah Chen`
  },

  // ── Oct 31, 2025 ────────────────────────────────────────────────────────
  {
    id: "m_kiavash_officehours",
    isoDate: "2025-10-31T09:59:00",
    displayDate: "Oct 31, 2025",
    timestamp: "Oct 31, 2025 at 9:59am",
    sender: "Kiavash Bahreini",
    senderList: ["Kiavash Bahreini", "Kenny Shao"],
    senderDisplay: "Kiavash Bahreini, Kenny Shao",
    courses: ["CEN5064 UHA 1258"],
    subject: "💻 Office Hours Today: Zoom Q&A",
    preview: "Good morning, I hope you're having a productive week!",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KB", avatarColor: "#2c3e50",
    body: `Good morning,

I hope you're having a productive week!

I will be holding virtual office hours today, Friday, October 31, 2025, from 11:00 AM to 2:00 PM (EDT). This is a great opportunity to connect via Zoom and discuss:

-Course material and clarify any complex topics.
-Assignments or upcoming deadlines.
-Any concerns you'd like to address.

To join the Zoom office hours, use the link that is posted on the course homepage.

Best regards,
Kiavash Bahreini`
  },

  // ── Oct 24, 2025 ────────────────────────────────────────────────────────
  {
    id: "m_kharraz_bruteforce",
    isoDate: "2025-10-24T10:00:00",
    displayDate: "Oct 24, 2025",
    timestamp: "Oct 24, 2025 at 10:00am",
    sender: "Mohammadamin Kharraz",
    senderList: ["Mohammadamin Kharraz", "Lyzbeth Armenteros"],
    senderDisplay: "Mohammadamin Kharraz, Lyzbeth Armenteros…",
    courses: ["CEN5079 RVC 1258"],
    subject: "Bruteforcing the web server for project…",
    preview: "Folks, Hope all is well. For project…",
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "MK", avatarColor: "#6c3483",
    body: `Folks,

Hope all is well. For project 5, several students have asked about the web server brute-forcing portion.

Here are some hints:
- Use Hydra or Burp Suite Intruder for the login form attack
- The username is likely a common default — check the application documentation
- For the wordlist, SecLists (rockyou.txt) is a good starting point
- Pay attention to the HTTP response codes and response length to identify successful logins

Make sure your report documents:
1. The tool used and command syntax
2. The result (credentials found)
3. How you would remediate this vulnerability in a real application

Good luck!
– Prof. Kharraz`
  },

  // ── Oct 16, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_quiz3",
    isoDate: "2022-10-16T14:00:00",
    displayDate: "Oct 16, 2022",
    timestamp: "Oct 16, 2022 at 2:00pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Quiz-3 is available now in Canvas",
    preview: "Dear student, Quiz-3 is now available in…",
    unread: false, starred: false, archived: true,
    folder: "archived", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

Quiz-3 is now available in Canvas under Modules > Quizzes. You have 30 minutes to complete it once you start.

The quiz covers topics from Chapters 23–25: Electric Fields, Gauss's Law, and Electric Potential.

Good luck!

Best wishes,
Prof. Kadel`
  },

  // ── Oct 6, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_exam1",
    isoDate: "2022-10-06T20:24:00",
    displayDate: "Oct 6, 2022",
    timestamp: "Oct 6, 2022 at 8:24pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Exam-1 grade is now available in Canvas",
    preview: "Dear student, You can now see your Exam-1 grade in Canvas…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
You can now see your Exam-1 grade in Canvas. The class average is ~81 %, which is a very good average for a physics course and is in line with the usual grade in my Physics 1 course. We will do a detailed analysis of grade distribution in tomorrow's class. I will distribute the exams tomorrow at the end of the class. You will go over it and return it to me. If you find anything, we can discuss about that.
Best wishes,
Prof. Kadel`
  },

  // ── Oct 5, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_nomeeting",
    isoDate: "2022-10-05T09:00:00",
    displayDate: "Oct 5, 2022",
    timestamp: "Oct 5, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "No meeting today, 10/05",
    preview: "Dear students, Due to the observance of…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear students,

Due to the observance of a religious holiday, there will be no class meeting today, October 5th.

The recording from last class is available on Canvas under Modules > Recordings.

Please continue working on your problem sets. I will hold extra office hours on Thursday to make up for today.

Best wishes,
Prof. Kadel`
  },

  // ── Oct 20, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kianoosh_lor",
    isoDate: "2022-10-20T14:22:00",
    displayDate: "Oct 20, 2022",
    timestamp: "Oct 20, 2022 at 2:22pm",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "Letter of Recommendation",
    preview: "Hi Kenny, Sure, I'll send the recommend…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 6, checked: true,
    initials: "KB", avatarColor: "#1a5276",
    body: `Hi Kenny,

Sure, I'll send the recommendation this week.

Best,
Kianoosh.`
  },

  // ── Nov 28, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_practicetest",
    isoDate: "2022-11-28T10:12:00",
    displayDate: "Nov 28, 2022",
    timestamp: "Nov 28, 2022 at 10:12am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Practice Test for the final is now available in Canvas",
    preview: "Dear student, A practice test for the fi…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
A practice test for the final is now available in Canvas. The final exam consists of the material from Chs 21, 26, 28, 29, 33 (32), and 34.
Please start working on the practice test as soon as possible. We will do a review for the final exam on Friday.
Have a nice Monday.
Best wishes,
Prof. K`
  },

  // ── Sep 25, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_extraoh_exam1",
    isoDate: "2022-09-25T12:45:00",
    displayDate: "Sep 25, 2022",
    timestamp: "Sep 25, 2022 at 12:45pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Extra office hours for Exam-1 today at 6:30 PM (Zoom link included)",
    preview: "Dear student, As we discussed in the class on Friday…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
As we discussed in the class on Friday, I am having an additional office hour today at 6:30 PM via Zoom. Here is the Zoom link for the meeting.

Join Zoom Meeting
https://fiu.zoom.us/j/97280744432

You can join the meeting, if you have any last minute questions.
Best wishes,`
  },

  // ── Sep 6, 2022 (recording) ──────────────────────────────────────────────
  {
    id: "m_kianoosh_recording",
    isoDate: "2022-09-06T12:30:00",
    displayDate: "Sep 6, 2022",
    timestamp: "Sep 6, 2022 at 12:30pm",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "COP4338 U01 1228 9/6 Class",
    preview: "[Recording Available] -------------------…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KB", avatarColor: "#1a5276",
    body: `[Recording Available]
--------------------------
Topic: COP4338 U01 1228 9/6 Class
Host: Kianoosh Gholamiboroujeni
Time: Sep 6, 2022 7:50 PM, Eastern Time (US and Canada)

The recording for today's class is now available. You can access it through the Zoom portal or via the link posted on Canvas under Modules > Recordings.

If you have any questions about the material covered, please post them in the class discussion board.

Best,
Kianoosh Boroojeni`
  },

  // ── Sep 6, 2022 (create meeting) ────────────────────────────────────────
  {
    id: "m_kianoosh_createmeeting",
    isoDate: "2022-09-06T11:57:00",
    displayDate: "Sep 6, 2022",
    timestamp: "Sep 6, 2022 at 11:57am",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "COP4338 U01 1228 9/6 Class",
    preview: "[Create Meeting] -------------------…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KB", avatarColor: "#1a5276",
    body: `[Create Meeting]
--------------------------
Topic: COP4338 U01 1228 9/6 Class
Host: Kianoosh Gholamiboroujeni
Time: Sep 6, 2022 7:50 PM, Eastern Time (US and Canada)
Join URL: https://fiu.zoom.us/j/97754168068`
  },

  // ── Aug 24, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_officehours_start",
    isoDate: "2022-08-24T09:00:00",
    displayDate: "Aug 24, 2022",
    timestamp: "Aug 24, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Office hours from next week",
    preview: "Dear student, I will start office hours…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

I will start office hours from next week, Monday September 5. My office hours will be:
- Mondays: 11:00 AM – 12:00 PM
- Wednesdays: 11:00 AM – 12:00 PM
Location: CP 273 (or via Zoom — link on Canvas homepage)

Best wishes,
Prof. Kadel`
  },

  // ── May 3, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_finalgrade",
    isoDate: "2022-05-03T10:00:00",
    displayDate: "May 3, 2022",
    timestamp: "May 3, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Your final grade will be available by to…",
    preview: "See the subject line!",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `See the subject line!`
  },

  // ── Apr 24, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_addloh_final",
    isoDate: "2022-04-24T11:17:00",
    displayDate: "Apr 24, 2022",
    timestamp: "Apr 24, 2022 at 11:17am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Additional office hours for the final (Zoom link included)",
    preview: "[Create Meeting] -------------------…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
As I mentioned in the class, I am having an additional office hours today at 5 PM to help you with any last minute questions in preparation of the final. Use the Zoom link below.

Topic: Additional office hours for Final Exam
Time: Apr 24, 2022 05:00 PM Eastern Time (US and Canada)

Join Zoom Meeting
https://fiu.zoom.us/j/91547446550`
  },

  // ── Apr 20, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_finalexam_phy2048",
    isoDate: "2022-04-20T07:25:00",
    displayDate: "Apr 20, 2022",
    timestamp: "Apr 20, 2022 at 7:25am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Final Exam on Monday, 4/25 2:15 PM-4:15 PM and more",
    preview: "Dear students, This is just a reminder that your final Exam…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear students,
This is just a reminder that your final Exam is scheduled for Monday, April 25, 2:15PM-4:15 PM at CP 151. As I already mentioned, the final covers the material from Chs 5, 6, 7, 9, 10, 11, 13, and 14. We are doing a review for the final on Friday, April 22.
Good luck.
Prof. K`
  },

  // ── Apr 4, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_apr4",
    isoDate: "2022-04-04T09:00:00",
    displayDate: "Apr 4, 2022",
    timestamp: "Apr 4, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Quiz-5 is available now in Canvas",
    preview: "Dear student, Quiz-5 is now available in Canvas…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

Quiz-5 is now available in Canvas under Modules > Quizzes. You have 30 minutes once you begin.

The quiz covers material from Chapters 11–13: Torque, Angular Momentum, and Gravitation.

Best wishes,
Prof. Kadel`
  },

  // ── Apr 1, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_quiz4corrections",
    isoDate: "2022-04-01T15:08:00",
    displayDate: "Apr 1, 2022",
    timestamp: "Apr 1, 2022 at 3:08pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Quiz-4 some corrections",
    preview: "Dear all, In Q4, I found that Q7 is giv…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear all,
In Q4, I found that Q7 is giving an error due to a negative sign, So, I updated as such that you need to only put the magnitude of acceleration (which is a positive number). You have to enter the number up to TWO decimal places. Other questions are correct.
Best,`
  },

  // ── Mar 21, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_ncha",
    isoDate: "2022-03-21T10:00:00",
    displayDate: "Mar 21, 2022",
    timestamp: "Mar 21, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "National College Health Assessment",
    preview: "Dear Students, To assess the health and…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear Students,

To assess the health and well-being of our campus, FIU is participating in the National College Health Assessment (NCHA). You may have already received an email from the NCHA asking you to complete a brief survey.

I strongly encourage you to participate — it only takes about 10–15 minutes and your responses are completely anonymous.

Thank you,
Prof. Kadel`
  },

  // ── Mar 10, 2022 ────────────────────────────────────────────────────────
  {
    id: "m_kadel_addloh_mar10",
    isoDate: "2022-03-10T10:00:00",
    displayDate: "Mar 10, 2022",
    timestamp: "Mar 10, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Additional office hours",
    preview: "[Create Meeting] -------------------…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `[Create Meeting]
--------------------------
Topic: PHY2048 Additional Office Hours
Host: Kamal Kadel
Time: Mar 10, 2022 11:15 AM, Eastern Time (US and Canada)
Join URL: https://fiu.zoom.us/j/94521637890

Additional office hours to go over the midterm exam. Please come prepared with specific questions.`
  },

  // ── Mar 9, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_ohsmoved",
    isoDate: "2022-03-09T09:15:00",
    displayDate: "Mar 9, 2022",
    timestamp: "Mar 9, 2022 at 9:15am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Today's office hours moved to tomorrow (Thursday) 11:15 AM-12:00 PM",
    preview: "Please see the subject line.",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Please see the subject line.`
  },

  // ── Mar 2, 2022 ─────────────────────────────────────────────────────────
  {
    id: "m_kadel_mar2",
    isoDate: "2022-03-02T10:00:00",
    displayDate: "Mar 2, 2022",
    timestamp: "Mar 2, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Midterm Exam – Practice Problems Posted",
    preview: "Dear students, Practice problems for the midterm are now…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear students,

Practice problems for the midterm exam are now available on Canvas under Modules > Midterm Prep.

The midterm covers Chapters 1–7: Kinematics, Newton's Laws, Work & Energy, and Momentum. I strongly recommend going through all the practice problems before the exam.

Best wishes,
Prof. Kadel`
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP5109 U01 1261 — Additional messages
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mar 5, 2026 ─────────────────────────────────────────────────────────
  {
    id: "m_cap5109_p2feedback",
    isoDate: "2026-03-05T10:30:00",
    displayDate: "Mar 5, 2026",
    timestamp: "Mar 5, 2026 at 10:30am",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro", "Kenny Shao"],
    senderDisplay: "Trinity Socorro, Kenny Shao",
    courses: ["CAP5109 U01 1261"],
    subject: "P2 Feedback & Rubric Clarification",
    preview: "Hi Kenny, I've reviewed your P2 submission and have some feedback…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    pronouns: "She/Her/Hers",
    body: `Hi Kenny,

I've reviewed your P2 submission and have some feedback to share.

Overall the interaction flows are well thought out, but there are a few areas to address:

1. The onboarding screens lack a progress indicator — users should always know where they are in a multi-step flow
2. Your color contrast ratios on the secondary buttons don't meet WCAG AA standards (4.5:1 required)
3. The empty state for the notification panel is missing — every state your app can be in needs a designed screen

Score: 84/100

Please incorporate this feedback into your P3 submission.

Best Wishes,
Trinity`
  },

  // ── Feb 28, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_cap5109_midterm",
    isoDate: "2026-02-28T14:00:00",
    displayDate: "Feb 28, 2026",
    timestamp: "Feb 28, 2026 at 2:00pm",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP5109 U01 1261"],
    subject: "CAP5109 – Midterm Project Presentations Schedule",
    preview: "Hi everyone, The midterm presentation schedule has been posted…",
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Hi everyone,

The midterm presentation schedule has been posted under Modules > Midterm Presentations. Please review your assigned time slot.

Presentations will be held during class on March 11th and 13th. Each team has 12 minutes to present followed by 5 minutes of Q&A.

You must submit your presentation slides to Canvas by March 10th at 11:59 PM. Late submissions will result in a 10-point penalty.

Best,
Christine Lisetti`
  },

  // ── Feb 15, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_cap5109_designsystem",
    isoDate: "2026-02-15T09:00:00",
    displayDate: "Feb 15, 2026",
    timestamp: "Feb 15, 2026 at 9:00am",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro"],
    senderDisplay: "Trinity Socorro",
    courses: ["CAP5109 U01 1261"],
    subject: "Design System Resources – Figma Libraries",
    preview: "Hi class, I wanted to share some Figma resources that will help…",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    pronouns: "She/Her/Hers",
    body: `Hi class,

I wanted to share some Figma resources that will help you build out your design systems for P2 and P3:

1. Material Design 3 Figma Kit – https://www.figma.com/community/file/1035203688168086460
2. Apple Human Interface Guidelines Components – available in Figma Community
3. FIU Brand Guidelines – posted on Canvas under Files > Resources

Please use a consistent design system across all your screens. Inconsistent spacing, typography, and color usage will be penalized in the rubric.

Best Wishes,
Trinity`
  },

  // ── Feb 4, 2026 ─────────────────────────────────────────────────────────
  {
    id: "m_cap5109_p1b_grades",
    isoDate: "2026-02-04T16:00:00",
    displayDate: "Feb 4, 2026",
    timestamp: "Feb 4, 2026 at 4:00pm",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro", "Kenny Shao"],
    senderDisplay: "Trinity Socorro, Kenny Shao",
    courses: ["CAP5109 U01 1261"],
    subject: "Submission Comment – P1b: User Research & Personas",
    preview: "Hi Kenny, Your P1b submission has been graded. Overall strong work…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    pronouns: "She/Her/Hers",
    body: `Hi Kenny,

Your P1b submission has been graded. Overall strong work on the user research section.

Strengths:
- The interview synthesis is clear and well-structured
- User personas are detailed and believable

Areas to improve:
- The journey map is missing pain points at the "discovery" stage
- You need at least 5 user interview participants; you only documented 3

Score: 89/100

Please address these gaps in P2.

Best Wishes,
Trinity`
  },

  // ── Jan 30, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_cap5109_usertesting",
    isoDate: "2026-01-30T11:00:00",
    displayDate: "Jan 30, 2026",
    timestamp: "Jan 30, 2026 at 11:00am",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP5109 U01 1261"],
    subject: "User Testing Lab – Sign Up by Feb 2",
    preview: "Hi everyone, The UX lab is available for user testing sessions…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Hi everyone,

The UX lab (CASE 242) is available for user testing sessions starting next week. If your team wants to conduct in-person usability testing for your P2 prototype, you must sign up via the Canvas Scheduler tool by February 2nd.

Available sessions: Feb 9, 10, 11 (afternoons only)
Maximum 2 teams per session

This is optional but highly recommended — in-person testing yields much richer qualitative data than remote sessions.

Best,
Christine Lisetti`
  },

  // ── Jan 20, 2026 ────────────────────────────────────────────────────────
  {
    id: "m_cap5109_syllabus",
    isoDate: "2026-01-20T08:00:00",
    displayDate: "Jan 20, 2026",
    timestamp: "Jan 20, 2026 at 8:00am",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP5109 U01 1261"],
    subject: "Welcome to CAP5109 – HCI & UX Design",
    preview: "Welcome to CAP5109! Please review the syllabus and project overview…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Welcome to CAP5109 – Human-Computer Interaction & UX Design!

Please review the following before our first class:
1. Syllabus – posted under Start Here
2. Project overview document – outlines P1a through P4
3. Required tool: Figma (free education license — sign up with your FIU email)

The course is project-based. You will work in teams of 3–4 to design and prototype a complete product experience over the semester.

First class is January 22nd. See you then!

Best,
Christine Lisetti`
  },

  // ── Dec 15, 2025 (archived) ──────────────────────────────────────────────
  {
    id: "m_cap5109_fall_final",
    isoDate: "2025-12-15T14:00:00",
    displayDate: "Dec 15, 2025",
    timestamp: "Dec 15, 2025 at 2:00pm",
    sender: "Trinity Socorro",
    senderList: ["Trinity Socorro"],
    senderDisplay: "Trinity Socorro",
    courses: ["CAP5109 U01 1261"],
    subject: "Final Presentation Grades – Fall 2025",
    preview: "Hi everyone, Final presentation grades have been posted…",
    unread: false, starred: false, archived: true,
    folder: "archived", type: "submission_comment", badge: 1, checked: false,
    initials: "TS", avatarColor: "#2980b9",
    body: `Hi everyone,

Final presentation grades have been posted in Canvas. The class average was 88%.

Several teams showed exceptional polish in their final demos. Congratulations to all who presented!

Final course grades will be submitted to the Registrar by December 20th.

Best Wishes,
Trinity`
  },

  // ── Nov 20, 2025 (archived) ──────────────────────────────────────────────
  {
    id: "m_cap5109_p4_review",
    isoDate: "2025-11-20T10:00:00",
    displayDate: "Nov 20, 2025",
    timestamp: "Nov 20, 2025 at 10:00am",
    sender: "Christine Lisetti",
    senderList: ["Christine Lisetti"],
    senderDisplay: "Christine Lisetti",
    courses: ["CAP5109 U01 1261"],
    subject: "P4 Final Deliverable – Requirements & Checklist",
    preview: "Hi everyone, The P4 final deliverable checklist has been posted…",
    unread: false, starred: true, archived: true,
    folder: "archived", type: "announcement", badge: 1, checked: false,
    initials: "CL", avatarColor: "#5a3e7a",
    body: `Hi everyone,

The P4 final deliverable checklist has been posted under Modules > P4. Please review it carefully before your final submission.

Required deliverables:
1. Final Figma prototype (shared link with view access)
2. Usability test report (minimum 5 participants)
3. Design rationale document (max 10 pages)
4. Recorded demo video (5–7 minutes)
5. Peer evaluation form (submitted individually)

Deadline: December 5th at 11:59 PM. No extensions.

Best,
Christine Lisetti`
  }

,

  // ════════════════════════════════════════════════════════════
  //  KIANOOSH BOROOJENI  –  COP4338 U01 1228
  // ════════════════════════════════════════════════════════════

  {
    id: "m_kb_lor",
    isoDate: "2022-10-20T14:22:00",
    displayDate: "Oct 20, 2022",
    timestamp: "Oct 20, 2022 at 2:22pm",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "Letter of Recommendation",
    preview: "Hi Kenny, Sure, I\'ll send the recommend…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 6, checked: true,
    initials: "KB", avatarColor: "#1a5276",
    body: `Hi Kenny,

Sure, I'll send the recommendation this week.

Best,
Kianoosh.`
  },
  {
    id: "m_kb_recording",
    isoDate: "2022-09-06T11:57:00",
    displayDate: "Sep 6, 2022",
    timestamp: "Sep 6, 2022 at 11:57am",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "COP4338 U01 1228 9/6 Class",
    preview: "[Recording Available] ----------------------------------...",
    unread: false, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "KB", avatarColor: "#1a5276",
    body: `[Recording Available]
--------------------------

Topic: COP4338 U01 1228 9/6 Class
Host: Kianoosh Gholamiboroujeni
Time: Sep 6, 2022 7:50 PM, Eastern Time (US and Canada)

The recording for today's session is now available. We covered pointers, memory management, and dynamic allocation exercises.`
  },
  {
    id: "m_kb_meeting",
    isoDate: "2022-09-06T08:00:00",
    displayDate: "Sep 6, 2022",
    timestamp: "Sep 6, 2022 at 8:00am",
    sender: "Kianoosh Boroojeni",
    senderList: ["Kianoosh Boroojeni", "Kenny Shao"],
    senderDisplay: "Kianoosh Boroojeni, Kenny Shao",
    courses: ["COP4338 U01 1228"],
    subject: "COP4338 U01 1228 9/6 Class",
    preview: "[Create Meeting] ----------------------------------...",
    unread: true, starred: true, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: true,
    initials: "KB", avatarColor: "#1a5276",
    body: `[Create Meeting]
--------------------------

Topic: COP4338 U01 1228 9/6 Class
Host: Kianoosh Gholamiboroujeni
Time: Sep 6, 2022 7:50 PM, Eastern Time (US and Canada)
Join URL: https://fiu.zoom.us/j/97754168068`
  },

  // ════════════════════════════════════════════════════════════
  //  KAMAL KADEL  –  PHY2049 U01 1228  (Fall 2022)
  // ════════════════════════════════════════════════════════════

  {
    id: "m_kadel_practicetest",
    isoDate: "2022-11-28T10:12:00",
    displayDate: "Nov 28, 2022",
    timestamp: "Nov 28, 2022 at 10:12am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Practice Test for the final is now available in Canvas",
    preview: "Dear student, A practice test for the fi…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
A practice test for the final is now available in Canvas. The final exam consists of the material from Chs 21, 26, 28, 29, 33 (32), and 34.
Please start working on the practice test as soon as possible. We will do a review for the final exam on Friday.
Have a nice Monday.
Best wishes,
Prof. K`
  },
  {
    id: "m_kadel_nomeeting",
    isoDate: "2022-10-05T09:00:00",
    displayDate: "Oct 5, 2022",
    timestamp: "Oct 5, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "No meeting today, 10/05",
    preview: "Dear students, Due to the observance of …",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear students,

Due to the observance of a university holiday, there will be no class meeting today, October 5th.

Please use this time to review Chapters 21–23 and work on the practice problems posted under Modules > Exam 1 Prep.

Best wishes,
Prof. Kadel`
  },
  {
    id: "m_kadel_officehours_exam1",
    isoDate: "2022-09-25T12:45:00",
    displayDate: "Sep 25, 2022",
    timestamp: "Sep 25, 2022 at 12:45pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Extra office hours for Exam-1 today at 6:30 PM (Zoom link included)",
    preview: "Dear student, As we discussed in the cla…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
As we discussed in the class on Friday, I am having an additional office hour today at 6:30 PM via Zoom. Here is the Zoom link for the meeting.

Join Zoom Meeting
https://fiu.zoom.us/j/97280744432

You can join the meeting, if you have any last minute questions.
Best wishes,`
  },
  {
    id: "m_kadel_officehours_start",
    isoDate: "2022-08-24T10:00:00",
    displayDate: "Aug 24, 2022",
    timestamp: "Aug 24, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2049 U01 1228"],
    subject: "Office hours from next week",
    preview: "Dear student, I will start office hours …",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

I will start office hours from next week on Tuesdays and Thursdays from 11:15 AM to 12:15 PM in CP 273.

A Zoom link will also be available on the course homepage for remote attendance.

Best wishes,
Prof. Kadel`
  },

  // ════════════════════════════════════════════════════════════
  //  KAMAL KADEL  –  PHY2048 U02 U3M 1221  (Spring 2022)
  // ════════════════════════════════════════════════════════════

  {
    id: "m_kadel_finalgrade",
    isoDate: "2022-05-03T09:00:00",
    displayDate: "May 3, 2022",
    timestamp: "May 3, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Your final grade will be available by today",
    preview: "See the subject line!",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `See the subject line!

Your final grade will be available by today in Canvas. If you have any concerns about your grade, please email me within 48 hours.

Best wishes,
Prof. K`
  },
  {
    id: "m_kadel_addl_oh_final_zoom",
    isoDate: "2022-04-24T11:17:00",
    displayDate: "Apr 24, 2022",
    timestamp: "Apr 24, 2022 at 11:17am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Additional office hours for the final (Zoom link included)",
    preview: "Dear student, As I mentioned in the cla…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,
As I mentioned in the class, I am having an additional office hours today at 5 PM to help you with any last minute questions in preparation of the final. Use the Zoom link below.

Topic: Additional office hours for Final Exam
Time: Apr 24, 2022 05:00 PM Eastern Time (US and Canada)

Join Zoom Meeting
https://fiu.zoom.us/j/91547446550`
  },
  {
    id: "m_kadel_addl_oh_final_meeting",
    isoDate: "2022-04-24T08:00:00",
    displayDate: "Apr 24, 2022",
    timestamp: "Apr 24, 2022 at 8:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Additional office hours for Final Exam",
    preview: "[Create Meeting] ----------------------------------...",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `[Create Meeting]
--------------------------

Topic: Additional office hours for Final Exam
Host: Kamal Kadel
Time: Apr 24, 2022 05:00 PM Eastern Time (US and Canada)
Join URL: https://fiu.zoom.us/j/91547446550`
  },
  {
    id: "m_kadel_finalexam_reminder",
    isoDate: "2022-04-20T07:25:00",
    displayDate: "Apr 20, 2022",
    timestamp: "Apr 20, 2022 at 7:25am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Final Exam on Monday, 4/25 2:15 PM-4:15 PM and more",
    preview: "Dear students, This is just a reminder t…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear students,
This is just a reminder that your final Exam is scheduled for Monday, April 25, 2:15PM-4:15 PM at CP 151. As I already mentioned, the final covers the material from Chs 5, 6, 7, 9, 10, 11, 13, and 14. We are doing a review for the final on Friday, April 22.
Good luck.
Prof. K`
  },
  {
    id: "m_kadel_apr4_quiz5",
    isoDate: "2022-04-04T10:00:00",
    displayDate: "Apr 4, 2022",
    timestamp: "Apr 4, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Quiz-5 is now available in Canvas",
    preview: "Dear student, Quiz-5 is now available…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

Quiz-5 is now available in Canvas under Modules > Quizzes. It covers Chapters 12, 13, and 14 (rotational motion, gravity, and oscillations).

You have 30 minutes once you start. The quiz closes Sunday at 11:59 PM.

Best wishes,
Prof. K`
  },
  {
    id: "m_kadel_quiz4corrections",
    isoDate: "2022-04-01T15:08:00",
    displayDate: "Apr 1, 2022",
    timestamp: "Apr 1, 2022 at 3:08pm",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Quiz-4 some corrections",
    preview: "Dear all, In Q4, I found that Q7 is giv…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear all,
In Q4, I found that Q7 is giving an error due to a negative sign, So, I updated as such that you need to only put the magnitude of acceleration (which is a positive number). You have to enter the number up to TWO decimal places. Other questions are correct.
Best,`
  },
  {
    id: "m_kadel_ncha",
    isoDate: "2022-03-21T09:00:00",
    displayDate: "Mar 21, 2022",
    timestamp: "Mar 21, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "National College Health Assessment",
    preview: "Dear Students, To assess the health and…",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear Students,

To assess the health and wellbeing of our student community, FIU is participating in the National College Health Assessment survey. Your participation is voluntary and completely anonymous.

The survey takes approximately 10 minutes to complete. Participants are entered into a drawing for one of several $50 Amazon gift cards.

Survey link: https://fiu.qualtrics.com/ncha2022

Best wishes,
Prof. Kadel`
  },
  {
    id: "m_kadel_addl_oh_meeting",
    isoDate: "2022-03-10T10:00:00",
    displayDate: "Mar 10, 2022",
    timestamp: "Mar 10, 2022 at 10:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Additional office hours",
    preview: "[Create Meeting] ----------------------------------...",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "message", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `[Create Meeting]
--------------------------

Topic: Additional office hours – Exam 2 Review
Host: Kamal Kadel
Time: Mar 10, 2022 11:15 AM Eastern Time (US and Canada)
Join URL: https://fiu.zoom.us/j/95412783096`
  },
  {
    id: "m_kadel_oh_moved",
    isoDate: "2022-03-09T09:15:00",
    displayDate: "Mar 9, 2022",
    timestamp: "Mar 9, 2022 at 9:15am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Today's office hours moved to tomorrow (Thursday) 11:15 AM-12:00 PM",
    preview: "Please see the subject line.",
    unread: false, starred: false, archived: false,
    folder: "inbox", type: "announcement", badge: 1, checked: true,
    initials: "KK", avatarColor: "#2471a3",
    body: `Please see the subject line.`
  },
  {
    id: "m_kadel_mar2_exam2",
    isoDate: "2022-03-02T09:00:00",
    displayDate: "Mar 2, 2022",
    timestamp: "Mar 2, 2022 at 9:00am",
    sender: "Kamal Kadel",
    senderList: ["Kamal Kadel", "Kenny Shao"],
    senderDisplay: "Kamal Kadel, Kenny Shao",
    courses: ["PHY2048 U02 U3M 1221"],
    subject: "Exam-2 grade is now available in Canvas",
    preview: "Dear student, You can now see your Exam-2 grade…",
    unread: true, starred: false, archived: false,
    folder: "inbox", type: "submission_comment", badge: 1, checked: false,
    initials: "KK", avatarColor: "#2471a3",
    body: `Dear student,

You can now see your Exam-2 grade in Canvas. The class average was approximately 76%.

We will go over the exam in class on Wednesday. Please bring questions about specific problems.

Best wishes,
Prof. Kadel`
  }

];