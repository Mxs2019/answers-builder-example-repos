export default {
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
  /*
   * Verticals will automatically be included and added to the vertical property.
   * If you want universal search to use different cards or something else from vertical,
   * you can redefine a vertical here
   */

  verticals: [],
  searchBar: {
    title: "What are you looking for today?",
    labelText: "e.g., How do I create a new entity?",
    submitText: "Submit a Search",
    submitIcon: "light_bulb",
    autoFocus: true
  },
  directAnswers: {
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
