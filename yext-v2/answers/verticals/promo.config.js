export default {
  card: {
    templateMappings: {
      details: profile => {
        let string = "";
        if (!profile.details) {
          return string;
        }
        if (profile.detailsLink) {
          const obj = {
            verticalConfigId: "promo",
            entityId: "15033963",
            searcher: "UNIVERSAL",
            ctalabel: "schedule_my_demo"
          };
          const objString = JSON.stringify(obj);
          string += `<a class="Answers-promoDetailsLink" href="${profile.detailsLink}" data-eventtype="CTA_CLICK" data-eventoptions='${objString}'>`;
        }
        string += `<span class="Answers-promoDetails">${profile.details}</span>`;
        if (profile.detailsLink) {
          string += "</a>";
        }
        return string;
      }
    }
  }
};
