$(document).ready(function() {

    // AdSence
    if ($(window).width() >= 728) {
        if ($('#gads2').length) {
            $('#gads2').html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-8857738058394965" data-ad-slot="4131083537"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        }
        if ($('#gads1').length) {
            $('#gads1').html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-8857738058394965" data-ad-slot="2654350335"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        }
    } else if ($(window).width() < 728) {
        if ($('#gads2').length) {
            $('#gads2').html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8857738058394965" data-ad-slot="8351826739"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        }
        if ($('#gads1').length) {
            $('#gads1').html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8857738058394965" data-ad-slot="1663151539"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        }
    }

    // Р РµСЃР°Р№Р· РѕРєРЅР°
    $(window).resize(function() {
        $('.ui-dialog-content').dialog('option', 'position', {my: 'center', at: 'center', of: window});
    });

    // РћР±С‰РёРµ РЅР°СЃС‚СЂРѕР№РєРё ajax
    $.ajaxSetup({
        type: 'POST',
        async: true,
        dataType: 'json'
    });

    // Р’РІРѕРґ С‚РѕР»СЊРєРѕ С‡РёСЃРµР»
    function enterOnlyNumbers(input, event)
    {
        var isMinus = ((event.keyCode == 109) || (event.keyCode == 189)) ? true : false;

        if (!event.shiftKey) {
            if (isMinus && !input.val()) {
                return true;
            } else {
                return (((event.keyCode > 47) && (event.keyCode < 58))
                    || ((event.keyCode > 95) && (event.keyCode < 106))
                    || ((event.keyCode > 111) && (event.keyCode < 124))
                    || (event.keyCode == 8) || (event.keyCode == 46)
                    || (event.keyCode == 37) || (event.keyCode == 39)
                    && !isMinus) ? true : false;
            }
        } else {
            return false;
        }
    }

    // РџСЂРµРѕР±СЂР°Р·РѕРІР°РЅРёРµ СЃР»РѕРІР° СЂСЏРґРѕРј СЃ С†РёС„СЂРѕР№
    function wordCount($n, $words)
    {
        var $x = ($xx = $n%100)%10;
        return $words[((($xx > 10) && ($xx < 15)) || !$x || (($x > 4) && ($x < 10))) ? 2 : (($x == 1) ? 0 : 1)];
    }

    // РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ РїРѕРґСЃРєР°Р·РѕРє
    $(document).tooltip({track: true});

    // РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ СЃР»Р°Р№РґРµСЂР°
    $('#slider').slider({
        min: $('#slider').data('min'),
        max: $('#slider').data('max'),
        value: $('#slider').data('val'),
        range: 'min',
        create: function(event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text($('#slider').data('val') + ' ' + wordCount($('#slider').data('val'), words));
        },
        slide: function(event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text(ui.value + ' ' + wordCount(ui.value, words));

            if (ui.value > 1) {
                $('#number-unique label').fadeIn(200);
            } else {
                $('#number-unique label').fadeOut(200);
            }
            $('#wkwin-count').val(ui.value);
        }
    });

    // РЎР±СЂРѕСЃ РїРѕРґСЃРІРµС‚РєРё РїРѕР»РµР№ СЃ РѕС€РёР±РєР°РјРё
    $('form').on('focus', '.err', function() {
        $(this).removeClass('err');
    });

    // РћС‚РєСЂС‹С‚СЊ РјРµРЅСЋ РІ С€Р°РїРєРµ
    $('#header .menu-init').click(function() {
        $(this).toggleClass('hvr');
        $('#header .menu').toggleClass('hvr');
    });

    // РџРµСЂРµР№С‚Рё РЅР° СЃР»СѓС‡Р°Р№РЅСѓСЋ СЃС‚СЂР°РЅРёС†Сѓ
    $('#button.main').click(function() {
        var pageList = {
            1: '/number/',
            2: '/joke/',
            3: '/saying/',
            4: '/fact/',
            5: '/ask/',
            6: '/question/',
            7: '/ticket/',
            8: '/password/',
            9: '/vkwin/',
            10: '/nickname/',
            11: '/city/'
        };
        var page = Math.floor(10*Math.random()) + 1;

        location = pageList[page];
    });

    // Р’С‹Р±РѕСЂ С‚РёРїР° РґРёР°РїР°Р·РѕРЅР° С‡РёСЃРµР»
    $('#number-from input[name="from"]').change(function() {
        var wrap = $('#number-from');
        var from = $(this).val();

        wrap.find('label').removeClass('sel');
        $(this).closest('label').addClass('sel');

        wrap.find('li').removeClass('sel');
        wrap.find('li.number-from-' + from).addClass('sel');
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ С‡РёСЃР»Рѕ
    $('#button.number').click(function() {
        var caption = $('#caption');
        var container = $('#number');
        var save = $('#number-save');

        var count = ($('#slider').length) ? $('#slider').slider('value') : 1;
        // var from = $('#number-from input[name="from"]:checked').val();
        // var start = $('#number-start').val();
        // var end = $('#number-end').val();
        // var list = $('#number-list').val();
        // var unique = $('#number-unique input').is(':checked') ? 1 : 0;
        // var tz = new Date().getTimezoneOffset();
        var data = {"number":15783,"save":"wqujsv"};
        if (!data.error) {
          if (count > 1) {
              caption.text(caption.data('mtxt'));
              container.attr('class', 'multi').css('min-height', container.height());
              container.html('<span class="cur"></span>');

              var i = 1;
              for (var n in data.number) {
                  $('<span> ' + data.number[n] + '</span>,')
                      .css({'opacity': 0})
                      .appendTo(container.find('.cur'))
                      .delay(250/data.number.length*(i ++))
                      .animate({'opacity': 1}, 200);
              }

              setTimeout(function() { container.css('min-height', '') }, 250);

              save.html('<span>' + save.data('mtxt') + '</span>');
              $('#pay-dialog').find('.save-link')
                  .attr('href', 'https://randstuff.ru/number/' + data.save + '/')
                  .text('https://randstuff.ru/number/' + data.save + '/');

              $('#pay-dialog').find('form').attr('action', '/number/' + data.save + '/');
          } else {
              caption.text(caption.data('txt'));
              container.attr('class', 'single');

              var number = String(data.number);
              number.split('');

              var html = '<span class="new">';
              for (var i = 0;  i < number.length; i ++) {
                  html += '<span>' + number.charAt(i) + '</span>';
              }
              html += '</span>';

              container.find('.new').attr('class', 'cur');
              container.find('.cur').remove();
              container.append(html);

              var i = 1;
              container.find('.new span').each(function() {
                  $(this)
                      .delay(parseInt(200/number.length)*(i ++))
                      .animate({'bottom': 0}, 200, 'easeOutQuint');
              });

              save.html('<span>' + save.data('txt') + '</span>');
              $('#pay-dialog').find('.save-link')
                  .attr('href', 'https://randstuff.ru/number/' + data.save + '/')
                  .text('https://randstuff.ru/number/' + data.save + '/');

              $('#pay-dialog').find('form').attr('action', '/number/' + data.save + '/');
          }

      }
        // $.ajax({
        //     url: '/number/generate/',
        //     data: {'count': count, 'from': from, 'start': start, 'end': end, 'list': list, 'unique': unique, 'tz': tz},
        //     success: function(data) {
                
        //     }
        // });
    });

    // РћРєРЅРѕ api С‡РёСЃРµР»
    $('#number-api').click(function() {
        $('#api-dialog').dialog({
            width: 'auto',
            modal: true,
            closeText: ''
        });
    });

    // РћРєРЅРѕ СЃРѕС…СЂР°РЅРµРЅРёСЏ С‡РёСЃРµР»
    $('body').on('click' , '#number-save span', function() {
        $('#pay-dialog').dialog({
            width: 'auto',
            modal: true,
            closeText: ''
        });
    });

    // Р’РІРѕРґ РґРёР°РїР°Р·РѕРЅР° С‡РёСЃРµР»
    $('#number-start, #number-end').keydown(function(e) {
        return enterOnlyNumbers($(this), e);
    });

    // РћС‚РїСЂР°РІРёС‚СЊ С„РѕСЂРјСѓ СЃРѕС…СЂР°РЅРµРЅРёСЏ
    $('#pay-dialog form').submit(function() {
        $('#pay-dialog').dialog('close');
    });

    // РџРѕРєР°Р·Р°С‚СЊ РїРѕРґСЂРѕР±РЅРѕСЃС‚Рё СѓРІРµРґРѕРјР»РµРЅРёСЏ
    $('#number-note span').click(function() {
        $('#pay-dialog').dialog({
            width: 'auto',
            modal: true,
            closeText: ''
        });
    });

    // РЎРєСЂС‹С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёРµ
    $('#number-note i').click(function() {
        $('#number-note').fadeOut(200);
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ С€СѓС‚РєСѓ
    $('#button.joke').click(function() {
        var caption = $('#caption');
        var container = $('#joke');
        var vote = $('#vote');
        var share = $('#share');

        $.ajax({
            url: '/joke/generate/',
            success: function(data) {
                if (!data.error) {
                    caption.text(caption.data('txt'));

                    container.find('.text td').css({'opacity': 0})
                        .text(data.joke.text).animate({'opacity': 1}, 200);

                    vote.removeClass('hidden').attr('data-id', data.joke.id);

                    share.attr('href', data.share);
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РІС‹СЃРєР°Р·С‹РІР°РЅРёРµ
    $('#button.saying').click(function() {
        var caption = $('#caption');
        var container = $('#saying');
        var vote = $('#vote');
        var share = $('#share');

        $.ajax({
            url: '/saying/generate/',
            success: function(data) {
                if (!data.error) {
                    caption.text(caption.data('txt'));

                    container.find('.text td').css({'opacity': 0})
                        .html(data.saying.text + '<span class="author">вЂ” ' + data.saying.author + '</span>')
                        .animate({'opacity': 1}, 200);

                    vote.removeClass('hidden').attr('data-id', data.saying.id);

                    share.attr('href', data.share);
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ С„Р°РєС‚
    $('#button.fact').click(function() {
        var caption = $('#caption');
        var container = $('#fact');
        var vote = $('#vote');
        var share = $('#share');

        $.ajax({
            url: '/fact/generate/',
            success: function(data) {
                if (!data.error) {
                    caption.text(caption.data('txt'));

                    container.find('.text td').css({'opacity': 0})
                        .text(data.fact.text).animate({'opacity': 1}, 200);

                    vote.removeClass('hidden').attr('data-id', data.fact.id);

                    share.attr('href', data.share);
                }
            }
        });
    });

    // Р“РѕР»РѕСЃРѕРІР°РЅРёРµ
    $('#vote span').click(function() {
        var vote = $('#vote');

        var id = vote.attr('data-id');
        var type = vote.attr('data-type');
        var rate = $(this).attr('class');

        $.ajax({
            url: '/' + type + '/vote/',
            data: {'id': id, 'rate': rate},
            success: function(data) {
                if (!data.error) {
                    vote.removeAttr('data-id').addClass('hidden');
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РїСЂРµРґСЃРєР°Р·Р°РЅРёРµ
    $('#button.ask').click(function() {
        var caption = $('#caption');
        var ball = $('#ask').find('.ball');
        var empty = ball.find('.empty');
        var prediction = ball.find('.prediction');
        var question = $('#ask-question');

        empty.fadeIn(250, function() {
            $.ajax({
                url: '/ask/generate/',
                data: {'question': question.val()},
                success: function(data) {
                    if (!data.error) {
                        ball.effect('shake', function () {
                            if (data.ask.question) {
                                caption.text(data.ask.question);
                            } else {
                                caption.text(caption.data('txt'));
                            }
                            question.val('');

                            prediction.html(data.ask.prediction);
                            empty.fadeOut(250);
                        });
                    }
                }
            });
        });
    });

    // РџРѕР»СѓС‡РёС‚СЊ РїРѕСЃР»РµРґРЅРёРµ РїСЂРµРґСЃРєР°Р·Р°РЅРёСЏ
    $('#ask-last span').click(function() {
        $.ajax({
            url: '/ask/last/',
            success: function(data) {
                if (!data.error) {
                    var dlg = $('#ask-dialog');

                    dlg.html('');
                    for (var i in data.last) {
                        dlg.append(
                            '<dl>' +
                            '<dt><b>' + dlg.data('txt1') + '</b> ' + data.last[i].question + '</dt>' +
                            '<dd><b>' + dlg.data('txt2') + '</b> ' + data.last[i].prediction + '</dd>' +
                            '</dl>'
                        );
                    }

                    dlg.dialog({
                        width: 'auto',
                        modal: true,
                        closeText: ''
                    });
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РІРѕРїСЂРѕСЃ
    $('#button.question').click(function() {
        var container = $('#question');

        $.ajax({
            url: '/question/generate/',
            success: function(data) {
                if (!data.error) {
                    if (!data.question.restart) {
                        container.attr('data-id', data.question.id);
                        container.find('.text span').css({'opacity': 0})
                            .text(data.question.text).animate({'opacity': 1}, 200);
                        container.find('.text i').attr('class', 'lvl-' + data.question.level);

                        for (var i = 1; i <= 4; i++) {
                            var key = 'answer' + String(i);
                            container.find('[data-num="' + i + '"]').attr('class', 'item').text(data.question[key]);
                        }
                    } else {
                        location.reload();
                    }
                }
            }
        });
    });

    // РћС‚РІРµС‚РёС‚СЊ РЅР° РІРѕРїСЂРѕСЃ
    $('body').on('click', '#question .answers .item:not(.dis)', function() {
        var container = $('#question');
        var progress = $('#question-progress');
        var elem = $(this);

        var id = container.attr('data-id');
        var number = elem.attr('data-num');

        $.ajax({
            url: '/question/answer/',
            data: {'id': id, 'number': number},
            success: function(data) {
                if (!data.error) {
                    if (true === data.answer.success) {
                        elem.addClass('suc');
                        container.find('.answers .item').addClass('dis');
                    } else if (false === data.answer.success) {
                        elem.addClass('err');
                        container.find('.answers [data-num="' + data.answer.correct + '"]').addClass('suc');
                        container.find('.answers .item').addClass('dis');
                    }

                    progress.find('.correct').text(data.stat.correct);
                    progress.find('.incorrect').text(data.stat.incorrect);

                    var width = 50;
                    if (data.stat.total) {
                        width = 100 * data.stat.correct / data.stat.total;
                    }

                    progress.find('.bar').width(width + '%');
                }
            }
        });
    });

    // РџРµСЂРµР·Р°РїСѓСЃС‚РёС‚СЊ РІРѕРїСЂРѕСЃС‹
    $('#question-progress .restart').click(function() {
        $.ajax({
            url: '/question/restart/',
            success: function(data) {
                if (!data.error) {
                    location.reload();
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ СЃС‡Р°СЃС‚Р»РёРІС‹Р№ Р±РёР»РµС‚
    $('#button.ticket').click(function() {
        var container = $('#ticket');
        var stat = $('#ticket-stat');

        $.ajax({
            url: '/ticket/generate/',
            success: function(data) {
                if (!data.error) {
                    var newClass = (true == data.lucky) ? 'lucky' : 'unlucky';

                    container.attr('class', newClass);
                    container.find('.wrap').css({'opacity': 0})
                        .text(data.ticket).animate({'opacity': 1}, 200);

                    stat.find('.count').text(data.stat.count);
                    stat.find('.lucky').text(data.stat.lucky);
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РїР°СЂРѕР»СЊ
    $('#button.password').click(function() {
        var container = $('#password');

        var length = ($('#slider').length) ? $('#slider').slider('value') : 8;
        var numbers = $('#password-numbers input').is(':checked') ? 1 : 0;
        var symbols = $('#password-symbols input').is(':checked') ? 1 : 0;

        $.ajax({
            url: '/password/generate/',
            data: {'length': length, 'numbers': numbers, 'symbols': symbols},
            success: function(data) {
                if (!data.error) {
                    var password = String(data.password);
                    password.split('');

                    var html = '<span class="new">';
                    for (var i = 0;  i < password.length; i ++) {
                        html += '<span>' + password.charAt(i) + '</span>';
                    }
                    html += '</span>';

                    container.find('.new').attr('class', 'cur');
                    container.find('.cur').remove();
                    container.append(html);

                    var i = 1;
                    container.find('.new span').each(function() {
                        $(this)
                            .delay(parseInt(200/password.length)*(i ++))
                            .animate({'bottom': 0}, 200, 'easeOutQuint');
                    });
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РЅРёРєРЅРµР№Рј
    $('#button.nickname').click(function() {
        var container = $('#nickname');

        var numbers = $('#nickname-numbers input').is(':checked') ? 1 : 0;

        $.ajax({
            url: '/nickname/generate/',
            data: {'numbers': numbers},
            success: function(data) {
                if (!data.error) {
                    var nickname = String(data.nickname.value);
                    nickname.split('');

                    var html = '<span class="new">';
                    for (var i = 0;  i < nickname.length; i ++) {
                        html += '<span>' + nickname.charAt(i) + '</span>';
                    }
                    html += '</span>';

                    container.find('.new').attr('class', 'cur');
                    container.find('.cur').remove();
                    container.append(html);

                    var i = 1;
                    container.find('.new span').each(function() {
                        $(this)
                            .delay(parseInt(200/nickname.length)*(i ++))
                            .animate({'bottom': 0}, 200, 'easeOutQuint');
                    });

                    $('#nickname-title span').attr('title', data.nickname.title);
                    $(document).tooltip({track: true});
                }
            }
        });
    });

    // РЎРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РіРѕСЂРѕРґ
    $('#button.city').click(function() {
        var caption = $('#caption');
        var container = $('#city');

        var country = $('input[name="country"]:checked').val();

        $.ajax({
            url: '/city/generate/',
            data: {'country': country},
            success: function(data) {
                if (!data.error) {
                    container.find('.city-name').css({'opacity': 0})
                        .text(data.city.city).animate({'opacity': 1}, 200);

                    container.find('.city-country').css({'opacity': 0})
                        .text(data.city.country).animate({'opacity': 1}, 200);

                    container.find('.city-link a').attr('href', data.city.href);
                }
            }
        });
    });

    // Р’С‹Р±РѕСЂ РіРѕСЂРѕРґР° РґР»СЏ РѕРїСЂРµРґРµР»РµРЅРёСЏ РїРѕР±РµРґРёС‚РµР»СЏ
    $('#vkwin [name="city"]').autocomplete({
        delay: 400,
        open: function() {
            var offset = $('#vkwin [name="city"]').offset(),
                left = offset.left, top = offset.top;

            $(".ui-autocomplete").css({left: left, top: top + 31});
        },
        source: function(request, response) {
            $.ajax({
                url: "/vkwin/cities/",
                data: {q: request.term},
                success: function(data) {
                    response(data.cities);
                }
            });
        }
    });

    // Р’С‹Р±РѕСЂ РІСЂРµРјРµРЅРё РѕРїСЂРµРґРµР»РµРЅРёСЏ РїРѕР±РµРґРёС‚РµР»СЏ
    var tz = new Date().getTimezoneOffset();
    $('#vkwin-tz').val(tz);

    var winTime = $('#vkwin-time input');
    if (winTime.length) {
        var dtMin = new Date();
        var dtMax = new Date();
        dtMin.setTime(dtMin.getTime() + (60 * 60 * 1000));
        dtMax.setTime(dtMax.getTime() + (30 * 24 * 60 * 60 * 1000));

        winTime.datetimepicker({
            minDateTime: dtMin,
            maxDateTime: dtMax
        });

        if (!winTime.val()) {
            winTime.datetimepicker('setDate', dtMin);
        }
    }

    $('#vkwin-end input').change(function() {
        if ($(this).val() == 'time') {
            winTime.fadeIn(200);
        } else {
            winTime.hide();
        }
    });

    // РћРїСЂРµРґРµР»РµРЅРёРµ РїРѕР±РµРґРёС‚РµР»СЏ
    $('#vkwin-form').submit(function() {
        $('#button.vkwin').attr('type', 'button').addClass('active');

        $('#load-dialog').dialog({
            width: 'auto',
            height: 90,
            modal: true,
            closeText: '',
            closeOnEscape : false,
        });
    });

    // РџРѕРєР°Р·Р°С‚СЊ РїРѕРґСЂРѕР±РЅРѕСЃС‚Рё СѓРІРµРґРѕРјР»РµРЅРёСЏ
    $('#contest-note span').click(function() {
        $('#contest-dialog').dialog({
            width: 'auto',
            modal: true,
            closeText: ''
        });
    });

    // РЎРєСЂС‹С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёРµ
    $('#contest-note i').click(function() {
        $('#contest-note').fadeOut(200);
    });

    // РўР°Р№РјРµСЂ
    var timer = $('#timer');
    if (timer.length) {
        function tickLottTimer() {
            var wait    = parseInt(timer.attr('data-wait'));
            var diff    = wait - 1;
            var days    = Math.floor(diff / 86400);
            var hours   = Math.floor((diff -= days * 86400) / 3600);
            var minutes = Math.floor((diff -= hours * 3600) / 60);
            var seconds = diff - minutes * 60;

            if (wait == 0) {
                timer.text('');
                return false;
            }

            var daysWords    = ['РґРµРЅСЊ', 'РґРЅСЏ', 'РґРЅРµР№'];
            var hoursWords   = ['С‡Р°СЃ', 'С‡Р°СЃР°', 'С‡Р°СЃРѕРІ'];
            var minutesWords = ['РјРёРЅСѓС‚Сѓ', 'РјРёРЅСѓС‚С‹', 'РјРёРЅСѓС‚'];
            var secondsWords = ['СЃРµРєСѓРЅРґСѓ', 'СЃРµРєСѓРЅРґС‹', 'СЃРµРєСѓРЅРґ'];

            timer.text(
                (!days ? '' : days + ' ' + wordCount(days, daysWords) + ' ') +
                ((!days && !hours) ? '' : hours + ' ' + wordCount(hours, hoursWords) + ' ') +
                ((!days && !hours && !minutes) ?  '' : minutes + ' ' + wordCount(minutes, minutesWords) + ' ') +
                seconds + ' ' + wordCount(seconds, secondsWords)
            ).attr('data-wait', wait - 1);

            if ((wait - 1) <= 0) {
                location.reload();
                return false;
            }

            setTimeout(tickLottTimer, 1000);
        }

        tickLottTimer(true);
    }

    // РџРѕРєР°Р·Р°С‚СЊ РїСЂР°РІРёР»Р°
    $('#contest-rules .show-text').click(function() {
        $('#contest-rules .text').stop(true, true).slideToggle();
    });

    // РћС‚РїСЂР°РІРёС‚СЊ С„РѕСЂРјСѓ СЃРѕС…СЂР°РЅРµРЅРёСЏ
    $('#contest-dialog form').submit(function() {
        $('#contest-dialog').dialog('close');
    });

    // РЎРїРёРЅРµСЂ СЃС‚СЂР°РЅРёС†С‹ СЃРїР°СЃРёР±Рѕ
    $('.donate-form .spinner').keydown(function(e) {
        return enterOnlyNumbers($(this), e);
    }).spinner();

    // РўР°Р±С‹ РІ Р»Рє
    $('#profile').find('.tabs').tabs({});

    // Р Р°Р±РѕС‚Р° СЃ РєРѕРЅС‚РµРЅС‚РѕРј РІ Р»Рє
    $('#profile').find('[data-toggle="init-delete"]').click(function () {
        var type = $(this).closest('table').data('type');
        var hash = $(this).closest('tr').data('hash');
        var dlg = $('#delete-' + type);

        dlg.dialog({
            width: '260',
            modal: true,
            closeText: ''
        });
        dlg.find('.button').attr('data-hash', hash);
    });
    
    /* РЈРїСЂР°РІР»РµРЅРёРµ РІ Р»Рє */
    $('#delete-number .button, #delete-contest .button').click(function () {
        var type = $(this).attr('data-type');
        var hash = $(this).attr('data-hash');
        var profile = $('#profile');
        var dlg = $('#delete-' + type);

        $.ajax({
            url: "/my/delete/",
            data: {type: type, hash: hash},
            success: function(data) {
                if (data.ok) {
                    profile.find('[data-type="' + type + '"] [data-hash="' + hash + '"]').remove();
                    if (profile.find('[data-type="' + type + '"] tr').length <= 1) {
                        profile.find('[data-type="' + type + '"]').hide().next('p').show();
                    }
                }

                dlg.dialog('close');
            }
        });
    });

    /* Р“Р°Р»РµСЂРµСЏ */
    $('a.colorbox').colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        initialWidth: 200,
        initialHeight: 200,
        opacity: .7
    });
});