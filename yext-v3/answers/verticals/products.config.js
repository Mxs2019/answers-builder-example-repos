import { Formatter } from "formatter";

export default {
  iconName: "tag",
  universalLimit: 3,
  card: {
    callsToActions: p => [
      {
        label: "View Details",
        url: p.c_primaryCTA
      },
      {
        label: "View Details",
        url: p.c_secondaryCTA
      }
    ],
    templateMappings: {
      image: profile => {
        return profile.logo ? Formatter.image(profile.logo.image) : null;
      },
      link: profile =>
        profile.c_productLink ? profile.c_productLink : profile.website,
      subtitle: profile => profile.c_shortDescription,
      details: profile => {
        const desc = Formatter.truncate(profile.description);
        const features = Formatter.buildCardFeatures("c_packageFeatures")(
          profile
        );
        if (!(desc || features)) {
          return null;
        }
        return `
					${desc ? desc : ""}
					${
            features
              ? `<div class="yxt-Result-subtitle">Features:</div>${features}`
              : ""
          }`;
      }
    }
  }
};
