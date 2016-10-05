page('/');
page('/map', requestController.controlRequest, permits.getUserRequestedData, mapBuilder.populateMap);
// page('/instructions', instructionController.js); //for when we add a third page.
page();
