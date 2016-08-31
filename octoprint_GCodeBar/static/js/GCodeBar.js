/*
 * View model for OctoPrint-Gcodebar
 *
 * Author: Markus Towara
 * License: AGPLv3
 */
$(function() {
    function GcodebarViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        GcodebarViewModel,
        ["controlViewModel"],
        [#gcode_bar]
    ]);
});
