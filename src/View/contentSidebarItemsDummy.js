 const contentSideItems = [
    [
        {
          name: 'Students Information',
          icon: "icons",
          items: [
            { name: "add", to: "student/add" },
            { name: "view", to: "student/view" },
            { name: "update", to: "student/update" }
          ]
        },
        {
          name: 'Record',
          icon: "icons",
          to: "/record"
        },
        {
          name: 'Attendance',
          icon: "icons",
          to: "/attendance"
        }
      ],
      [
        {
          name: 'Report Card',
          icon: "icons",
          items: [
            { name: "view", to: "exam/view" },
            { name: "Generate", to: "exam/generate" }
          ]
        },
        {
          name: 'Result Analysis',
          icon: "icons",
          to: "analysis"
        },
        {
          name: 'Admit Card',
          icon: "icons",
          to: "admitCard"
        }
      ]
]

export default contentSideItems;