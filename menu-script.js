// Menu Tabs Content fucntionality for viewing items
$(document).ready(function () {
    $('#italianPrep').click(function(){
        $('.hotCoffee_list, .coldCoffee_list').addClass('is-hidden');
        $('#hotCoffee, #coldCoffee').removeClass('is-active');
        $('.italian_list').removeClass('is-hidden');
        $('#italianPrep').addClass('is-active');
        
    })

    $('#hotCoffee').click(function(){
        $('.italian_list, .coldCoffee_list').addClass('is-hidden');
        $('#coldCoffee, #italianPrep').removeClass('is-active');
        $('.hotCoffee_list').removeClass('is-hidden');
        $('#hotCoffee').addClass('is-active');
        
    })
    $('#coldCoffee').click(function(){

        $('.italian_list, .hotCoffee_list').addClass('is-hidden');
        $('#hotCoffee, #italianPrep').removeClass('is-active');
        $('.coldCoffee_list').removeClass('is-hidden');
        $('#coldCoffee').addClass('is-active');
        
    })
});