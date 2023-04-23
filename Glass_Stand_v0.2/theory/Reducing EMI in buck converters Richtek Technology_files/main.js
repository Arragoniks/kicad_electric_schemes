var menuEvent = function (e) {
	var index = $('#menu-l1 > li > a').index(this);
	if (!$(this).parent().hasClass('active')) {
		$('#menu-l1 > li').removeClass('active on');
		$(this).parent().addClass('active');
		$('.submenu > section').addClass('hide');
		$('.submenu > section').eq(index).removeClass('hide');
		$('.wrap').removeClass('wrap-no-menu');
	}

	e.preventDefault();
	e.stopPropagation();
};

$(function () {
	// 高度處理
	$(window).on('load', function () {
		var maxMenuHeight = Math.max.apply(null, $('.submenu > section, #menu-l1').map(function () {
			return $(this).height();
		}).get());
		$('.main').css({ 'min-height': maxMenuHeight + 'px' });
	});

	// 下拉
	$('select').each(function (index, el) {
		var css = 'transformSelect';
		if ($(el).data('fancyform-class') != undefined)
			css += (' ' + $(el).data('fancyform-class'));

		$(el).transformSelect({
			dropDownClass: css,	// Class of the main UL
			showFirstItemInDrop: true,			// Show or hide the first item within the dropdown (e.g. "Select a country")
			acceptManualInput: false,			// You want to be able to type your own value? ({name}_backup will be created with a new input {name})
			useManualInputAsFilter: false,		// Use the manual input as a filter (add data-settings='{"alwaysvisible" : true}' to the option if you don't want the element to hide)
			//subTemplate: function () { return "<span>" + $(this).text() + "</span>"; },     // The template of the LI within the dropdown
			initValue: function () { return $(this).text(); },          // The initial value of the <span></span> of the selected element
			valueTemplate: function () { return $(this).text(); },      // The selected value, after initial value  
			ellipsisLength: null // The max length of the selected text
		});
	});
	$('.transformSelectDropdown').each(function (i, el) {
		$(this).css({ 'min-width': $(this).prev('span').outerWidth() - 2 });
	});

	$('.breadcrumbs .transformSelectDropdown').each(function (i, el) {
		$(this).css({ 'width': $(this).parents('.transformSelect').prev('select').outerWidth() });
	});

	// 搜尋功能 - Technical Document
	$('select option[data-to-show]').parent().on('change', function (e) {
		$('option[data-to-show]', this).each(function (index, el) {
			$($(this).data('to-show')).addClass('hide');
		});
		$($('option[data-to-show]:selected', this).data('to-show')).removeClass('hide');
	});
	//$('select').trigger('change');

	// 選單
	$('#menu-l1 > li > a').bind('click', menuEvent);

	// Go top
	$(window).on('scroll', function (e) {
		if ($(window).scrollTop() > 1) {
			$('.gotop').show();
		} else {
			$('.gotop').hide();
		}

		//if ($(window).scrollTop() > 70) {
		//	$('nav').css({ 'position': 'fixed', 'top': 0, 'z-index': 2000 });
		//	//$('nav').css({ 'position': 'relative', 'top': $(window).scrollTop() -70, 'z-index': 2000 });
		//} else {
		//	$('nav').css({ 'position': 'relative', 'z-index': 'auto' });
		//}
	});

	// 搜尋
	$('.search-box input').autocomplete({
		serviceUrl: 'search.json',
		onSelect: function (suggestion) { }
	});

	// Tab
	$('.tab-nav > [data-tab="true"]').on('click', function (e) {
		var groupID = $(this).data('tab-group');
		var index = $('.tab-nav > [data-tab="true"][data-tab-group="' + groupID + '"]').index($(this));
		var current = $('.tab-nav > [data-tab="true"][data-tab-group="' + groupID + '"]').index($('.tab-nav > .active[data-tab="true"][data-tab-group="' + groupID + '"]'));
		if (index != current) {
			$('[data-tab="true"][data-tab-group="' + groupID + '"]').removeClass('active');
			$(this).addClass('active');
			$('.tab-panel[data-tab-group="' + groupID + '"]').eq(current).fadeOut(200, function () {
				$(this).removeClass('active');
				$('.tab-panel[data-tab-group="' + groupID + '"]').eq(index).fadeIn(200, function () {
					$('.tab-panel[data-tab-group="' + groupID + '"]').eq(index).addClass('active');
				});
			});
		}
		

		e.preventDefault();
	})
});