import { Formatter } from "formatter";
import {
  ctaUrlFn,
  buildCtas,
  cta,
  profileCTA,
  MapProvider,
  EventType
} from "answers-experience-builder";

const ctaTypes = {
  DETAILS: cta("Details", "info", EventType.VIEW_WEBSITE),
  PHONE: cta("Call", "phone", EventType.PHONE, Formatter.phoneLink),
  DIRECTIONS: cta(
    "Directions",
    "directions",
    EventType.DIRECTIONS,
    Formatter.getDirectionsUrl
  ),
  RSVP: cta("RSVP", "calendar", EventType.RSVP, ctaUrlFn("ticketUrl")),
  BIO: cta(
    "View Bio",
    "person",
    EventType.VIEW_WEBSITE,
    ctaUrlFn("c_linkedInURL")
  ),
  LEARN_MORE: cta(
    "Learn More",
    "chevron",
    EventType.VIEW_WEBSITE,
    ctaUrlFn("c_productLink")
  ),
  VIEW_DETAILS: cta("View Details", "chevron", EventType.VIEW_WEBSITE),
  WATCH: cta("Watch Webinar", "chevron", EventType.VIEW_WEBSITE),
  READ_MORE: cta("Read More", "chevron", EventType.VIEW_WEBSITE),
  PRIMARY_CTA: profileCTA("c_primaryCTA", "View Details"),
  SECONDARY_CTA: profileCTA("c_secondaryCTA", "View Details")
};

