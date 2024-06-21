import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom right",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      services: {
        youtube: {
          label: "Youtube Embed",
          onAccept: () => {},
          onReject: () => {},
        },
      },
    },
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "We use cookies and other tech to enhance your website experience. With your consent, we improve usability and may share data with partners. Details, revocation options, and data transfer info are in our privacy policy.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: '<a href="/privacy-policy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "These services help us to improve our website by collecting and reporting information about its use.",
              linkedCategory: "analytics",
            },
          ],
        },
      },
    },
  },
};
