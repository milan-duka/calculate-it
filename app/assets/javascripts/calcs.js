var init_stock_lookup;

init_stock_lookup = function() {
    $('#calculation-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });
  
  $('#calculation-form').on('ajax:after', function(event, data, status){
    hide_spinner();
    show_article();
  });
  
  $('#calculation-form').on('ajax:success', function(event, data, status){
  $('#calculator').replaceWith(data);
  $('#result-field').focus();
    init_stock_lookup();
  });
  
  $('#calculation-form').on('ajax:error', function(event, xhr, status, error){
    $('#calc-results').replaceWith(' ');
    $('#calc-errors').replaceWith('Calculation error.');
  });
}

$(document).ready(function() {
  init_stock_lookup();
  hide_article();
  //$('.advanced-reset-btn').click(function() { $('#calculation-form')[0].reset() });
})