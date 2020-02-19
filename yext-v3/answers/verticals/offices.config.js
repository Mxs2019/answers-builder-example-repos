import ctaTypes from "ctaTypes";

export default {
  sectionTitleIconName: "office",
  universalLimit: 3,
  card: {
    cardType: "Ordinal",
    sectionType: "Map",
    callsToAction: [ctaTypes.PHONE, ctaTypes.DIRECTIONS],
    templateMapping: {
      details: profile => {
        return `
					<div class="yxt-Result-hours Hours">
						${Formatter.openStatus(profile)}
					</div>
					<div class="yxt-Result-address">
						${Formatter.address(profile)}
					</div>
					<div class="yxt-Result-phone">
						${Formatter.phoneDisplay(profile)}
					</div>
				`;
      }
    }
  }
};
