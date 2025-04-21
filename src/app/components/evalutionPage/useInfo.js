const useInfo = () => {
    const data = {
      sections: [
        {
          category: "Employee Information",
          fields: [
            { label: "Full Name", type: "text" },
            { label: "Job Title", type: "text" },
            { label: "Department", type: "text" },
            { label: "Employment Duration", type: "text" },
            { label: "Manager/Supervisor", type: "text" },
          ],
        },
        {
          category: "Performance Evaluation Scale",
          ratings: [
            "Poor",
            "Needs Improvement",
            "Meets Expectations",
            "Exceeds Expectations",
            "Outstanding",
          ],
        },
        {
          category: "Technical Proficiency",
          descriptions: {
            1: [
              { text: "Knowledge of industry-standard technologies and tools." },
              { text: "Ability to write clean, maintainable, and efficient code.", key: "technicalSkills" },
              { text: "Experience with database management and optimization.", key: "technicalSkills" },
            ],
            2: [
              { text: "Proficiency in relevant programming languages and frameworks.", key: "technicalSkills" },
              { text: "Ability to effectively collaborate with cross-functional teams.", key: "technicalSkills" },
            ],
            3: [
              { text: "Hands-on experience with debugging and troubleshooting tools.", key: "technicalSkills" },
            ],
          },
        },
        {
          category: "Problem-Solving Abilities",
          descriptions: [
            { text: "Effectiveness in identifying problems and proposing innovative solutions.", key: "problemSolving" },
            { text: "Creativity in approaching complex challenges with unique solutions.", key: "problemSolving" },
            { text: "Ability to handle ambiguous situations and find clarity.", key: "problemSolving" },
          ],
        },
        {
          category: "Communication Skills",
          descriptions: [
            { text: "Clarity and effectiveness in both written and verbal communication.", key: "communication" },
            { text: "Ability to explain complex ideas to non-technical stakeholders.", key: "communication" },
            { text: "Active listening and effective feedback during team collaboration.", key: "communication" },
          ],
        },
        {
          category: "Leadership and Initiative",
          descriptions: [
            { text: "Ability to motivate and guide team members toward shared goals.", key: "leadership" },
            { text: "Taking initiative to identify and solve problems independently.", key: "leadership",type: "text" },
            { text: "Encouraging a collaborative and positive work environment.", key: "leadership" },
          ],
        },
        {
          category: "Time Management and Productivity",
          descriptions: [
            { text: "Ability to prioritize tasks and meet deadlines effectively.", key: "productivity" },
            { text: "Efficiency in handling multiple projects simultaneously.", key: "productivity" },
            { text: "Demonstrating consistency and reliability in delivering results.", key: "productivity" },
          ],
        },
        {
          category: "Adaptability and Learning",
          descriptions: [
            { text: "Willingness to adapt to new tools, technologies, and methods.", key: "adaptability" },
            { text: "Continuous effort to improve skills and knowledge.", key: "adaptability" },
            { text: "Ability to thrive in a fast-changing work environment.", key: "adaptability" },
          ],
        },
        {
          category: "Collaboration and Teamwork",
          descriptions: [
            { text: "Ability to work harmoniously in a team setting.", key: "collaboration" },
            { text: "Supporting team members and promoting a cooperative work culture.", key: "collaboration" },
            { text: "Effectiveness in resolving conflicts and fostering a positive environment.", key: "collaboration" },
          ],
        },
        {
          category: "Customer Focus and Client Relations",
          descriptions: [
            { text: "Providing excellent service to internal or external customers.", key: "customerFocus" },
            { text: "Building strong relationships with clients and stakeholders.", key: "customerFocus" },
            { text: "Understanding and addressing customer needs and concerns.", key: "customerFocus" },
          ],
        },
      ],
    };
    
    return  data.sections || [];
  };
  export default useInfo;