page('/', filterController.reveal);
page('/map', requestController.controlRequest, permits.getUserRequestedData, mapBuilder.populateMap, mapController.reveal);
// page('/instructions', instructionController.js); //for when we add a third page.
page();
