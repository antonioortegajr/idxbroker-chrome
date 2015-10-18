//get url of active tab
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    //V1(IDX Broker Original) urls will all have a number after /idx/
    //set variables for comparison
    var og_1 = url.indexOf('/idx/'+1);
    var og_2 = url.indexOf('/idx/'+2);
    var og_3 = url.indexOf('/idx/'+3);
    var og_4 = url.indexOf('/idx/'+4);
    var og_5 = url.indexOf('/idx/'+5);
    var og_6 = url.indexOf('/idx/'+6);
    var og_7 = url.indexOf('/idx/'+7);
    var og_8 = url.indexOf('/idx/'+8);
    var og_9 = url.indexOf('/idx/'+9);
    //Pt and Lt urls will have /idx/,/i/, or /m/
    //set variables for comparison
    var p_l = url.indexOf('/idx/');
    var p_l_i = url.indexOf('/i/');
    var p_l_m = url.indexOf('/m/');

    //is this an v1 page?
    if(og_1 > -1 || og_2 > -1 || og_3 > -1 || og_4 > -1 || og_5 > -1 || og_6 > -1 || og_7 > -1 || og_8 > -1 || og_9 > -1) {
        document.getElementById('idx-page-or-not').innerHTML='<a href="is_v1.html">is an IDX Broker Original page</a>';
    }
    //is this pt or lt?
    else if(p_l > -1 || p_l_i > -1 || p_l_m > -1) {
        document.getElementById('idx-page-or-not').innerHTML='<a href="is_pt.html"> is an IDX Broker Page (Lite or Platinum)</a>';
        document.getElementById('appendages').innerHTML='<input id="force-mobile" type="checkbox"> Force Mobile Wrapper (?mobile)<br /><input type="checkbox"> Disable Wrapper / Custom CSS / Subheaders (?bare)<br /><input type="checkbox"> Disable Wrappers (?nowrapper)<br /><input type="checkbox"> Disable Custom CSS (?nocss)<br /><input type="checkbox"> Disable SubHeader (?nosubheader)';
      }
      //decalre this page as not V1, pt or lt
    else{
        document.getElementById('idx-page-or-not').innerHTML='<a href="not_idx.html">This is not an IDX Broker Page<a>';
    }
});
