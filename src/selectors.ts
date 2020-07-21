export const selectors = {
    srp: {
      reserveButton: '[data-stid="section-roomtype"] button[data-stid="submit-hotel-reserve"]',
      locationTitle: 'h1[data-stid="content-location-title"]',
      playbackSection: '.playback__section',
      openDynamicMap: 'a[href*="pwaOverlay=map"]',
      ssrOpenDynamicMap: 'button[data-stid="open-dynamic-map"]',
      openHotelFilters: 'a[data-stid="open-hotel-filters"]',
      ssrOpenHotelFilters: 'button[data-stid="open-hotel-filters"]',
      pageHeader: '.page-header',
      resultsList: '.results-list',
      openHotelInformation: 'a[data-stid="open-hotel-information"]',
      openHotelInformation2: '.results-list a[data-stid="open-hotel-information"]',
      hotelTitle: '[data-stid="content-hotel-title"]',
      sectionHotelSearch: '[data-stid="section-hotel-search"]',
      labelStar3: 'label[for="star-2"]',
      submitHotelFilters: 'button[data-stid="submit-hotel-filters"]',
      contentLocationTitle: '[data-stid="content-location-title"]',
      checkinDateButton: '[data-stid="open-date-picker"]',
      checkoutDateButton: '[aria-label*="Check-out"]',
      destinationDialogTrigger: 'button[data-stid="hotels-destination-dialog-trigger"]',
      destinationDialogInput: 'input[data-stid="hotels-destination-dialog-input"]',
      destinationResultItemButton: 'button[data-stid="hotels-destination-result-item-button"]',
      buttonSmallClear: '[data-stid="hotels-destination-dialog-input"] ~ button',
      datePickerDialogMonthName: '[class*=month-name]',
      closeSearchForm: 'section.search-results-toolbar button.uitk-button.uitk-button-small.uitk-button-tertiary',
      badgeDealMember: '[data-stid="section-results"] .uitk-badge-deal-member',
      playbackFilterPillSortPrice: 'button[id="playback-filter-pill-sort-PRICE_LOW_TO_HIGH"], button[id="playback-filter-pill-sort-price"]',
      playbackFilterPillStar30: 'button[id="playback-filter-pill-star-30"]',
      playbackFilterPillRegionId800024: 'button[id="playback-filter-pill-regionId-800024"]',
      radioRegionId800024: 'label[for="radio-regionId-800024"]',
      markerPopupContent: 'div.uitk-marker-popup-content',
      iconToolClose: '[data-icon="tool-close"]',
      mesoAd: 'meso-display-ad',
      searchForm: {
        hiddenStartDate: '[data-stid="input-date"][name="startDate"]',
        hiddenEndDate: '[data-stid="input-date"][name="endDate"]'
      },
      datePicker: {
        dialog: '.uitk-dialog-layer',
        firstDayOfSecondMonth: '.uitk-new-date-picker-month:nth-child(2) .uitk-new-date-picker-first-of-month',
        applyDatePicker: 'button[data-stid="apply-date-picker"]'
      },
      map: {
        overlay: 'a[href*="pwaOverlay=map"]',
        mapSheet: 'section.hsr-map-sheet',
        viewer: '.uitk-map-viewer-map'
      },
      cards: {
        card: '[data-stid="messaging-card"]',
        firstCardPrice: '[data-stid="content-hotel-lead-price"]'
      },
      filter: {
        smallView: {
          searchByPropertyName: '.uitk-dialog-content .uitk-typeahead',
          searchByPropertyNameInput: 'header .uitk-field-input',
          searchByPropertyNameResult: '.uitk-typeahead-results button:not([disabled])',
          searchedPropertyTitle: '[data-stid="content-hotel-title"]'
        }
      },
      sort: {
        dropdownSort: 'select[name="sort"]',
        radioSortPrice: 'label[for="radio-sort-PRICE_LOW_TO_HIGH"], label[for="radio-sort-price"]',
        dropdownSortPrice: 'select[name="sort"] option[value="PRICE_LOW_TO_HIGH"]'
      },
      roomPicker: {
        openRoomPicker: 'button[data-stid="open-room-picker"]',
        applyRoomPickerButton: 'button[data-stid="apply-room-picker"]',
        room1AdultCount: 'input[id="room-1-0-adults"]',
        room1AdultDecrease: '[aria-labelledby="room-1-0-adults-decrease-title"]',
        room1AdultIncrease: '[aria-labelledby="room-1-0-adults-increase-title"]',
        room1ChildCount: 'input[id="room-1-0-children"]',
        room1ChildDecrease: '[aria-labelledby="room-1-0-children-decrease-title"]',
        room1ChildIncrease: '[aria-labelledby="room-1-0-children-increase-title"]'
      }
    },
    pdp: {
      jumplinks: {
        overview: '[href="#Overview"]',
        offers: '[href="#Offers"]',
        amenities: '[href="#Amenities"]',
        policies: '[href="#Policies"]',
        reviews: '[href="#Reviews"]'
      },
      mapImage: 'figure.map__image',
      pageContainer: 'div[data-stid="infosite-page-container"]',
      bffFetchError: '[data-stid="infosite-fetch-error"]',
      pageContainer2: '.page-container.infosite',
      hotelTitle: 'h1[data-stid="content-hotel-title"]',
      iconArrowBack: 'button[data-icon=tool-arrow_back]',
      SubmitHotelReserve: 'button[data-stid="submit-hotel-reserve"]',
      ContentHotelAddress: 'div[data-stid="content-hotel-address"]',
      FirstRoom: '[data-stid="section-roomtype"]',
      mapViewer: 'section.uitk-map-viewer-map',
      hotelMarker: 'div.hotel-popup-anchor',
      poiMarker: 'div.uitk-marker-popup-content.uitk-marker-popup-content-location',
      iconToolClose: '[data-icon="tool-close"]',
      FirstRatePlan: '[data-stid="section-roomtype"] [data-stid="section-rateplan"]',
      FirstPrice: '[data-stid="section-roomtype"] [data-stid="content-hotel-display-price"]',
      locationSummary: '[data-stid="location-summary"]',
      roomList: '[data-stid="section-room-list"]',
      roomType: '[data-stid="section-roomtype"]',
      amenitiesList: '[data-stid="hotel-amenities-list"]',
      amenitiesGrid: '[data-stid="content-room-amenities-grid"]',
      ratePlan: '[data-stid="section-rateplan"]',
      cancellationSummary: '[data-stid="content-rateplan-cancellationsummary"]',
      hotelPrice: '[data-stid="content-hotel-price"]',
      hotelReserve: '[data-stid="submit-hotel-reserve"]',
      firstHotelReserve: '[data-stid="payment-options"] [data-stid="submit-hotel-reserve"]',
      mapSheet: 'section.his-map-sheet',
      stickyBookNow: '.sticky-book-now',
      submitHotelSearch: 'button[data-stid="submit-hotel-search"]',
      room: '.room',
      roomAmenities: '.room-amenities',
      roomMoreDetails: '.room__more-details',
      roomsAndRates: '.rooms-and-rates',
      chooseDateCtaSegment: '[data-stid="choose-date-cta-segment"] button',
      sectionResults: 'section[data-stid="section-results"]',
      reviews: {
            section: '[data-stid="reviews-on-infosite"]',
            summary: '[data-stid="content-hotel-reviewsummary"]',
            seeAll: '[data-stid="see-all-reviews"]',
            seeReviews: '[data-stid="reviews-link"]'
      },
      guest_reviews: {
            rating: 'section.review-meta > h3',
            review_date: 'span[class*="review-meta-date"]',
            dialog_box_cancel: 'button[ data-icon="tool-close"]'
      },
      swxlFooter: '[data-stid="swxl-footer"]',
      openHotelInformation: '.results-list a[data-stid="open-hotel-information"]',
      dateStepperButtonCheckInNext: 'button[data-stid="date-stepper-button-check-in-next"]',
      head: {
        title: 'title',
        metaRobots: 'meta[name="robots"]',
        metaDescription: 'meta[name="description"]',
        metaKeywords: 'meta[name="keywords"]',
        linkCanonical: 'link[rel="canonical"]',
        linkLang: 'link[hreflang]'
      }
    },
    pwa: {
      bottomOfPageElement: `[data-stid="render-status--hydrated"]`
    },
    checkout: {
      body: 'body',
      rulesAndRestriction: 'section[id="rulesandrestrictionspayment"]'
    },
    catchpoint: {
      srp: {
        openHotelInformation: '[data-stid="open-hotel-information"]',
        contentHotelPrice: '[data-stid="content-hotel-price"]'
      },
      pdp: {
        submitHotelReserve: '[data-stid="submit-hotel-reserve"]'
      }
    }
  };
  