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
        document.getElementById('appendages').innerHTML='<select id="append"><option value="none">Use URL appendage</option><option value="nowrapper">remove wrapper</option><option value="nocss">remove css</options><option value="nosubheader">remove subheaders</option><option value="bare">remove wrapper, css, and subheaders</option><option value="mobile">force IDX Mobile page</option></select><div id="log"></div>';

        var log = document.getElementById("log");
        // Adding listener
        var sel = document.getElementById("append");
        sel.addEventListener("change", function(e){
          //deterimine of the currtne tab has a ? and handle
          if (sel.value != "none"){
             if (url.indexOf('?') > -1){
                var append = '&'
              }
          else{
            var append = '?'
              }
          //add appendage from selection
          var goto = url+append+sel.value;
          chrome.tabs.update(null, {url: goto});
        }
        else {
          log.innerHTML="<a href=\"https://youtu.be/yMNN78n7Dno\"><br/>URL appendages video</a>";
        }
        });

        // Create event and fire it.
        var changeEvent = document.createEvent("HTMLEvents");
        changeEvent.initEvent("change",true,true);
        sel.dispatchEvent(changeEvent);
      }
      //decalre this page as not V1, pt or lt
    else{
        document.getElementById('idx-page-or-not').innerHTML='<a href="not_idx.html">This is not an IDX Broker Page<a>';
    }


});
