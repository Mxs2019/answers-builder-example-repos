import { Formatter } from "formatter";

export default {
  iconName: "callout",
  sectionTitle: "FAQs",
  universalLimit: 3,
  card: {
    cartType: "Accordion",
    callsToActionFields: ["c_primaryCTA", "c_secondaryCTA"],
    templateMappings: {
      image: profile => {
        if (profile.logo) {
          return Formatter.image(profile.logo.image);
        }
        if (profile.photoGallery) {
          return Formatter.image(profile.photoGallery[0].image);
        }
      }
    }
  }
};