export const config = {
  apiKey: "01db1d1e5ebbaa7ea2e6807ad2196ab3",
  answersKey: "yextanswersconfig",
  mapConfig: {
    mapProvider: MapProvider.GOOGLE,
    apiKey: "AIzaSyB5D45ghF1YMfqTLSzWubmlCN1euBVPhFw",
    labelColor: "white"
  },
  icons: {
    mapIcon: `<svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
          <title>74794444-0192-4DD8-BD32-34B5FD36639B</title>
          <desc>Created with sketchtool.</desc>
          <defs>
              <circle id="path-1" cx="14" cy="14" r="14"></circle>
          </defs>
          <g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="StyleGuide" transform="translate(-100.000000, -4341.000000)">
                  <g id="MapPins" transform="translate(100.000000, 4341.000000)">
                      <g id="Elements/Buttons/MapPins/Pin">
                          <mask id="mask-2" fill="white">
                              <use xlink:href="#path-1"></use>
                          </mask>
                          <use id="Mask" fill="black" fill-rule="evenodd" xlink:href="#path-1"></use>
                          <g id="Styles/Colors/Primary" mask="url(#mask-2)"></g>
                          <path d="M14,28 C21.7319865,28 28,21.7319865 28,14 C28,6.2680135 21.7319865,0 14,0 C6.2680135,0 0,6.2680135 0,14 C0,21.7319865 6.2680135,28 14,28 Z M14,27 C6.82029825,27 1,21.1797017 1,14 C1,6.82029825 6.82029825,1 14,1 C21.1797017,1 27,6.82029825 27,14 C27,21.1797017 21.1797017,27 14,27 Z" id="Border" fill-opacity="0.5" fill="#000000" fill-rule="nonzero" mask="url(#mask-2)"></path>
                      </g>
                  </g>
              </g>
          </g>
        </svg>`
  },
  verticalsWithMapOnVertical: ["offices"],
  verticalsWithMapOnUniversal: ["offices"],
  verticalsWithoutVerticalPage: ["speakers", "promo"],
  verticals: {
    app_directory_partners: {
      sectionTitle: "App Directory",
      sectionTitleIconName: "gear",
      navigationTitle: "App Directory",
      universalLimit: 3,
      pagination: true,
      dataMappings: {
        ctas: [ctaTypes.DETAILS],
        link: null,
        image: profile => {
          if (!profile.logo) {
            return null;
          }
          return Formatter.image(profile.logo.image);
        }
      }
    },
    case_studies: {
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
    },
    events: {
      sectionTitleIconName: "calendar",
      universalLimit: 3,
      dataMappings: {
        ctas: [ctaTypes.RSVP, ctaTypes.DIRECTIONS],
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
    },
    webinars: {
      sectionTitleIconName: "mic",
      universalLimit: 3,
      pagination: true,
      dataMappings: {
        ctas: [ctaTypes.WATCH],
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
        }
      }
    },
    faqs: {
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
    },
    jobs: {
      sectionTitleIconName: "briefcase",
      universalLimit: 5,
      pagination: true,
      showChangeFilters: true,
      filterConfig: {
        expand: false,
        showMoreLimit: 10
      },
      dataMappings: {
        ctas: [ctaTypes.PRIMARY_CTA],
        subtitle: profile => profile.c_jobCategory,
        details: profile =>
          Formatter.truncate(
            Formatter.joinList(profile.c_jobLocationShortDescription)
          )
      }
    },
    leadership: {
      sectionTitleIconName: "person",
      universalLimit: 3,
      dataMappings: {
        subtitle: profile => profile.c_title,
        image: profile => Formatter.image(profile.headshot),
        ctas: [cta("View Bio", "person", EventType.VIEW_WEBSITE)]
      }
    },
    offices: {
      sectionTitleIconName: "office",
      showOrdinal: true,
      universalLimit: 3,
      dataMappings: {
        ctas: [ctaTypes.PHONE, ctaTypes.DIRECTIONS],
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
    },
    packages: {
      sectionTitleIconName: "window",
      universalLimit: 3,
      pagination: true,
      dataMappings: {
        ctas: [
          profileCTA("c_primaryCTA", "View Details"),
          profileCTA("c_secondaryCTA", "Request a Demo")
        ],
        subtitle: profile =>
          Formatter.joinList(profile.c_channelAvailability, ", ")
      }
    },
    products: {
      sectionTitleIconName: "tag",
      universalLimit: 3,
      dataMappings: {
        image: profile => {
          return profile.logo ? Formatter.image(profile.logo.image) : null;
        },
        link: profile =>
          profile.c_productLink ? profile.c_productLink : profile.website,
        subtitle: profile => profile.c_shortDescription,
        ctas: [
          profileCTA("c_primaryCTA", "View Details", "chevron"),
          profileCTA("c_secondaryCTA", "View Details", "chevron")
        ],
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
    },
    publications: {
      sectionTitleIconName: "document",
      universalLimit: 3,
      pagination: true,
      dataMappings: {
        ctas: [ctaTypes.READ_MORE],
        image: profile => {
          if (profile.logo) {
            return Formatter.image(profile.logo.image);
          }
          if (profile.photoGallery) {
            return Formatter.image(profile.photoGallery[0].image);
          }
        }
      }
    },
    promo: {
      dataMappings: {
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
    },
    publishers: {
      sectionTitleIconName: "document",
      universalLimit: 3,
      pagination: true,
      dataMappings: {
        ctas: [ctaTypes.VIEW_DETAILS],
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
    },
    speakers: {
      sectionTitleIconName: "mic",
      universalLimit: 5,
      pagination: true,
      dataMappings: {
        subtitle: profile => profile.c_title,
        details: profile => Formatter.truncate(profile.c_sessionInformation),
        image: profile => Formatter.image(profile.headshot),
        ctas: [profileCTA("c_primaryCTA", "View Details", "info")]
      }
    },
    industries: {
      sectionTitleIconName: "pantheon",
      universalLimit: 3,
      dataMappings: {
        image: profile => {
          return profile.logo ? Formatter.image(profile.logo.image) : null;
        },
        link: profile =>
          profile.c_productLink ? profile.c_productLink : profile.website,
        subtitle: profile => profile.c_shortDescription,
        ctas: [
          profileCTA("c_primaryCTA", "View Details", "chevron"),
          profileCTA("c_secondaryCTA", "View Details", "chevron")
        ],
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
    },
    zendesk: {
      sectionTitle: "Help Center",
      sectionTitleIconName: "yext",
      universalLimit: 3,
      dataMappings: {
        ctas: [
          cta("Learn More", "info", EventType.VIEW_WEBSITE, profile => {
            if (profile.html_url) {
              return profile.html_url;
            }
          })
        ]
      }
    },
    support: {
      sectionTitle: "Links",
      sectionTitleIconName: "link",
      universalLimit: 5
    }
  },
  searchBar: {
    container: ".js-answersSearch",
    title: "What are you looking for today?",
    labelText: "e.g., How do I create a new entity?",
    submitText: "Submit a Search",
    submitIcon: "light_bulb",
    autoFocus: true
  },
  directAnswers: {
    container: ".js-answersDirectAnswer",
    footerText: "Was this the answer you were looking for?",
    viewDetailsText: "View Details"
  },
  showEmptyMap: true,
  qaSubmission: {
    privacyPolicyUrl: "https://www.yext.com/privacy-policy/",
    entityId: "Yext Org"
  },
  conversionTracking: true
};
