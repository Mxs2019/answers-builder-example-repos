export default {
  sectionTitleIconName: "calendar",
  universalLimit: 3,
  card: {
    cardType: "Big-Date",
    callsToAction = event => [
      {
        label: "RSVP",
        url: event.rsvp_url,
        icon: "",        
      },{
        label: "Get Directions",
        url: event.rsvp_url,
        icon: "",
      },
    ],
    templateMappings: {
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
      },
      bigDate: profile => {
        return Formatter.bigDate(profile);
      }
    }
  }
};
