export default {
  iconName: "window",
  universalLimit: 3,
  card: {
    callToActions: p => [
      {
        url: p.c_primaryCTA,
        label: "View Details"
      },
      {
        url: p.c_secondaryCTA,
        label: "Request a Demo"
      }
    ],
    templateMappings: {
      subtitle: profile =>
        Formatter.joinList(profile.c_channelAvailability, ", ")
    }
  }
};
