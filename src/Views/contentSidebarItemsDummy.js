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
          items: [
            { name: "Add Record", to: "record/add"},
            { name: "View Records", to: "record/view" },
            { name: "Update Record", to: "record/update" }
          ]
        },
        {
          name: 'Attendance',
          icon: "icons",
          items: [
            {name: 'Attendance', to : 'student/attendance'}
          ]
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
      ],[],[],[],[],[
        {
          name: "Default",
          icon: "icon",
          items: [
            {name: "User Service" , to: "/services "}
          ]
        },{
          name: "Manual",
          icon: "icon",
          items: [
            {name: "Services Form" , to: "/ServiceForm"}
          ]
        }
      ]
]

export default contentSideItems;