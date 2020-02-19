export default {
  iconName: "mic",
  universalLimit: 3,
  pagination: true,
  card: {
    callsToAction: [
      {
        analyticsEventType: "CTA_CLICK",
        label: "Watch",
        icon: "mic",
        url: profile => profile.website_url
      }
    ],
    templateMappings: {
      subtitle: profile => {
        let subtitle = "";
        const dates = Formatter.dateRange(profile);
        const speakers = Formatter.joinList(profile.c_speakers, ", ");
        subtitle += dates;
        if (dates && speakers) {
          subtitle += " - ";
        }
        subtitle += speakers;
        return subtitle;
      }
    }
  }
};
