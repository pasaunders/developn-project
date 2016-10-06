page('/', filterController.reveal);
page('/map', requestController.controlRequest, permits.getUserRequestedData, mapBuilder.populateMap, mapController.reveal);
page('/about', aboutController.reveal);
page();
