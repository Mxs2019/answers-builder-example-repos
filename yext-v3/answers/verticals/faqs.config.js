export default {
  iconName: "callout",
  sectionTitle: "FAQs",
  universalLimit: 3,
  pagination: true,
  card: {
    cardType: "Accordion",
    callsToActionFields: ["c_primaryCTA", "c_secondaryCTA"],
    templateMappings: {
      details: profile => profile.c_answer
    }
  }
};
