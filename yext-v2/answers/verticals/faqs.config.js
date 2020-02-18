export default {
  sectionTitleIconName: "callout",
  sectionTitle: "FAQs",
  universalLimit: 3,
  navigationTitle: "FAQs",
  useAccordion: true,
  pagination: true,
  dataMappings: {
    collapsed: true,
    details: profile => profile.c_answer,
    ctas: [ctaTypes.PRIMARY_CTA, ctaTypes.SECONDARY_CTA]
  }
};
