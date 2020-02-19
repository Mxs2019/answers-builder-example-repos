export default {
  iconName: "mic",
  universalLimit: 5,
  card: {
    callToActions: [
      {
        url: p => p.c_primaryCTA,
        label: "View Details",
        icon: "info"
      }
    ],
    templateMappings: {
      subtitle: profile => profile.c_title,
      details: profile => Formatter.truncate(profile.c_sessionInformation),
      image: profile => Formatter.image(profile.headshot)
    }
  }
};
