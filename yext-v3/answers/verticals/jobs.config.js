import { Formatter } from "formatter";

export default {
  iconName: "briefcase",
  sectionTitle: "Jobs",
  universalLimit: 5,
  showChangeFilters: true,
  // TODO: What does thes filter configs do?
  filterConfig: {
    expand: false,
    showMoreLimit: 10
  },
  card: {
    callsToAction: [
      {
        url: p => p.website,
        label: "Learn More",
        icon: "chevron",
        analyticsEventType: "CTA_CLICK"
      }
    ],
    templateMappings: {
      subtitle: profile => profile.c_jobCategory,
      details: profile =>
        Formatter.truncate(
          Formatter.joinList(profile.c_jobLocationShortDescription)
        )
    }
  }
};
