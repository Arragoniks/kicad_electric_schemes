var AutoCompleteServiceUrl_PartNoOnly = "/PageMethods.aspx/GetListByKeyword";
var AutoCompleteDelayMS = 1000;
function SetupPartNoAutoComplete(ui_txtInput, EnableAutoCompleteCheckMethod) {
    if (!ui_txtInput)
        return;
    if (ui_txtInput.length <= 0)
        return;
    if (ui_txtInput.attr('type') != "text")
        return;
    var tmr_resetAutoComplete;
    var autoComplete_IsLoad = false;
    var method_ResetAutoComplete = function () {
        clearTimeout(tmr_resetAutoComplete);
        autoComplete_IsLoad = true;
        $.ajax({
            type: "POST",
            url: AutoCompleteServiceUrl_PartNoOnly,
            data: '{keyword: "' + ui_txtInput.val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var dataArray = eval(response.d);
                ui_txtInput.autocomplete({ source: dataArray });
            }
        });
    };
    ui_txtInput.bind('keypress.autoCompleteInput', function () {
        if (window.tmr_resetAutoComplete)
            clearTimeout(tmr_resetAutoComplete);
        if (EnableAutoCompleteCheckMethod()) {
            if (autoComplete_IsLoad)
                tmr_resetAutoComplete = setTimeout(method_ResetAutoComplete, AutoCompleteDelayMS);
            else
                method_ResetAutoComplete();
        }
        else {
            ui_txtInput.autocomplete({ source: [] });
            autoComplete_IsLoad = false;
        }
    });
}
function SetPartNoAutoComplete(ui_txtInput) {
    SetupPartNoAutoComplete(ui_txtInput, function () { return true });
}