import { Formatter } from "formatter";

export default {
  sectionTitleIconName: "document",
  universalLimit: 3,
  card: {
    callToActions: [
      {
        label: "View Details",
        url: p => p.website
      }
    ],
    templateMapping: {
      image: profile => {
        if (!profile.logo) {
          return null;
        }
        return Formatter.image(profile.logo.image);
      },
      details: profile => {
        const features = Formatter.buildCardFeatures("c_publisherFeature")(
          profile
        );
        if (!features) {
          return null;
        }
        return `
					<div class="yxt-Result-subtitle">
						Features:
					</div>
					${features}
				`;
      }
    }
  }
};
