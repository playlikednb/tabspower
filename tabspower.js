$.fn.tabsPower = function () {
    
    // poweredGrp - объект, к которому применяем плагин
    var poweredGrp = $(this),
      allTabItems = poweredGrp.find('.js-tab-item').hide();

    function tabs(allTabItems, clickedBtn) {

      // для срабатывания клика только у неактивных табов
      if ( !(clickedBtn.hasClass('active')) ) {

        var curBtnData = clickedBtn.data('tab-btn'),
            allCurItems = poweredGrp.find('.js-tab-content').find('.js-tab-item');

        clickedBtn.addClass('active')
          .siblings().removeClass('active');

        // если нет дата = all, то показывает все элементы
        if ( clickedBtn.data('tab-btn') === 'all' ) {
          allCurItems.fadeIn();
        } else {
          allCurItems.hide();

          // перебор атрибутов дат элементов меню с кликнутым табом и открытие кликнутого
          allCurItems.each(function(){
            if ( $(this).data('tab-item') === curBtnData ) {
              $(this).fadeIn();
            }
          });

        }

      }
    }

    // событие на клик у кнопки в элементе js-tab-menu
    poweredGrp.find('.js-tab-menu').on('click', '.js-tab-menu-btn', function (e) {
      e.preventDefault();
      var $this = $(this);
      tabs(allTabItems, $this);
    });

    // эмуляция клика по первому табу при загрузке страницы
    poweredGrp.find('.js-tab-menu').each(function(){
      $(this).find('.js-tab-menu-btn').first().click();
    });

  };
  //  $.fn.tabsPower 