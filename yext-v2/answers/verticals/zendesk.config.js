export default {
  sectionTitle: "Help Center",
  iconName: "yext",
  universalLimit: 3,
  card: {
    callsToAction: [
      {
        analyticsEventType: "VIEW_WEBSITE",
        label: "Learn More",
        icon: "info",
        url: profile => profile.html_url
      }
    ],
    templateMappings: {}
  }
};
