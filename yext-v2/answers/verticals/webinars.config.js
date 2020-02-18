export default {
  sectionTitleIconName: "mic",
  universalLimit: 3,
  pagination: true,
  dataMappings: {
    ctas: [ctaTypes.WATCH],
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
};
