(function () {
  const courses = [
    "ENC1001", "MAC2311", "COP3337", "BSC2010", "CHM1045",
    "STA2023", "POS2041", "PSY2012", "HIS1040", "PHI2010"
  ];

  const subjects = [
    "Assignment Posted",
    "Quiz Reminder",
    "Homework Due",
    "Project Update",
    "Discussion Prompt",
    "Lab Instructions",
    "Exam Review Session",
    "New Grade Posted",
    "Office Hours Update",
    "Reading Assignment",
    "Practice Problems",
    "Midterm Review Sheet",
    "Final Exam Information",
    "Group Meeting",
    "Canvas Announcement"
  ];

  const bodies = [
    "Please review the instructions and submit before the deadline.",
    "A reminder to check the rubric and grading criteria.",
    "Materials for this week are now available on Canvas.",
    "Let us know if you have any questions before class.",
    "This is a reminder regarding the upcoming deadline.",
    "Feedback will be posted later this week.",
    "Please complete the assigned reading before next lecture."
  ];

  function rand(n) {
    return Math.floor(Math.random() * n);
  }

  const messages = [];

  for (let i = 1; i <= 25; i++) {
    const course = courses[rand(courses.length)];
    const subject = subjects[rand(subjects.length)];
    const unread = Math.random() < 0.4;

    messages.push({
      id: `m${i}`,
      course,
      subject,
      unread,
      starred: false,   // you’re not showing stars now, but keep for filters if needed
      sent: `${rand(21) + 1} days ago`,
      lastRead: unread ? null : `${rand(10) + 1} days ago`,
      body: `${course} – ${subject}\n\n${bodies[rand(bodies.length)]}`
    });
  }

  window.CONVERSATIONS_DATA = messages;
})();
