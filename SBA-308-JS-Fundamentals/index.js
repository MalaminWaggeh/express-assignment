function getLearnerData(course, group, submissions) {
    const scores = calculateScores(group, submissions);
    const result = formatResult(scores);
  
    return result;
  }
  
  function calculateScores(group, submissions) {
  
  }
  
  function formatResult(scores) {
 
  }
  

  const course = {
    id: 1,
    name: "Mathematics",
  };
  
  const group = {
    id: 1,
    name: "Homework",
    course_id: 1,
    weight: 0.5,
    assignments: [
      {
        id: 101,
        name: "Homework 1",
        due: "2023-12-10T23:59:59",
        points: 100,
      },
     
    ],
  };
  
  const submissions = [
    {
      learner_id: 123,
      assignment_id: 101,
      submission: {
        submitted_at: "2023-12-09T22:30:00",
        score: 90,
      },
    },
   
  ];
  
  const result = getLearnerData(course, group, submissions);
  console.log("Result:", result);
  