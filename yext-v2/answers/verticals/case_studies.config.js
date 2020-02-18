export default {
  sectionTitleIconName: "mic",
  universalLimit: 3,
  pagination: true,
  dataMappings: {
    image: profile => {
      if (profile.logo) {
        return Formatter.image(profile.logo.image);
      }
      if (profile.photoGallery) {
        return Formatter.image(profile.photoGallery[0].image);
      }
    }
  }
};
