function negativeNumber(value) {
    return /^\d+(\d+)?$/.test(value);
}

function ConfirmInputQty(msg,url) {
    $.fancybox.open({
        'content': '<p>' + msg + '</p>' +
            '<p>Qty: <input type=text id="ConfirmInputQtyVal" name="ConfirmInputQtyVal"  ></p><p class="tac"><a id="btnOK" href="#" class="btn btn-blue w105">OK</a>&nbsp;<a id="btnCancel" href="#" class="btn btn-blue w105">Cancel</a></p>',
        'modal': true,
        'autoWidth': true,
        'minWidth': 250
    });
    $('p.tac #btnCancel').bind('click', function () {      
        $.fancybox.close();
    });

    $('p.tac #btnOK').bind('click', function () {        
        $.fancybox.close();
        if (!negativeNumber($("#ConfirmInputQtyVal").val() ) ){
            ConfirmInputQty("Invaild number!", url);
        } else {
            location.href = url + encodeURIComponent($("#ConfirmInputQtyVal").val());
        }

    });

}

function ConfirmInputPCQty(msg, url) {
  //  alert(url);
    $.fancybox.open({
        'content': '<p>' + msg + '</p>' +
            '<p>Qty: <input type=text id="ConfirmInputQtyVal" name="ConfirmInputQtyVal"  ></p><p class="ttac"><a id="btnOK" href="#" class="btn btn-blue ">OK</a>&nbsp;&nbsp;<a id="btnCancel" href="#" class="btn btn-blue ">Cancel</a></p>',
        'modal': true,
        'width': 300,
        'minWidth': 250
    });
    $('p.ttac #btnCancel').bind('click', function () {
        $.fancybox.close();
    });

    $('p.ttac #btnOK').bind('click', function () {
        $.fancybox.close();
        if (!negativeNumber($("#ConfirmInputQtyVal").val())) {           
            ConfirmInputPCQty("Invaild number!", url);
        } else {
           // alert(url + encodeURIComponent($("#ConfirmInputQtyVal").val()));
            location.href = url + encodeURIComponent($("#ConfirmInputQtyVal").val());
            
        }

    });

}


function MessageBox(msg, url, showOnNew) {
    $.fancybox.open({
        'content': '<p>' + msg + '</p>' +
            '<p class="tac"><a id="btnOK" href="#" class="btn btn-blue w105">OK</a></p>',
        'modal': true,
        'autoWidth': true,
        'minWidth': 450
    });
    $('p.tac #btnOK').bind('click', function () {
        if (url != undefined) {
            if (showOnNew != undefined)
                window.open(url);
            else
                window.location.replace(url);
                //window.location.href = url;
        }
        $.fancybox.close();
    });
}

function MessageBoxURL_m(url,title) {
    $.fancybox.open({
        padding: 0,
        href: url,
        type: 'iframe',
        iframe: {
            preload: false
        }
    });
}

function MessageBoxURLByScrolling(url, title) {

    $.fancybox.open({
        padding: 0,
        href: url,
        type: 'iframe',
        scrolling: 'yes',
        iframe: {
            preload: false
        }
    });
}


function MessageBox_m(msg, url, showOnNew) {
    $.fancybox.open({
        'content': '<p>' + msg + '</p>' +
            '<p class="tac"><a id="btnOK" href="#" class="btn btn-blue w105">OK</a></p>',
        'modal': true,
        'autoWidth': true,
        'minWidth': 250
    });
    $('p.tac #btnOK').bind('click', function () {
        if (url != undefined) {
            if (showOnNew != undefined)
                window.open(url);
            else
                window.location.replace(url);
                //window.location.href = url;
        }
        $.fancybox.close();
    });
}

$(function () {
    $('[data-block-action="open"]').on('click', function (e) {
        var target = $(this).next();
        $.blockUI({
            message: target,
            css: {
                'width': '260px',
                'top': '50%',
                'left': '50%',
                'margin-left': '-130px',
                'margin-top': '-210px',
                'border': 'none',
                'backgroundColor': 'none'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.7
            },
        });
        e.preventDefault();
    });

    $('[data-block-action="cancel"]').on('click', function (e) {
        $.unblockUI();
        e.preventDefault();
    })
});


function OpenVideoItem(videoid) {
    var url = '/Design Support/PreviewVideo?videoid=' + videoid;
    if (videoid != '') {
        $.fancybox.open({
            //'content': '<iframe width="630" height="550" src="' + url + '" frameborder="0" allowfullscreen style="overflow:hidden;" ></iframe>',
            //'ur':url,
            href: url
            , type: 'iframe'
            , 'maxWidth': 630
            , 'minWidth': 630
            //'autoWidth': true
        });
    }
}
