jQuery(document).ready(function(){
    $("a").click(function(e) {
      e.preventDefault();
    });
    $("form").submit(function(e){
        return false;
    });
    $(".search-btn").click(function(e) {
      e.preventDefault();
      $(".search-input").css('display','flex');
      $(".search-input").children(":first").focus();
    });


    // Fill slider
    let data = [
        {image: 'new-collection5.png', text: 'Boyfriend jeans with patch detail', price: '$29.99'},
        {image: 'new-collection4.png'},
        {image: 'new-collection3.png', text: 'Boyfriend jeans with patch detail', price: '$29.99'},
        {image: 'new-collection2.png'},
        {image: 'new-collection1.png'}
    ];

    function createItem (url,txt,prc) {
        let imageUrl = 'content/images/';
        let item = document.createElement('div');
        item.className = "item";
        let info = document.createElement('div');
        info.className = "i-info";
        let text = document.createElement('div');
        text.className = "text";
        let price = document.createElement('div');
        price.className = "price";
        let butt = document.createElement('div');
        butt.className = "btn";
        butt.innerHTML = "Quick view";
        let $item = $(item);
        let $info = $(info);

        $item.css('background-image', 'url('+imageUrl+url+')');
        text.innerHTML = txt;
        price.innerHTML = prc;
        $info.append(text);
        $info.append(price);
        $info.append(butt);
        $item.append($info);

        return $item;
    }
    $('.items').empty();
    // Fill slider with 5 items
    for (var i = 0; i < data.length; i++) {
        if(i>4)
        {
            return;
        }
        $('.items').append(createItem (data[i].image,data[i].text,data[i].price));
    }

    // Navigation buttons
    let counter = 0;
    $('.slider-wrapper .left-nav').click(function(){
        if(data.length<=5)
        {
            $('.items').append(createItem (data[counter].image,data[counter].text,data[counter].price));
            counter++;
            if(counter >= data.length)
                counter = 0;
            $('.items .item:first-child').remove();
        }
    });
    $('.slider-wrapper .right-nav').click(function(){
        if(counter === 0) {
            counter = data.length;
        }
        if(data.length<=5)
        {
            counter--;
            $('.items').prepend(createItem (data[counter].image,data[counter].text,data[counter].price));
            $('.items .item:last-child').remove();
        }
        //console.log('123');
    });
});
