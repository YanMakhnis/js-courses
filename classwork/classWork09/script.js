(function ($) {
    $(document).ready(function() {
        // let body = $('body')
        // let ul = $('<ul>')
        // let div = $('<div>')
        // let newElement = div.addClass('main').prepend(ul)
    
        // for(let i = 1; i<=10; i++){
        //     ul.append(`<li>Пункт №${i}</li>`)
        // }

        // ul.find('li').wrapInner('<span>').each(function(){
        //     if($(this).index() %2){
        //         $(this).addClass('bold')
        //     }
        //     $(this).attr('data-order', $(this).index()+1)
        // }).eq(-1).remove()
        // div.prepend('<h3>Перечень задач</h3>')
        // body.prepend(newElement)

        $('h2').each(function(){    // почему стрелочную нельзя?
            $(this).text($(this).text() + '!');
        })

        $('h2').css('fontSize', '30px')

        $('h3').css('color', 'red')

        console.log($('.test'))
        console.log($('h2.test'))
        
        $('p').filter((index, element) => $(element).prev('p').length > 0).each(function(){
            console.log($(this))
        })

        $('li').filter((index, element) => $(element).prev('li.www').length>0).each(function(){
            console.log($(this))
        })

        $('li.www').parent().css('color', 'blue')
        // $('p').each((index, element) => {
        //     alert($(element).text())
        // })

        // $('li').each((index, element) => {
        //     alert($(element).text());
        // });

        $('li').prepend('№')

    
    

        


        
    })
})(jQuery);
