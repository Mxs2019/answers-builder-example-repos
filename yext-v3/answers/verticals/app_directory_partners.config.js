export default {
  sectionTitle: "App Directory",
  sectionTitleIconName: "gear",
  navigationTitle: "App Directory",
  universalLimit: 3,
  pagination: true,
  dataMappings: {
    ctas: [ctaTypes.DETAILS],
    link: null,
    image: profile => {
      if (!profile.logo) {
        return null;
      }
      return Formatter.image(profile.logo.image);
    }
  }
};
